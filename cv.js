// utilities
var get = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName("demo").length > 0) {
    var i = 0;
    var txt = `Hi! My name is Nghia                         

            I'm Software Engineer with 1+ years experience coding web applications using React.js

            ### My personality is

            - Cheerful
            - Friendly
            - Sociable
            - Creative`;
    var speed = 60;
    if (i.length > 20) speed = 10;
    function typeItOut() {
        if (i < txt.length) {
            document.getElementsByClassName("demo")[0].innerHTML +=
                txt.charAt(i);
            i++;
            setTimeout(typeItOut, speed);
        }
    }

    setTimeout(typeItOut, 1800);
}

window.addEventListener("load", function () {
    var loader = document.getElementsByClassName("hero_section")[0];
    function typeItOut() {
        if (document.getElementsByClassName("hero_section").length > 0) {
            loader.classList.add("hero_section_load");
        }
    }

    setTimeout(typeItOut, 3800);
});
