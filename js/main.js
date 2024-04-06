// PYSCRIPT GLOBAL VARIABLES //
function createObject(object, variableName)
{
    globalThis[variableName] = object
}

// PYSCRIPT LOADED //
function loaded()
{
    // document.getElementById("loading").style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("enable-sound").style.display = "block";
}
function enable_sound()
{
    document.getElementById("enable-sound").style.display = "none";
    Tone.start();
    reverb = new Tone.Reverb({
        decay: 18,
    }).toDestination();
    welcome_txt();
}
function welcome_txt()
{
    txt = 'Welcome to CPU Gregorian Chant, a generative music application of medieval church song! Gregorian Chant refers to the primary repertory of plainsong, a type of monophonic song sung in liturgies of the Western Church. Hover over our illuminated words for more information, select a button on the right for an article, or select a mode and form on the left to compose a Grgeorian Chant.';
    find_important();
}

// BUTTONS //
var mode_selected = 0;
var form_selected = 0;
var is_performing = 0;
var mode_dropdown = document.getElementById("mode-dropdown");
function reset_mode_and_form()
{
    document.getElementById("song-svg").style.display = "none";
    svg_wrapper.style.cursor = "default";
    resetMode();
    resetForm();
}
function resetMode()
{
    mode_dropdown.innerHTML = "Mode";
    mode_selected = 0;
    gen_btn.disabled = true;
    perform_button.disabled = true;
}
function showMode(item)
{
    mode_dropdown.innerHTML = item.innerHTML;
    active_mode = item.innerHTML.substr(0,1);
    mode_selected = 1;
    mode_info(active_mode);
    if(form_selected == 1)
    {
        gen_btn.disabled = false;
    }
    if(is_performing == 1)
    {
        perform_button.disabled = true;
        initialize_performance(true);
    }
}
var form_dropdown = document.getElementById("form-dropdown");
function resetForm()
{
    form_dropdown.innerHTML = "Form";
    form_selected = 0;
    gen_btn.disabled = true;
    perform_button.disabled = true;
}
function showForm(item)
{
    form_dropdown.innerHTML = item.innerHTML;
    active_form = item.innerHTML;
    form_selected = 1;
    form_info(active_form);
    if(mode_selected == 1)
    {
        gen_btn.disabled = false;
    }
    if(is_performing == 1)
    {
        perform_button.disabled = true;
        initialize_performance(true);
    }
}

// DISPLAY INFO WINDOW //
var x = document.getElementById("x");
// var dict_btn = document.getElementById("dictionary-button");
var history_btn = document.getElementById("history-button");
var notation_btn = document.getElementById("notation-button");
var about_btn = document.getElementById("about-button");
about_btn.style.display = "none";
var mode_btn = document.getElementById("mode-button");
// var dict_display = document.getElementById("dictionary");
var history_display = document.getElementById("history");
var notation_display = document.getElementById("notation");
var solfege_display = document.getElementById("solfege-info");
var about_display = document.getElementById("about");
var info_window = document.getElementById("info-window");
var mode_display = document.getElementById("modes");
var window_clicked = 0;
x.addEventListener("click", () => winderp("x"));
// dict_btn.addEventListener("click", () => winderp("dict"));
history_btn.addEventListener("click", () => winderp("history"));
notation_btn.addEventListener("click", () => winderp("notation"));
about_btn.addEventListener("click", () => winderp("about"));
mode_btn.addEventListener("click", () => winderp("modes"));
var svg_wrapper = document.getElementById("svg-wrapper");
var prev_active;
function winderp(active)
{
    console.log(active);
    if(window_clicked == 0)
    {
        // dict_display.style.display = "none";
        history_display.style.display = "none";
        notation_display.style.display = "none";
        solfege_display.style.display = "none";
        about_display.style.display = "none";
        document.getElementById("body-div").removeEventListener("click", hide_info);
        info_window.style.display = "block";
        x.style.display = "block";
        // if(active=="dict"){dict_display.style.display = "block";}
        if(active=="history"){history_display.style.display = "block";}
        else if(active=="notation")
        {
            notation_display.style.display = "block";
        }
        else if(active=="solfege"){solfege_display.style.display = "block";}
        else if(active=="modes" || active=="Modes"){mode_display.style.display = "block";}
        else if(active=="about")
        {
            about_display.style.display = "block";
        }
        svg_wrapper.style.height = info_window.offsetHeight - 400 + "px";
        window_clicked = 1;
        prev_active = active;
        setTimeout(() => {
            document.getElementById("body-div").addEventListener("click", hide_info);
            svg_wrapper.addEventListener("click", hide_info);
        }, 0);
        return;
    }
    else
    {
        window_clicked = 0;
        svg_wrapper.style.height = "30%";
        if(active == prev_active || active == "x")
        {
            info_window.style.display = "none";
            x.style.display = "none";
            // dict_display.style.display = "none";
            history_display.style.display = "none";
            notation_display.style.display = "none";
            solfege_display.style.display = "none";
            mode_display.style.display = "none";
        }
        else
        {
            winderp(active);
        }
    }
}
function hide_info()
{
    svg_wrapper.style.height = "30%";
    x.style.display = "none";
    info_window.style.display = "none";
    // dict_display.style.display = "none";
    history_display.style.display = "none";
    notation_display.style.display = "none";
    mode_display.style.display = "none";
    document.getElementById("body-div").removeEventListener("click", hide_info);
    window_clicked = 0;
}

// BLUE TEXT //
var blue_div = document.getElementById("blue-text-div");
var blue_div_text = document.getElementById("blue-div-text");
var blue_term = document.getElementById("term");
var blue_def = document.getElementById("def");
var blue_dict = ["Gregorian Chant","n","the central cultural and musical practice of Western plainsong",
                "Hover","v","to float over an object without clicking",
                "Illuminated","adj","ornamented with painted decoration",
                "Monophonic","adj","characterized by a single unaccompanied voice",
                "Mode","n","a musical scale and its characteristic melodic and harmonic qualities",
                "Relative","adj","a mode that shares a finalis with another but holds its own dominant",
                "Authentic","adj","characterized by a melody that moves primarily above the finalis",
                "Plagal","adj","characterized by a melody that moves primarily below the finalis; has the prefix -hypo, Greek for 'under'",
                "Finalis","n","a mode's primary tone and the final tone of the melody",
                "Dominant","n","the note of secondmost importance in a mode, strongly influencing its melodic qualities",
                "Ambitus","n","the range of tones in a mode",
                "Syllabic","adj","a song of few or no neumes",
                "Neumatic","adj","a song of frequently occurring neumes",
                "Melismatic","adj","a song rife with neumes in which many notes are sung to a single syllable",
                "Form","n","the structure of a musical composition",
                "Neume","n","a group of notes sung to a single syllable",
                "Plainsong","n","the body of monophonic chants used in liturgies of the Western church",
                "Do","n","originally Ut, the first degree of the diatonic scale",
                "Re","n","the second degree of the diatonic scale",
                "Mi","n","the third degree of the diatonic scale",
                "Fa","n","the fourth degree of the diatonic scale",
                "Sol","n","the fifth degree of the diatonic scale",
                "La","n","the sixth degree of the diatonic scale",
                "Ti","n","originally Si, the seventh degree of the diatonic scale",
                "Dorian","adj","authentic; the first Gregorian mode; named after the Dorian Greeks",
                "Hypodorian","adj","plagal; the second Gregorian mode; relative of the Dorian mode",
                "Phrygian","adj","authentic; the third Gregorian mode; named after the Phrygians of Anatolia",
                "Hypophrygian","adj","plagal; the fourth Gregorian mode; relative of the Phrygian mode",
                "Lydian","adj","authentic; the fifth Gregorian mode; named after the Lydians of Anatolia",
                "Hypolydian","adj","plagal; the sixth Gregorian mode; relative of the Lydian mode",
                "Mixolydian","adj","authentic; the seventh Gregorian mode; its prefix -mixo means 'mixed' in Greek, and its root 'Lydian' refers to the Lydian mode",
                "Hypomixolydian","adj","plagal; the eigth Gregorian mode; relative of the Mixolydian mode",
                "Medieval","adj","the time period spanning ~500-1500 AD during which the Chrisitan Church dominated cultural and artistic development in the West"];
var blue_dict_i = 0;
function blue_text(e,color,node,str,in_out)
{
    blue_term.style.color = color;
    if(in_out == 1)
    {
        speech_text.style.color = "rgba(0, 0, 0, 1.0)"; // "rgba(0, 0, 0, 0.5)" //
        str = str.charAt(0).toUpperCase() + str.slice(1);
        blue_div.style.display = "inline-block";
        blue_dict_i = blue_dict.indexOf(str);
        blue_term.innerHTML = blue_dict[blue_dict_i];
        // blue_form.innerHTML = blue_dict[blue_dict_i+1];
        blue_def.innerHTML = blue_dict[blue_dict_i+2];
        if(e.clientX >= 0.45*screen.width)
        {
            blue_div.style.left = e.clientX - 260 + "px";
            node.style.cursor = "url(assets/cursors/cursor-finger.png), auto";
        }
        else
        {
            blue_div.style.left = e.clientX + 10 + "px";
            node.style.cursor = "url(assets/cursors/cursor-finger-mirror.png) 30 0, auto";
        }
        blue_div.style.top = e.clientY - 15 + "px";
        blue_div.style.float = "left";
    }
    else
    {
        speech_text.style.color = "rgba(0, 0, 0, 1)"
        blue_div.style.display = "none";
    }
}

// INFO POPUP //
function info_popup()
{
    var red_text = document.getElementsByClassName("red-text");
    for(let i=0; i<red_text.length; i++)
    {
        red_text[i].addEventListener("click", () => {
            document.getElementById("speech-text").innerHTML="";
            type_iterator = 0;
            perform_clicked = 0;
            txt = mode_info(active_mode);
            find_important();
        });
    }
}

// RENDER GABC, START TONE //
var generate_button = document.getElementById("generate-button");
generate_button.addEventListener("click", () => {
    setTimeout(() => {
    gabc = pyodideGlobals.get('song_gabc')

    var ctxt = new exsurge.ChantContext();
    ctxt.lyricTextFont = "'Alagard', serif";
    ctxt.annotationTextSize *= 1.5;
    ctxt.annotationTextFont = ctxt.lyricTextFont;
    ctxt.annotationTextColor = '#d00';

    var score;
    var chantContainer = document.getElementById('song-svg');

    var updateChant = function() {
      if (score) {
        exsurge.Gabc.updateMappingsFromSource(ctxt, score.mappings, gabc);
        score.updateNotations(ctxt);
      } else {
        mappings = exsurge.Gabc.createMappingsFromSource(ctxt, gabc);
        score = new exsurge.ChantScore(ctxt, mappings, true);
        score.annotation = new exsurge.Annotation(ctxt, document.getElementById("mode-dropdown").innerHTML[0]);
      }
      layoutChant();
    }
    var layoutChant = function() {
      // perform layout on the chant
      score.performLayoutAsync(ctxt, function() {
        score.layoutChantLines(ctxt, chantContainer.clientWidth, function() {
          // render the score to svg code
          chantContainer.innerHTML = score.createSvg(ctxt);
          color_finalis_and_dominant();
        });
      });
    }
    updateChant();
    document.getElementById("song-svg").style.display = "block";
    svg_wrapper.style.cursor = "url(assets/cursors/cursor-finger.png), auto";
    }, 500);
    });

// PERFORM GABC //
var perform_button = document.getElementById("perform-button");
var monks_closed = document.getElementById("monks-closed");
var monks_closed_noeyes = document.getElementById("monks-closed-noeyes");
var monks_open = document.getElementById("monks-open");

perform_button.addEventListener("click", initialize_performance);

var rest_iterator = 0;
var perform_btn_clicks = 0;
var voice;
var oscillator;
var breathiness;
var envelope;
var reverb;
var sampler;
var uncolor = () => {for(let i=0; i<illumination_i; i++){illuminated_chant_elements[i].style.fill = "black";}}
function color_finalis_and_dominant()
{
    song_tone = pyodideGlobals.get('song_tone');
    song = song_tone.split(" ");
    var finales = pyodideGlobals.get('Finales');
    console.log(finales);
    let chant_element_arr = document.getElementsByClassName("ChantNotationElement");
    for(let i=0; i<chant_element_arr.length; i++)
    {
        console.log(chant_element_arr[i]);
        if(chant_element_arr[i].id == "Punctum")
        {
            if(song[i]=="G3")
            {
                chant_element_arr[i].style.fill = "rgb(36, 36, 142)";
            }
            else if(song[i]==finales[0])
            {
                chant_element_arr[i].style.fill = "#105719";
            }
        }
    }
    console.log(song);
}

function initialize_performance(disable_perform)
{
    song_tone = pyodideGlobals.get('song_tone');
    song = song_tone.split(" ");

    perform_btn_clicks += 1;

    if(perform_btn_clicks % 2 != 0)
    {
            // voice = new Tone.Sampler({
            //     urls: {
            //         C3: "c3.wav",
            //         D3: "d3.wav",
            //         E3: "e3.wav",
            //         F3: "f3.wav",
            //         G3: "g3.wav",
            //         A3: "a3.wav",
            //         B3: "b3.wav",
            //         C4: "c4.wav"
            //     },
            //     release: 1,
            //     baseUrl: "../assets/samples/",
            //     onload: () => {perform(voice);}
            // }).toDestination();
        // voice = new Tone.Synth().toDestination();
        // reverb = new Tone.Reverb({
        //     decay: 18,
        // }).toDestination();
        // voice.connect(reverb);

        voice = new Tone.Synth({
            oscillator: {
                type: 'fattriangle'
              },
              envelope: {
                attack: 0.25,
                decay: 0.9,
                sustain: .7,
                release: 0.5
              }
        }).toDestination();
        voice.volume.value = -14;
        voice.connect(reverb);
    }

    if(perform_button.innerHTML == "Perform")
    {
        is_performing = 1;
        perform(voice);
        generate_button.disabled = true;
        perform_button.innerHTML = "Stop";
    }
    else if(perform_button.innerHTML == "Stop")
    {
        uncolor();
        is_performing = 0;
        perform_button.disabled = true;
        Tone.Transport.stop();
        voice.dispose();
        // reverb.dispose();
        illuminate_elements = () => {};
        perform_button.innerHTML = "Perform";
        monks_open.style.zIndex = "-2";
        monks_closed_noeyes.style.zIndex = "-1";
        setTimeout(() => {
            if(disable_perform==true)
            {
                perform_button.disabled = true;
                speak();
            }
            else
            {
                perform_button.disabled = false;
                monks_closed.style.zIndex = "-1";
                monks_open.style.zIndex = "-2";
                monks_closed_noeyes.style.zIndex = "-3";
                generate_button.disabled = false;
            }
        }, 250);
    }
}

var illuminated_chant_elements = [];
var illumination_i = 1;
var active_element = [];
var active_element_i = 0;
var time_arr = [];
var illuminate_elements;

function perform(voice)
{
    sing_z = "-2";
    rest_z = "-1";
    rest_iterator = 0;
    var value;
    var prev_value = "0";
    var time_total = 0;
    var rest_time = [];
    time_arr = [];
    active_element = [];
    illuminated_chant_elements = [];
    illuminated_chant_elements = document.getElementsByClassName("ChantNotationElement");
    illumination_i = 1;
    active_element_i = 1;
    for(let i=0; i<illuminated_chant_elements.length; i++)
    {
        active_element.push(illuminated_chant_elements[i].id);
    }

    monks_closed.style.zIndex = "-3";

    Tone.Transport.bpm.value = 130;

    for(let i=0; i<song.length; i++)
    {
        if(song[i]!="|")
        {
            if(song[i].includes("."))
            {
                Tone.Transport.scheduleOnce((time) => {
                    value = "2n";
                    time_total += Tone.Time(prev_value).toSeconds();
                    voice.triggerAttackRelease(song[i].substr(0,2), value, time + time_total);
                    time_arr.push(value);
                    prev_value = "2n";
                }), "id";
            }
            else
            {
                Tone.Transport.scheduleOnce((time) => {
                    value = "4n";
                    time_total += Tone.Time(prev_value).toSeconds();
                    voice.triggerAttackRelease(song[i], value, time + time_total);
                    time_arr.push(value);
                    prev_value = "4n";
                }), "id";
            }
        }
        else
        {
            Tone.Transport.scheduleOnce((time) => {
                value = "4n";
                time_total += Tone.Time(prev_value).toSeconds();
                rest_time.push(Math.round((time + time_total) * 100) / 100);
                voice.triggerAttackRelease("0", value, time + time_total);
                time_arr.push(value);
                prev_value = "4n";
            }), "id";
        }
    }
    Tone.Transport.start();
    monk_sing_state();
    // ILLUMINATE CHANT ELEMENTS && ANIMATE SINGING //
    var child_elm = "";
    var time_seconds = Tone.Time("4n").toMilliseconds();
    var time_subtractor = 5;
    illuminate_elements = () =>
    {
        if(is_performing == 0){return;}
        uncolor();
        child_elm = "";
        if(illuminated_chant_elements[illumination_i].childElementCount == 2)
        {
            child_elm = illuminated_chant_elements[illumination_i].lastChild.attributes[0].nodeValue;
            if(child_elm == "#Mora")
            {
                illuminated_chant_elements[illumination_i].style.fill = "#B40101";
                illumination_i++;
                active_element_i++;
                setTimeout(illuminate_elements, (2*time_seconds)-(time_subtractor));
                return;
            }
        }
        if(active_element[active_element_i]=="Accidental")
        {
            illuminated_chant_elements[illumination_i].style.fill = "#B40101";
            illuminated_chant_elements[illumination_i+1].style.fill = "#B40101";
            illumination_i++;
            active_element_i++;
        }
        if(active_element[active_element_i]=="Punctum" || active_element[active_element_i]=="Apostropha")
        {
            illuminated_chant_elements[illumination_i].style.fill = "#B40101";
            illumination_i++;
            active_element_i++;
            setTimeout(illuminate_elements, (time_seconds)-(time_subtractor));
            return;
        }
        else if(active_element[active_element_i]=="Clivis" || active_element[active_element_i]=="Podatus" || active_element[active_element_i]=="Distropha")
        {
            illuminated_chant_elements[illumination_i].style.fill = "#B40101";
            illumination_i++;
            active_element_i++;
            setTimeout(illuminate_elements, (2*time_seconds)-(time_subtractor));
            return;
        }
        else if(active_element[active_element_i]=="Climacus" || active_element[active_element_i]=="Scandicus" || active_element[active_element_i]=="Torculus" || active_element[active_element_i]=="Porrectus")
        {
            illuminated_chant_elements[illumination_i].style.fill = "#B40101";
            illumination_i++;
            active_element_i++;
            setTimeout(illuminate_elements, (3*time_seconds)-(time_subtractor));
            return;
        }
        else if(active_element[active_element_i]=="QuarterBar" || active_element[active_element_i]=="DoubleBar")
        {
            illuminated_chant_elements[illumination_i].style.fill = "#B40101";
            illumination_i++;
            active_element_i++;
            monk_sing_state();
            if(illuminated_chant_elements[illumination_i])
            {
                setTimeout(monk_sing_state, 0.95*time_seconds);
                setTimeout(illuminate_elements, (time_seconds)-(time_subtractor));
                return;
            }
            else
            {
                initialize_performance(false);
                return;
            }
        }
        else if(active_element[active_element_i] == "Custos" || active_element[active_element_i]=="DoClef" || active_element[active_element_i]=="FaClef")
        {
            illumination_i++;
            active_element_i++;
            illuminate_elements();
            return;
        }
    }
    illuminate_elements();
}

var sing_z = "-2";
var rest_z = "-1";
function monk_sing_state()
{
    [sing_z, rest_z] = [rest_z, sing_z];
    monks_open.style.zIndex = sing_z;
    monks_closed_noeyes.style.zIndex = rest_z;
}

// MONK SPEAKING SOUNDS //
var keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','th','sh',' ','.'];
var key_num = 0;
var sounds = [];
function initialize_speech_audio() // https://github.com/equalo-official/animalese-generator/
{
    for(let [index,ltr] of keys.entries())
    {
        key_num = index+1;
        if(key_num < 10)
        {
            key_num = '0'+key_num.toString();
        }
        sounds[ltr] = './assets/sounds/low/sound'+key_num.toString()+'.wav';
    }
}
initialize_speech_audio();
var isAlpha = function(ch) // https://stackoverflow.com/a/40120933/23386341
{
    return /^[A-Z]$/i.test(ch);
}
var speech = [];
function get_txt_sounds()
{
    for(let i=0; i<txt.length; i++)
    {
        if(txt[i]=="s" && txt[i+1]=="h")
        {
            speech.push(sounds["sh"]);
            continue;
        }
        else if(txt[i]=="t" && txt[i+1]=="h")
        {
            speech.push(sounds["th"]);
            continue;
        }
        else if(txt[i]=="h" && (txt[i-1]=="s" || txt[i-1]=="t"))
        {
            // skip;
            continue;
        }
        else if(txt[i]=="," || txt[i]=="?")
        {
            speech.push(sounds["."]);
            continue;
        }
        else if(txt[i]==txt[i-1])
        {
            // skip;
            continue;
        }
        if(isAlpha(txt[i])!=false && txt[i]!=".")
        {
            // skip;
            continue;
        }
        speech.push(sounds[txt[i]])
    }
    console.log(speech);
}
var audio = new Audio();
function actually_speak()
{
    for(let [index,ltr] of speech.entries())
    {
        audio.src = speech[index];
        // audio.play();
    }
}
// END MONK SPEAKING SOUNDS //