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

var icon = document.getElementsByClassName("hero_section_btn_off")[0];
var loader = document.getElementsByClassName("hero_section")[0];

window.addEventListener("load", function () {
    function typeItOut() {
        if (document.getElementsByClassName("hero_section").length > 0) {
            loader.classList.add("hero_section_load");
            icon.style.display = "flex";
        }
    }
    setTimeout(typeItOut, 3800);

    function showNav() {
        document.getElementsByClassName("hero_cmd")[0].remove();
        loader.classList.remove("hero_section_image");
        loader.classList.remove("hero_section_load");
        loader.classList.add("hero_section_resume");
        var div = document.createElement("div");
        div.classList.add("hero_section_intro");
        var tag = document.createElement("p");
        var text = document.createTextNode("DINH THANH NGHIA");
        tag.appendChild(text);
        var tag1 = document.createElement("span");
        var text1 = document.createTextNode("Software Engineer");
        tag1.appendChild(text1);
        div.appendChild(tag);
        div.appendChild(tag1);
        loader.appendChild(div);
        icon.remove();
    }
    icon.addEventListener("click", showNav);
});
