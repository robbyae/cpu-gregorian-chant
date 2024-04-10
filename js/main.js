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
var prev_txt;
var monks_closed = document.getElementById("monks-closed");
var monks_closed_noeyes = document.getElementById("monks-closed-noeyes");
var monks_open = document.getElementById("monks-open");
monks_closed.style.zIndex = "-1";

// TITLE INFO //
document.getElementById("title").addEventListener("click", () => {
    //txt = 'Plainsong, name derived from the Latin "cantus planus", is a medieval style of music sung in Latin and used in liturgies of the Western Church.';
    welcome_txt();
});
// END TITLE INFO //

// MODE INFO //
var active_mode;
document.getElementById("mode-dropdown").addEventListener("click", () => {
    // txt = 'Greogorian Chant uses the diatonic scale and is categorized by eight modes. Modes 1, 3, 5, and 7 are the authentic modes, and modes 2, 4, 6, and 8 are the plagal modes. Each authentic mode has a relative plagal and vice versa. Each mode posesses three defining attributes: a final, a dominant, and an ambitus.';
    txt = 'Gregorian Chant is categorized in eight modes of which there are two varieties: authentic and plagal. Each mode has a relative and posesses three defining attributes: a finalis, a dominant, and an ambitus. Relative modes share the same finalis, but carry different dominants.';
    if(txt != prev_txt){find_important();}

});
var prev_mode = "";
var mode_text = ['The Dorian mode is an authentic mode and relative of the Hypodorian mode. Its finalis is Re, and its dominant falls on the fifth degree, La.',
'The Hypodorian mode is a plagal mode and relative of the Dorian mode. Its finalis is Re, and its dominant falls on the third degree, Fa.',
'The Phrygian mode is an authentic mode and relative of the Hypophrygian mode. Its finalis is Mi, and its dominant falls on the sixth degree, Do.',
'The Hypophrygian mode is a plagal mode and relative of the Phrygian mode. Its finalis is Mi, and its dominant falls on the fourth degree, La.',
'The Lydian mode is an authentic mode and relative of the Hypolydian mode. Its finalis is Fa, and its dominant falls on the fifth degree, Do.',
'The Hypoydian mode is a plagal mode and relative of the Lydian mode. Its finalis is Fa, and its dominant falls on the third degree, La.',
'The Mixolydian mode is an authentic mode and relative of the Hypomixolydian mode. Its finalis is Sol, and its dominant falls on the fifth degree, Re.',
'The Hypomixolydian mode is a plagal mode and relative of the Mixolydian mode. Its finalis is Sol, and its dominant falls on the fourth degree, Do.']
function mode_info(active_mode)
{
    if(active_mode != prev_mode)
    {
        song_svg.style.display = "none";
        svg_wrapper.style.height = "30%";
        svg_wrapper.style.cursor = "default";
        perform_button.style.backgroundColor = "#373c3f";
        perform_button.style.borderColor = "#373c3f";
        perform_btn.disabled = true;
    }
    txt = mode_text[active_mode-1];
    prev_mode = active_mode;
    if(txt != prev_txt){find_important();}
    return txt;
}
// END MODE INFO //

// FORM INFO //
var active_form;
document.getElementById("form-dropdown").addEventListener("click", () => {
    txt = "Gregorian Chant manifests in three forms: syllabic, neumatic, and melismatic. Select the form you want us to sing.";
    if(txt != prev_txt){find_important();}
});
var prev_form = "";
function form_info(active_form)
{
    if(active_form != prev_form)
    {
        song_svg.style.display = "none";
        svg_wrapper.style.height = "30%";
        svg_wrapper.style.cursor = "default";
        perform_button.style.backgroundColor = "#373c3f";
        perform_button.style.borderColor = "#373c3f";
        perform_btn.disabled = true;
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
    if(txt != prev_txt){find_important();}
    return txt;
}
// END FORM INFO //

// GENERATE MESSAGE //
document.getElementById("generate-button").addEventListener("click", () => {
    // txt = "Hover over the chant elements you wish to learn about.";
    // find_important();
    mode_info(active_mode,0);
});
// END GENERATE MESSAGE //

// GLYPH INFO //
function read_svg_element()
{
    var mode_text = document.getElementsByClassName("annotation");
    active_mode = mode_text[0].innerHTML[7];
    for(let i=0; i<mode_text.length; i++)
    {
        mode_text[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",mode_text[i],"Mode",1);
        });
        mode_text[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",mode_text[i],"Mode",0);
        });
    }
    var doClef = document.getElementsByClassName("ChantNotationElement DoClef");
    for(let i=0; i<doClef.length; i++)
    {
        doClef[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",doClef[i],"Do Clef",1);
        });
        doClef[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",doClef[i],"Do Clef",0);
        });
    }
    var faClef = document.getElementsByClassName("ChantNotationElement FaClef");
    for(let i=0; i<faClef.length; i++)
    {
        faClef[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",faClef[i],"Fa Clef",1);
        });
        faClef[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",faClef[i],"Fa Clef",0);
        });
    }
    var punctum = document.getElementsByClassName("ChantNotationElement Punctum");
    for(let i=0; i<punctum.length; i++)
    {
        let last_child = punctum[i].lastChild;
        if(last_child.attributes[0].nodeValue == "#Mora")
        {
            punctum[i].addEventListener("mousemove", (e) => {
                blue_text(e,"#a50202",punctum[i],"Punctum Mora",1);
            });
            punctum[i].addEventListener("mouseleave", (e) => {
                blue_text(e,"#a50202",punctum[i],"Punctum Mora",0);
            });
        }
        else
        {
            punctum[i].addEventListener("mousemove", (e) => {
                blue_text(e,"#a50202",punctum[i],"Punctum",1);
            });
            punctum[i].addEventListener("mouseleave", (e) => {
                blue_text(e,"#a50202",punctum[i],"Punctum",0);
            });
        }
    }
    var podatus = document.getElementsByClassName("ChantNotationElement Podatus");
    for(let i=0; i<podatus.length; i++)
    {
        podatus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",podatus[i],"Podatus",1);
        });
        podatus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",podatus[i],"Podatus",0);
        });
    }
    var clivis = document.getElementsByClassName("ChantNotationElement Clivis");
    for(let i=0; i<clivis.length; i++)
    {
        clivis[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",clivis[i],"Clivis",1);
        });
        clivis[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",clivis[i],"Clivis",0);
        });
    }
    var porrectus = document.getElementsByClassName("ChantNotationElement Porrectus");
    for(let i=0; i<porrectus.length; i++)
    {
        porrectus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",porrectus[i],"Porrectus",1);
        });
        porrectus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",porrectus[i],"Porrectus",0);
        });
    }
    var climacus = document.getElementsByClassName("ChantNotationElement Climacus");
    for(let i=0; i<climacus.length; i++)
    {
        climacus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",climacus[i],"Climacus",1);
        });
        climacus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",climacus[i],"Climacus",0);
        });
    }
    var torculus = document.getElementsByClassName("ChantNotationElement Torculus");
    for(let i=0; i<torculus.length; i++)
    {
        torculus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",torculus[i],"Torculus",1);
        });
        torculus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",torculus[i],"Torculus",0);
        });
    }
    var torculus_resupinus = document.getElementsByClassName("ChantNotationElement TorculusResupinus");
    for(let i=0; i<torculus_resupinus.length; i++)
    {
        torculus_resupinus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",torculus_resupinus[i],"Torculus Resupinus",1);
        });
        torculus_resupinus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",torculus_resupinus[i],"Torculus Resupinus",0);
        });
    }
    var porrectus_flexus = document.getElementsByClassName("ChantNotationElement PorrectusFlexus");
    for(let i=0; i<porrectus_flexus.length; i++)
    {
        porrectus_flexus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",porrectus_flexus[i],"Porrectus Flexus",1);
        });
        porrectus_flexus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",porrectus_flexus[i],"Porrectus Flexus",0);
        });
    }
    var scandicus_flexus = document.getElementsByClassName("ChantNotationElement ScandicusFlexus");
    for(let i=0; i<scandicus_flexus.length; i++)
    {
        scandicus_flexus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",scandicus_flexus[i],"Scandicus Flexus",1);
        });
        scandicus_flexus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",scandicus_flexus[i],"Scandicus Flexus",0);
        });
    }
    var distropha = document.getElementsByClassName("ChantNotationElement Distropha");
    for(let i=0; i<distropha.length; i++)
    {
        distropha[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",distropha[i],"Distropha",1);
        });
        distropha[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",distropha[i],"Distropha",0);
        });
    }
    var tristropha = document.getElementsByClassName("ChantNotationElement Tristropha");
    for(let i=0; i<tristropha.length; i++)
    {
        tristropha[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",tristropha[i],"Tristropha",1);
        });
        tristropha[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",tristropha[i],"Tristropha",0);
        });
    }
    var quarterBar = document.getElementsByClassName("ChantNotationElement QuarterBar");
    for(let i=0; i<quarterBar.length; i++)
    {
        quarterBar[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",quarterBar[i],"Quarter Bar",1);
        });
        quarterBar[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",quarterBar[i],"Quarter Bar",0);
        });
    }
    var doubleBar = document.getElementsByClassName("ChantNotationElement DoubleBar");
    for(let i=0; i<doubleBar.length; i++)
    {
        doubleBar[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",doubleBar[i],"Double Bar",1);
        });
        doubleBar[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",doubleBar[i],"Double Bar",0);
        });
    }
    var accidental = document.getElementsByClassName("ChantNotationElement Accidental");
    for(let i=0; i<accidental.length; i++)
    {
        accidental[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",accidental[i],"Flat",1);
        });
        accidental[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",accidental[i],"Flat",0);
        });
    }
    var scandicus = document.getElementsByClassName("ChantNotationElement Scandicus");
    for(let i=0; i<scandicus.length; i++)
    {
        scandicus[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",scandicus[i],"Scandicus",1);
        });
        scandicus[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",scandicus[i],"Scandicus",0);
        });
    }
    var custos = document.getElementsByClassName("ChantNotationElement Custos");
    for(let i=0; i<custos.length; i++)
    {
        custos[i].addEventListener("mousemove", (e) => {
            blue_text(e,"#a50202",custos[i],"Custos",1);
        });
        custos[i].addEventListener("mouseleave", (e) => {
            blue_text(e,"#a50202",custos[i],"Custos",0);
        });
    }
}
// END GLYPH INFO //

// GET INDICES OF IMPORTANT TEXT //
var plagal;
var green_arr = ["Do","Re","Mi","Fa","Sol","La","Ti","medieval","syllabic","neumatic","melismatic"];
var green_indices = [];
var red_arr = ["plagal","authentic","diatonic","click","Gregorian Chant","illuminated","Dorian","Hypodorian","Phrygian","Hypophrygian","Lydian","Hypolydian","Mixolydian","Hypomixolydian"];
var red_indices = [];
var blue_arr = ["monophonic","mode","form","plainsong","relative","finalis","dominant","ambitus","neume"];
var blue_indices = [];
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
        if(active_arr == "green") {
            if(str.charAt(index+searchStrLen)==" " || str.charAt(index+searchStrLen)=="." || str.charAt(index+searchStrLen)==",")
            {
                green_indices.push(index);
                green_indices.push(index + searchStrLen);
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
            if(str.charAt(index+searchStrLen)==" " || str.charAt(index+searchStrLen)=="." || str.charAt(index+searchStrLen)=="," || str.charAt(index+searchStrLen)=="s")
            {
                blue_indices.push(index);
                blue_indices.push(index + searchStrLen);
                startIndex = index + searchStrLen;
            }
            // else if(str.charAt(index+searchStrLen)=="s")
            // {
            //     blue_indices.push(index);
            //     blue_indices.push(index + searchStrLen);
            //     startIndex = index + searchStrLen;
            //     plural_indices.push(index);
            // }
            else
            {
                startIndex = index + searchStrLen;
            }
        }
    }
}
function find_important()
{
    speech = [];
    green_indices = [];
    red_indices = [];
    blue_indices = [];
    green_index = 0;
    red_index = 0;
    blue_index = 0;
    plural_i = 0;
    type_speed = 18;
    speech_text.innerHTML="";
    type_iterator = 0;
    perform_clicked = 0;

    speech_text.style.display = "none";

    if(span_status == 1)
    {
        span_status = 0;
    }

// GET ALL OCCURRENCES //
    // for(let i=0; i<green_arr.length; i++)
    // {
    //     getIndicesOf(green_arr[i], txt, 0, "green");
    // }
    // for(let i=0; i<red_arr.length; i++)
    // {
    //     getIndicesOf(red_arr[i], txt, 0, "red");
    // }
    // for(let i=0; i<blue_arr.length; i++)
    // {
    //     getIndicesOf(blue_arr[i], txt, 0, "blue");
    // }
// GET FIRST OCCURRENCE //
    for(let i=0; i<green_arr.length; i++)
    {
        if(txt.search(green_arr[i]) != -1)
        {
            let green_text_i_1 = txt.search(" "+green_arr[i])+1;
            let next = green_text_i_1 + green_arr[i].length;
            if(txt.charAt(next)==" " || txt.charAt(next)=="." || txt.charAt(next)==",") // || txt.charAt(next)=="s"
            {
                green_indices.push(green_text_i_1);
                green_indices.push(green_text_i_1 + green_arr[i].length);
            }
        }
    }
    for(let i=0; i<red_arr.length; i++)
    {
        if(txt.search(red_arr[i]) != -1)
        {
            let red_text_i_1 = txt.search(" "+red_arr[i])+1;
            let next = red_text_i_1 + red_arr[i].length;
            if(txt.charAt(next)==" " || txt.charAt(next)=="." || txt.charAt(next)=="," || txt.charAt(next)=="s")
            {
                red_indices.push(red_text_i_1);
                red_indices.push(red_text_i_1 + red_arr[i].length);
            }
        }
    }
    for(let i=0; i<blue_arr.length; i++)
    {
        if(txt.search(blue_arr[i]) != -1)
        {
            let blue_text_i_1 = txt.search(" "+blue_arr[i])+1;
            let next = blue_text_i_1 + blue_arr[i].length;
            if(txt.charAt(next)==" " || txt.charAt(next)=="." || txt.charAt(next)=="," || txt.charAt(next)=="s")
            {
                blue_indices.push(blue_text_i_1);
                blue_indices.push(blue_text_i_1 + blue_arr[i].length);
            }
        }
    }
    green_indices = green_indices.sort((a,b) => {return a-b;});
    red_indices = red_indices.sort((a,b) => {return a-b;});
    blue_indices = blue_indices.sort((a,b) => {return a-b;});
    
    console.log(monks_closed.style.zIndex);
    console.log(isTyping);
    if(isTyping == false)
    {
        typeWriter();
    }
    if(is_talking == 0)
    {
        speak();
    }
    prev_txt = txt;
}
// END GET INDICES OF IMPORTANT TEXT //

// OFFSET TO CENTER TEXT //
function getOffset(el) // https://stackoverflow.com/a/28222246/23386341
{
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}
// END OFFSET TO CENTER TEXT //

// TYPEWRITER EFFECT //
var type_iterator = 0;
var type_speed = 18;
var isTyping = false;
var new_span;
var span_len;
var span_status = 0;
var green_index = 0;
var red_index = 0;
var blue_index = 0;
var speech_box = document.getElementById("speech-box");
var speech_text = document.getElementById("speech-text");
var ghost_text = document.getElementById("ghost-text");
var red_spans = [];
var blue_spans = [];
var green_spans = [];
var active_letter;
function typeWriter()
{
    isTyping = true;
    done_talking = 0;
    ghost_text.innerHTML = txt;
    speech_text.style.display = "block";
    speech_box.style.left = getOffset(ghost_text).left - 12 + "px";
    if(type_iterator < txt.length)
    {
        if(type_iterator == green_indices[green_index])
        {
            span_status = 1;
            new_span = document.createElement("span");
            new_span.className = "green-text";
            speech_text.appendChild(new_span);
            span_len = green_indices[green_index+1];
            let substr_type = () => {
                if(type_iterator < span_len && span_status == 1)
                {
                    new_span.innerHTML += txt.charAt(type_iterator);
                }
                else
                {
                    green_spans = document.getElementsByClassName("green-text");
                    for(let i=0; i<green_spans.length; i++)
                    {
                        green_spans[i].addEventListener("mousemove", (e) => {
                            blue_text(e,"#105719",green_spans[i],green_spans[i].innerHTML,1);
                        });
                        green_spans[i].addEventListener("mouseleave", (e) => {
                            blue_text(e,"#105719",green_spans[i],green_spans[i].innerHTML,0);
                        });
                    }
                    if(span_status == 1){green_index += 2;}
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
                        red_spans[i].addEventListener("mousemove", (e) => {
                            blue_text(e,"#a50202",red_spans[i],red_spans[i].innerHTML,1);
                        });
                        red_spans[i].addEventListener("mouseleave", (e) => {
                            blue_text(e,"#a50202",red_spans[i],red_spans[i].innerHTML,0);
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
            let substr_type = () => {
                if(type_iterator < span_len && span_status == 1)
                {
                    new_span.innerHTML += txt.charAt(type_iterator);
                }
                else
                {
                    blue_spans = document.getElementsByClassName("blue-text");
                    for(let i=0; i<blue_spans.length; i++)
                    {
                        blue_spans[i].addEventListener("mousemove", (e) => {
                            blue_text(e,"rgb(36, 36, 142)",blue_spans[i],blue_spans[i].innerHTML.toLowerCase(),1);
                        });
                        blue_spans[i].addEventListener("mouseleave", (e) => {
                            blue_text(e,"rgb(36, 36, 142)",blue_spans[i],blue_spans[i].innerHTML.toLowerCase(),0);
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
            if(txt.charAt(type_iterator) == "," || txt.charAt(type_iterator) == ":")
            {
                type_speed = 150;
                talk_speed = 200;
            }
            else if(txt.charAt(type_iterator) == "." || txt.charAt(type_iterator) == "!")
            {
                type_speed = 200;
                talk_speed = 250;
            }
            else
            {
                type_speed = 18;
                talk_speed = 100;
            }
            type_iterator++;
            setTimeout(typeWriter, type_speed);
        }
    }
    else
    {
        done_talking = 1;
        is_talking = 0;
        isTyping = false;
    }
}
// END TYPEWRITER EFFECT //

// MONK TALK EFFECT //
var open_z = "2";
var closed_z = "1";
var talk_speed = 100;
var done_talking;
var is_talking = 0;
var perform_clicked = 0;
document.getElementById("perform-button").addEventListener("click", () => {
    perform_clicked = 1;
});
function change_monk_state()
{
    if(talk_speed!=500)
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
    is_talking = 1;

    if(perform_clicked == 1)
    {
        monks_open.style.zIndex = "-2";
        monks_closed_noeyes.style.zIndex = "0";
        monks_closed_noeyes.style.zIndex = "-3";
        is_talking = 0;
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
        talk_speed = 100;
        is_talking = 0;
        return;
    }
    if((talk_speed==250 || talk_speed==200) && monks_closed_noeyes.style.zIndex!=1)
    {
        monks_closed_noeyes.style.zIndex = "2";
        monks_open.style.zIndex = "1";
    }
    else
    {
        change_monk_state();
    }
    setTimeout(speak, talk_speed);
}
// END MONK TALK EFFECT //

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
    monks_closed_noeyes.style.zIndex = "-3";
    monks_closed.style.zIndex = "-1";
    reverb = new Tone.Reverb({
        decay: 18,
    }).toDestination();
}
function enable_sound()
{
    document.getElementById("enable-sound").style.display = "none";
    mode_dropdown.disabled = false;
    form_dropdown.disabled = false;
    history_btn.disabled = false;
    notation_btn.disabled = false;
    mode_btn.disabled = false;
    bib_btn.disabled = false;
    Tone.start();
    welcome_txt();
}
function welcome_txt()
{
    txt = 'Welcome to CPU Gregorian Chant, a generative music application of medieval church song! Gregorian Chant refers to the primary repertory of plainsong, a type of monophonic song sung in liturgies of the Western Church. Hover over our illuminated words for more information, select a button on the right for an article, or choose a mode and form on the left to compose a Gregorian Chant.';
    if(txt != prev_txt){find_important();}
}

// BUTTONS //
var mode_selected = 0;
var form_selected = 0;
var is_performing = 0;
var mode_dropdown = document.getElementById("mode-dropdown");
mode_dropdown.disabled = true;
function reset_mode_and_form()
{
    song_svg.style.display = "none";
    svg_wrapper.style.cursor = "default";
    svg_wrapper.style.height = "30%";
    if(is_performing == 1)
    {
        initialize_performance(true);
    }
    resetMode();
    resetForm();
}
function resetMode()
{
    mode_dropdown.innerHTML = "Mode";
    mode_selected = 0;
    gen_btn.disabled = true;
    perform_button.disabled = true;
    perform_button.style.backgroundColor = "#373c3f";
    perform_button.style.borderColor = "#373c3f";
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
form_dropdown.disabled = true;
function resetForm()
{
    form_dropdown.innerHTML = "Form";
    form_selected = 0;
    gen_btn.disabled = true;
    perform_button.disabled = true;
    perform_button.style.backgroundColor = "#373c3f";
    perform_button.style.borderColor = "#373c3f";
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
// END BUTTONS //

// DISPLAY INFO WINDOW //
var x = document.getElementById("x");
// var dict_btn = document.getElementById("dictionary-button");
var history_btn = document.getElementById("history-button");
var notation_btn = document.getElementById("notation-button");
var mode_btn = document.getElementById("mode-button");
var bib_btn = document.getElementById("bibliography-button");
history_btn.disabled = true;
notation_btn.disabled = true;
mode_btn.disabled = true;
bib_btn.disabled = true;
// var dict_display = document.getElementById("dictionary");
var history_display = document.getElementById("history");
var notation_display = document.getElementById("notation");
var info_window = document.getElementById("info-window");
var mode_display = document.getElementById("modes");
var bib_display = document.getElementById("bibliography");
var window_clicked = 0;
x.addEventListener("click", () => winderp("x"));
// dict_btn.addEventListener("click", () => winderp("dict"));
history_btn.addEventListener("click", () => winderp("history"));
notation_btn.addEventListener("click", () => winderp("notation"));
mode_btn.addEventListener("click", () => winderp("modes"));
bib_btn.addEventListener("click", () => winderp("bibliography"));
var svg_wrapper = document.getElementById("svg-wrapper");
var prev_active;
function winderp(active)
{
    if(window_clicked == 0)
    {
        // dict_display.style.display = "none";
        history_display.style.display = "none";
        notation_display.style.display = "none";
        mode_display.style.display = "none";
        bib_display.style.display = "none";
        document.getElementById("body-div").removeEventListener("click", hide_info);
        info_window.style.display = "block";
        x.style.display = "block";
        // if(active=="dict"){dict_display.style.display = "block";}
        if(active=="history"){history_display.style.display = "block";}
        else if(active=="notation"){notation_display.style.display = "block";}
        else if(active=="modes"){mode_display.style.display = "block";}
        else if(active=="bibliography"){bib_display.style.display = "block";}
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
        if(active == prev_active || active == "x")
        {
            info_window.style.display = "none";
            x.style.display = "none";
            // dict_display.style.display = "none";
            history_display.style.display = "none";
            notation_display.style.display = "none";
            mode_display.style.display = "none";
            bib_display.style.display = "none";
        }
        else
        {
            winderp(active);
        }
    }
}
function hide_info()
{
    if(song_svg.style.display == "none"){svg_wrapper.style.height = "30%";}
    else{svg_wrapper.style.height = "40%";}
    window.scrollTo(0, 0);
    x.style.display = "none";
    info_window.style.display = "none";
    // dict_display.style.display = "none";
    history_display.style.display = "none";
    notation_display.style.display = "none";
    mode_display.style.display = "none";
    bib_display.style.display = "none";
    document.getElementById("body-div").removeEventListener("click", hide_info);
    window_clicked = 0;
}
// END DISPLAY INFO WINDOW //

// BLUE TEXT //
var blue_div = document.getElementById("blue-text-div");
var blue_div_text = document.getElementById("blue-div-text");
var blue_term = document.getElementById("term");
var blue_def = document.getElementById("def");
var blue_dict = ["Gregorian Chant","n","the central cultural and musical practice of Western plainsong",
                "CPU","n","central processing unit; executes instructions of a computer program",
                "Hover","v","to float over an object without clicking",
                "Illuminated","adj","ornamented with painted decoration",
                "Monophonic","adj","characterized by a single unaccompanied voice",
                "Mode","n","a musical scale and its characteristic melodic and harmonic qualities",
                "Relative","adj","a mode that shares a finalis with another but holds its own dominant",
                "Authentic","adj","characterized by a melody that moves primarily above the finalis",
                "Plagal","adj","a mode relative to an authentic, sharing the same finalis but holding a different dominant; has the prefix -hypo, Greek for 'under'",
                "Finalis","n","a mode's primary tone and the final tone of the melody",
                "Dominant","n","the note of secondmost importance in a mode, strongly influencing its melodic qualities",
                "Ambitus","n","the range of tones in a mode",
                "Syllabic","adj","a song of few or no neumes",
                "Neumatic","adj","a song of frequently occurring neumes",
                "Melismatic","adj","a song rife with neumes in which many notes are sung to a single syllable",
                "Form","n","the structure of a musical composition",
                "Neume","n","a group of notes sung to a single syllable",
                "Plainsong","n","the body of monophonic chants used in liturgies of the Western church; name derived from Latin 'cantus planus'",
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
                "Medieval","adj","the time period spanning ~500-1500 AD during which the Chrisitan Church dominated cultural and artistic development in the West",
                "Do Clef","n","a clef that defines the placement of Do on the staff; may be placed on any of the top three staff lines",
                "Fa Clef","n","a clef that defines the placement of Fa on the staff; may be placed on the second or third staff line",
                "Punctum","n","a single note with a value of one beat",
                "Punctum Mora","n","a punctum with a mora, or dot, placed behind a note; the mora doubles the value of the note",
                "Podatus","n","a two-note neume in which the first ascends to the second",
                "Clivis","n","a two-note neume in which the first descends to the second",
                "Porrectus","n","a three-note neume that descends to the second note and ascends to the third; the arched line constitutes two notes",
                "Climacus","n","a descending neume comprised of a virga and two or more rhombi; each note has a value of one beat",
                "Torculus","n","a three-note neume where the first ascends to the second, which descends to the third",
                "Torculus Resupinus","n","a four-note neume that begins low and travels up, down, and back up",
                "Porrectus Flexus","n","a four-note neume that is a porrectus with a low note at the end",
                "Scandicus Flexus","n","a four-note neume of which the first three ascend and the last descends.",
                "Distropha","n","a two-note neume of which both notes share the same tonal value",
                "Tristropha","n","a three-note neume of which all notes share the same tonal value",
                "Quarter Bar","n","notates a brief rest",
                "Double Bar","n","notates the end of a section",
                "Flat","n","lowers the value of the affected note by one semitone; the only accidental in plainsong;always falls on the seventh degree, Ti",
                "Scandicus","n","an ascending three-note neume of which the first note rises to the second, which rises to the third",
                "Custos","n","a note fragment at the end of the staff, indicating the first note of the next line"];
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
// END BLUE TEXT //

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
            if(txt != prev_txt){find_important();}
        });
    }
}

// RENDER GABC //
var song_svg = document.getElementById("song-svg");
var generate_button = document.getElementById("generate-button");
generate_button.addEventListener("click", () => {
    setTimeout(() => {
    perform_button.style.backgroundColor = "#105719";
    perform_button.style.borderColor = "#105719";

    gabc = pyodideGlobals.get('song_gabc')

    var ctxt = new exsurge.ChantContext();
    ctxt.lyricTextFont = "'Alagard', serif";
    ctxt.annotationTextSize *= 1.5;
    ctxt.annotationTextFont = ctxt.lyricTextFont;
    ctxt.annotationTextColor = '#d00';

    var score;

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
        score.layoutChantLines(ctxt, song_svg.clientWidth, function() {
          // render the score to svg code
          song_svg.innerHTML = score.createSvg(ctxt);
          svg_wrapper.style.height = "40%";
        //   color_finalis_and_dominant();
        });
      });
    }
    updateChant();
    song_svg.style.display = "block";
    song_svg.style.cursor = "url(assets/cursors/cursor-finger.png), auto";
    }, 500);
    });
// END RENDER GABC //

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
var speech_tone;
var uncolor = () => {for(let i=0; i<illumination_i; i++){illuminated_chant_elements[i].style.fill = "black";}}
function color_finalis_and_dominant()
{
    song_tone = pyodideGlobals.get('song_tone');
    song = song_tone.split(" ");
    var finales = pyodideGlobals.get('Finales');
    // console.log(finales);
    let chant_element_arr = document.getElementsByClassName("ChantNotationElement");
    for(let i=0; i<chant_element_arr.length; i++)
    {
        // console.log(chant_element_arr[i]);
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
    // console.log(song);
}

function initialize_performance(disable_perform)
{
    song_tone = pyodideGlobals.get('song_tone');
    song = song_tone.split(" ");

    perform_btn_clicks += 1;

    if(perform_btn_clicks % 2 != 0)
    {
        // voice = new Tone.Synth({
        //     oscillator: {
        //         type: 'fattriangle',
        //         spread: 20
        //       },
        //       envelope: {
        //         attack: 0.25,
        //         decay: 0.9,
        //         sustain: .7,
        //         release: 0.9
        //       }
        // }).toDestination();
        voice = new Tone.Sampler({
            urls: {
                C1: "rest.wav",
                C4: "C4.wav"
            },
            release: 1,
            baseUrl: "../assets/samples/",
            attack: 0.25,
            release: 0.35,
            curve: "exponential",
            onload: () => {perform(voice);}
        }).toDestination();
        // voice.volume.value = -14;
        voice.connect(reverb);
    }
    if(perform_button.innerHTML == "Perform")
    {
        is_performing = 1;
        // perform(voice);
        generate_button.disabled = true;
        perform_button.innerHTML = "Stop";
        perform_button.style.backgroundColor = "#a50202";
        perform_button.style.borderColor = "#a50202";
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
        perform_button.style.backgroundColor = "#373c3f";
        perform_button.style.borderColor = "#373c3f";
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
                perform_button.style.backgroundColor = "#105719";
                perform_button.style.borderColor = "#105719";
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
                voice.triggerAttackRelease("C1", value, time + time_total);
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
        else if(active_element[active_element_i]=="Climacus" || active_element[active_element_i]=="Scandicus" || active_element[active_element_i]=="Torculus" || active_element[active_element_i]=="Porrectus" || active_element[active_element_i]=="Tristropha")
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