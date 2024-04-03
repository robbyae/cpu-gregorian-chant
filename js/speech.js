var gen_btn = document.getElementById("generate-button");
var perform_btn = document.getElementById("perform-button");
gen_btn.disabled = true;
perform_btn.disabled = true;

gen_btn.addEventListener("click", () => {
    setTimeout(() => {
    perform_btn.disabled = false;
    },500);
    setTimeout(() => {
        read_svg_element();
    }, 1000);
});

// SPEECH BOX //
var txt;
var monks_closed = document.getElementById("monks-closed");
var monks_closed_noeyes = document.getElementById("monks-closed-noeyes");
var monks_open = document.getElementById("monks-open");
monks_closed.style.zIndex = "-1";

// TITLE INFO //
document.getElementById("title").addEventListener("click", () => {
    //txt = 'Plainsong, name derived from the Latin "cantus planus", is a medieval style of music sung in Latin and used in liturgies of the Western Church.';
    loaded();
});

// MODE INFO //
var active_mode;
document.getElementById("mode-dropdown").addEventListener("click", () => {
    // txt = 'Greogorian Chant uses the diatonic scale and is categorized by eight modes. Modes 1, 3, 5, and 7 are the authentic modes, and modes 2, 4, 6, and 8 are the plagal modes. Each authentic mode has a relative plagal and vice versa. Each mode posesses three defining attributes: a final, a dominant, and an ambitus.';
    txt = 'Gregorian Chant is categorized by eight modes. Modes 1, 3, 5, and 7 are the authentic modes, and modes 2, 4, 6, and 8 are the plagal modes. Each mode has a relative and posesses three defining attributes: a final, a dominant, and an ambitus.';
    find_important();
});
var prev_mode = "";
function mode_info(active_mode, reset)
{
    if(active_mode != prev_mode && reset != 1)
    {
        document.getElementById("song-svg").style.display = "none";
        perform_btn.disabled = true;
    }
    if(active_mode == "1")
    {
        txt = 'The Dorian mode is an authentic mode and relative of the Hypodorian mode. Its tonic is Re, its dominant falls on the fifth degree, Sol, and its final is Re.';
        prev_mode = active_mode;
    }
    else if(active_mode == "2")
    {
        txt = 'The Hypodorian mode is a plagal mode and relative of the Dorian mode. Its tonic is La, its dominant falls on the sixth degree, Fa, and its final is Re.';
        prev_mode = active_mode;
    }
    else if(active_mode == "3")
    {
        txt = 'Mode 3 is an authentic mode and relative of mode 4. Its tonic is Mi, its dominant falls on the sixth degree, Do, and its final is Mi.';
        prev_mode = active_mode;
    }
    else if(active_mode == "4")
    {
        txt = "Mode 4 is a plagal mode and relative of mode 3. Its tonic is Ti, its dominant falls on the seventh degree, La, and its final is Mi.";
        prev_mode = active_mode;
    }
    else if(active_mode == "5")
    {
        txt = "Mode 5 is an authentic mode and relative of mode 6. Its tonic is Fa, its dominant falls on the fifth degree, Do, and its final is Fa.";
        prev_mode = active_mode;
    }
    else if(active_mode == "6")
    {
        txt = "Mode 6 is a plagal mode and relative of mode 5. Its tonic is Do, its dominant falls on the sixth degree, La, and its final is Fa.";
        prev_mode = active_mode;
    }
    else if(active_mode == "7")
    {
        txt = "Mode 7 is an authentic mode and relative of mode 8. Its tonic is Sol, its dominant falls on the fifth degree, Re, and its final is Sol.";
        prev_mode = active_mode;
    }
    else if(active_mode == "8")
    {
        txt = "Mode 8 is a plagal mode and relative of mode 7. Its tonic is Re, its dominant falls on the seventh degree, Do, and its final is Sol.";
        prev_mode = active_mode;
    }
    find_important();
    return txt;
}

// FORM INFO //
var active_form;
document.getElementById("form-dropdown").addEventListener("click", () => {
    txt = "Gregorian Chant manifests in three forms: syllabic, neumatic, and melismatic. Select the form you want us to sing.";
    find_important();
});
var prev_form = "";
function form_info(active_form)
{
    if(active_form != prev_form)
    {
        document.getElementById("song-svg").style.display = "none";
    }
    if(active_form == "Syllabic")
    {
        txt = 'A syllabic song is one in which few neumes, if any, appear.';
        prev_form = active_form;
    }
    else if(active_form == "Neumatic")
    {
        txt = 'A neumatic song is one in which neumes occur frequently.';
        prev_form = active_form;
    }
    else if(active_form == "Melismatic")
    {
        txt = 'A melismatic song is one rife with neumes. There may be many notes to one syllable.';
        prev_form = active_form;
    }
    find_important();
    return txt;
}

// GENERATE MESSAGE //
document.getElementById("generate-button").addEventListener("click", () => {
    txt = "Click the chant elements you wish to learn about.";
    find_important();
});

// GLYPH INFO //
function read_svg_element()
{
    var mode_text = document.getElementsByClassName("annotation");
    active_mode = mode_text[0].innerHTML[7];
    for(let i=0; i<mode_text.length; i++)
    {
        mode_text[i].addEventListener("click", () => {
            mode_info(active_mode, 0);
        });
    }
    var doClef = document.getElementsByClassName("ChantNotationElement DoClef");
    for(let i=0; i<doClef.length; i++)
    {
        doClef[i].addEventListener("click", () => {
            txt = 'Do Clef: A clef that defines the placement of Do on the staff. The Do Clef may be placed on any of the top three staff lines.';//Guide to Neumes//
            find_important();
        });
    }
    var faClef = document.getElementsByClassName("ChantNotationElement FaClef");
    for(let i=0; i<faClef.length; i++)
    {
        faClef[i].addEventListener("click", () => {
            txt = 'Fa Clef: A clef that defines the placement of "Fa" on the staff. The Fa Clef may be placed on the second or third staff line.';//Guide to Neumes//
            find_important();
        });
    }
    var punctum = document.getElementsByClassName("ChantNotationElement Punctum");
    for(let i=0; i<punctum.length; i++)
    {
        punctum[i].addEventListener("click", () => {
            txt = 'Punctum: A single note with a value of one beat.';//Guide to Neumes//
            let last_child = punctum[i].lastChild;
            if(last_child.attributes[0].nodeValue == "#Mora")
            {
                txt='Punctum Mora: A punctum with a mora, or dot, placed behind a note. The mora doubles the value of the note.';//Goodchild,24//
            }
            find_important();
        });
    }
    var podatus = document.getElementsByClassName("ChantNotationElement Podatus");
    for(let i=0; i<podatus.length; i++)
    {
        podatus[i].addEventListener("click", () => {
            txt = "Podatus: A neume of two notes in which the first ascends to the second.";//Guide to Neumes//
            find_important();
        });
    }
    var clivis = document.getElementsByClassName("ChantNotationElement Clivis");
    for(let i=0; i<clivis.length; i++)
    {
        clivis[i].addEventListener("click", () => {
            txt = "Clivis: A neume of two notes in which the first descends to the second.";//Guide to Neumes//
            find_important();
        });
    }
    var porrectus = document.getElementsByClassName("ChantNotationElement Porrectus");
    for(let i=0; i<porrectus.length; i++)
    {
        porrectus[i].addEventListener("click", () => {
            txt = "Porrectus: A three-note neume that descends to the second note and ascends to the third. The arched line constitutes two notes.";//Guide to Neumes//
            find_important();
        });
    }
    var climacus = document.getElementsByClassName("ChantNotationElement Climacus");
    for(let i=0; i<climacus.length; i++)
    {
        climacus[i].addEventListener("click", () => {
            txt = "Climacus: A descending neume comprised of a virga and two or more rhombi. Each note has a value of one beat.";//Guide to Neumes//
            find_important();
        });
    }
    var torculus = document.getElementsByClassName("ChantNotationElement Torculus");
    for(let i=0; i<torculus.length; i++)
    {
        torculus[i].addEventListener("click", () => {
            txt = "Torculus: A neume of three notes. The first ascends to the second, which descends to the third.";//Guide to Neumes//
            find_important();
        });
    }
    var quarterBar = document.getElementsByClassName("ChantNotationElement QuarterBar");
    for(let i=0; i<quarterBar.length; i++)
    {
        quarterBar[i].addEventListener("click", () => {
            txt = "Quarter Bar: The Quarter Bar notates a brief rest.";//Goodchild,11//
            find_important();
        });
    }
    var doubleBar = document.getElementsByClassName("ChantNotationElement DoubleBar");
    for(let i=0; i<doubleBar.length; i++)
    {
        doubleBar[i].addEventListener("click", () => {
            txt = "Double Bar: The Double Bar notates the end of a section.";//Goodchild,11//
            find_important();
        });
    }
    var accidental = document.getElementsByClassName("ChantNotationElement Accidental");
    for(let i=0; i<accidental.length; i++)
    {
        accidental[i].addEventListener("click", () => {
            txt = 'Flat: The only accidental used in plainsong is the flat, which lowers the value of the affected note by one semitone. The flat is always placed on the seventh degree, "Ti".';//Goodchild,29//
            find_important();
        });
    }
    var scandicus = document.getElementsByClassName("ChantNotationElement Scandicus");
    for(let i=0; i<scandicus.length; i++)
    {
        scandicus[i].addEventListener("click", () => {
            txt = 'Scandicus: An ascending neume of three notes. The first rises to the second, which rises to the third.';
            find_important();
        });
    }
    var custos = document.getElementsByClassName("ChantNotationElement Custos");
    for(let i=0; i<custos.length; i++)
    {
        custos[i].addEventListener("click", () => {
            txt = 'Custos: A note fragment at the end of the staff, indicating the first note of the next line.';//Guide to Neumes//
            find_important();
        });
    }
}

// GET INDICES OF IMPORTANT TEXT //
var plagal;
var solfege_arr = ["Do","Re","Mi","Fa","Sol","La","Ti"];
var solfege_indices = [];
var red_arr = ["plagal","authentic","diatonic","click","Gregorian Chant"];
var red_indices = [];
var blue_arr = ["monophonic","hover","mode","form","plainsong","final","dominant","ambitus","neume","syllabic","neumatic","melismatic"];
var blue_indices = [];
var plural_indices = [];
var plural_i = 0;
var plural = 0;
function getIndicesOf(searchStr, str, caseSensitive, active_arr) //https://stackoverflow.com/a/3410557/23386341
{
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return;
    }
    var startIndex = 0, index;
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        if(active_arr == "solfege") {
            if(str.charAt(index+searchStrLen)==" " || str.charAt(index+searchStrLen)=="." || str.charAt(index+searchStrLen)==",")
            {
                solfege_indices.push(index);
                solfege_indices.push(index + searchStrLen);
                startIndex = index + searchStrLen;
            }
            else
            {
                startIndex = index + searchStrLen;
            }
        }
        else if(active_arr == "red") {
            red_indices.push(index);
            red_indices.push(index + searchStrLen);
            startIndex = index + searchStrLen;
        }
        else if(active_arr == "blue") {
            if(str.charAt(index+searchStrLen)==" " || str.charAt(index+searchStrLen)=="." || str.charAt(index+searchStrLen)==",")
            {
                blue_indices.push(index);
                blue_indices.push(index + searchStrLen);
                startIndex = index + searchStrLen;
            }
            else if(str.charAt(index+searchStrLen)=="s")
            {
                blue_indices.push(index);
                blue_indices.push(index + searchStrLen + 1);
                startIndex = index + searchStrLen + 1;
                plural_indices.push(index);
            }
            else
            {
                startIndex = index + searchStrLen;
            }
        }
    }
}
function find_important()
{
    solfege_indices = [];
    red_indices = [];
    blue_indices = [];
    solfege_index = 0;
    red_index = 0;
    blue_index = 0;
    plural_i = 0;
    type_speed = 25;
    speech_text.innerHTML="";
    type_iterator = 0;
    perform_clicked = 0;

    speech_text.style.display = "none";

    if(span_status == 1)
    {
        span_status = 0;
    }

    for(let i=0; i<solfege_arr.length; i++)
    {
        getIndicesOf(solfege_arr[i], txt, 1, "solfege");
    }
    for(let i=0; i<red_arr.length; i++)
    {
        getIndicesOf(red_arr[i], txt, 0, "red");
    }
    for(let i=0; i<blue_arr.length; i++)
    {
        getIndicesOf(blue_arr[i], txt, 0, "blue");
    }
    solfege_indices = solfege_indices.sort((a,b) => {return a-b;});
    red_indices = red_indices.sort((a,b) => {return a-b;});
    blue_indices = blue_indices.sort((a,b) => {return a-b;});

    if(isTyping == false)
    {
        typeWriter();
        if(monks_closed.style.zIndex == "-1")
        {
            speak();
        }
    }
}

// OFFSET TO CENTER TEXT //
function getOffset(el) // https://stackoverflow.com/a/28222246/23386341
{
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

// TYPEWRITER EFFECT //
var type_iterator = 0;
var type_speed = 25;
var isTyping = false;
var new_span;
var span_len;
var span_status = 0;
var solfege_index = 0;
var red_index = 0;
var blue_index = 0;
var speech_box = document.getElementById("speech-box");
var speech_text = document.getElementById("speech-text");
var ghost_text = document.getElementById("ghost-text");
var red_spans = [];
var blue_spans = [];
var solfege_spans = [];
function typeWriter()
{
    isTyping = true;
    done_talking = 0;
    ghost_text.innerHTML = txt;
    speech_text.style.display = "block";
    speech_box.style.left = getOffset(ghost_text).left - 12 + "px";
    if(type_iterator < txt.length)
    {
        if(type_iterator == solfege_indices[solfege_index])
        {
            span_status = 1;
            new_span = document.createElement("span");
            new_span.className = "solfege";
            speech_text.appendChild(new_span);
            span_len = solfege_indices[solfege_index+1];
            let substr_type = () => {
                if(type_iterator < span_len && span_status == 1)
                {
                    new_span.innerHTML += txt.charAt(type_iterator);
                }
                else
                {
                    solfege_spans = document.getElementsByClassName("solfege");
                    for(let i=0; i<solfege_spans.length; i++)
                    {
                        solfege_spans[i].addEventListener("click", () => {
                            winderp("solfege");
                        });
                    }
                    if(span_status == 1){solfege_index += 2;}
                    span_status = 0;
                    setTimeout(typeWriter, type_speed);
                    return;
                }
                type_iterator++;
                setTimeout(substr_type, type_speed);
            }
            setTimeout(substr_type, type_speed);
        }
        else if(type_iterator == red_indices[red_index])
        {
            span_status = 1;
            new_span = document.createElement("span");
            new_span.className = "red-text";
            speech_text.appendChild(new_span);
            span_len = red_indices[red_index+1];
            let substr_type = () => {
                if(type_iterator < span_len && span_status == 1)
                {
                    new_span.innerHTML += txt.charAt(type_iterator);
                }
                else
                {
                    red_spans = document.getElementsByClassName("red-text");
                    for(let i=0; i<red_spans.length; i++)
                    {
                        red_spans[i].addEventListener("click", () => {
                            winderp(red_spans[i].innerHTML.substr(0,str_len-plural).toLowerCase());
                        });
                    }
                    if(span_status == 1){red_index += 2;}
                    span_status = 0;
                    setTimeout(typeWriter, type_speed);
                    return;
                }
                type_iterator++;
                setTimeout(substr_type, type_speed);
            }
            setTimeout(substr_type, type_speed);
        }
        else if(type_iterator == blue_indices[blue_index])
        {
            span_status = 1;
            new_span = document.createElement("span");
            new_span.className = "blue-text";
            speech_text.appendChild(new_span);
            span_len = blue_indices[blue_index+1];
            str_len = blue_indices[blue_index+1]-blue_indices[blue_index];
            let substr_type = () => {
                if(type_iterator < span_len && span_status == 1)
                {
                    new_span.innerHTML += txt.charAt(type_iterator);
                }
                else
                {
                    blue_spans = document.getElementsByClassName("blue-text");
                    if(blue_indices[blue_index] == plural_indices[plural_i]){plural=1;plural_i++;}else{plural=0;};
                    for(let i=0; i<blue_spans.length; i++)
                    {
                        blue_spans[i].addEventListener("mousemove", (e) => {
                            blue_text(e,blue_spans[i],blue_spans[i].innerHTML.substr(0,str_len-plural).toLowerCase(),1);
                        });
                        blue_spans[i].addEventListener("mouseleave", (e) => {
                            blue_text(e,blue_spans[i],blue_spans[i].innerHTML.substr(0,str_len-plural).toLowerCase(),0);
                        });
                    }
                    if(span_status == 1){blue_index += 2;}
                    span_status = 0;
                    setTimeout(typeWriter, type_speed);
                    return;
                }
                type_iterator++;
                setTimeout(substr_type, type_speed);
            }
            setTimeout(substr_type, type_speed);
        }

        else
        {
            speech_text.insertAdjacentHTML('beforeend', txt.charAt(type_iterator));
            if(txt.charAt(type_iterator) == "," || txt.charAt(type_iterator) == ":" || txt.charAt(type_iterator) == "!")
            {
                type_speed = 200;
                talk_speed = 200;
            }
            else if(txt.charAt(type_iterator) == ".")
            {
                type_speed = 250;
                talk_speed = 250;
            }
            else
            {
                type_speed = 25;
                talk_speed = 100;
            }
            type_iterator++;
            setTimeout(typeWriter, type_speed);
        }
    }
    else
    {
        done_talking = 1;
        isTyping = false;
    }
}

// MONK TALK EFFECT //
var open_z = "2";
var closed_z = "1";
var talk_speed = 100;
var done_talking;
var perform_clicked = 0;
document.getElementById("perform-button").addEventListener("click", () => {
    perform_clicked = 1;
});
function change_monk_state()
{
    if(talk_speed != 500)
    {
        [open_z, closed_z] = [closed_z, open_z];
        monks_open.style.zIndex = open_z;
        monks_closed_noeyes.style.zIndex = closed_z;
    }
    else
    {
        monks_closed_noeyes.style.zIndex = "3";
    }
}

function speak()
{
    if(perform_clicked == 1)
    {
        monks_open.style.zIndex = "-2";
        monks_closed_noeyes.style.zIndex = "0";
        monks_closed_noeyes.style.zIndex = "-3";
        return;
    }
    if(done_talking == 1)
    {
        monks_open.style.zIndex = "-2";
        monks_closed_noeyes.style.zIndex = "0";
        setTimeout(() => {
            monks_closed.style.zIndex = "-1";
            monks_closed_noeyes.style.zIndex = "-3";
        }, 250);
        return;
    }
    change_monk_state();
    setTimeout(speak, talk_speed);
}