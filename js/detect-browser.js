var script1;
var script2;

function detect_browser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        script1 = document.createElement('script');
        script2 = document.createElement('script');
        script1.src = "js/exsurge-2.js";
        script2.src = "js/main-2.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        script1 = document.createElement('script');
        script2 = document.createElement('script');
        script1.src = "js/exsurge-2.js";
        script2.src = "js/main-2.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        script1 = document.createElement('script');
        script2 = document.createElement('script');
        script1.src = "js/exsurge-2.js";
        script2.src = "js/main-2.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        script1 = document.createElement('script')
        script2 = document.createElement('script');
        script1.src = "js/exsurge.js";
        script2.src = "js/main.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        script1 = document.createElement('script')
        script2 = document.createElement('script');
        script1.src = "js/exsurge.js";
        script2.src = "js/main.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        script1 = document.createElement('script');
        script2 = document.createElement('script');
        script1.src = "js/exsurge-2.js";
        script2.src = "js/main-2.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    } else {
        script1 = document.createElement('script');
        script2 = document.createElement('script');
        script1.src = "js/exsurge-2.js";
        script2.src = "js/main-2.js";

        document.head.appendChild(script1);
        document.head.appendChild(script2);
        return;
    }
  }

detect_browser();