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
    var txt = `Hi! My name is Nash                         

            I'm Software Engineer with 4+ years experience as a fullstack developer using React.js and Golang

            ### Technology skills is

            - Front-end: React, Next.js, HTML/CSS, JavaScript (ES6+)
            - Back-end: Golang, Gin, Echo, RESTful APIs, Grpc, Kafka, Redis
            - Database: MongoDB, PostgreSQL, MySQL
            - Experience in DevOps skills: Docker, Kubernetes, AWS, Jenkins
            - Collaboration Tools: JIRA, Slack, Lark, Git

            ### My personality is

            - Cheerful
            - Friendly
            - Sociable
            - Creative`;
    var speed = 20;
    if (i.length > 20) speed = 40;
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

var cvPage = document.getElementsByClassName("btn_cv_page")[0];
var learnEngPage = document.getElementsByClassName("btn_learn_eng_page")[0];
var loader = document.getElementsByClassName("hero_section")[0];

window.addEventListener("load", function () {
    // function typeItOut() {
    //     if (document.getElementsByClassName("hero_section").length > 0) {
    //         loader.classList.add("hero_section_load");
    //         icon.style.display = "flex";
    //     }
    // }
    // setTimeout(typeItOut, 3800);

    // function showNav() {
    //     document.getElementsByClassName("hero_cmd")[0].remove();
    //     loader.classList.remove("hero_section_image");
    //     loader.classList.remove("hero_section_load");
    //     loader.classList.add("hero_section_resume");
    //     var div = document.createElement("div");
    //     div.classList.add("hero_section_intro");
    //     var tag = document.createElement("p");
    //     var text = document.createTextNode("DINH THANH NGHIA");
    //     tag.appendChild(text);
    //     var tag1 = document.createElement("span");
    //     var text1 = document.createTextNode("Software Engineer");
    //     tag1.appendChild(text1);
    //     div.appendChild(tag);
    //     div.appendChild(tag1);
    //     loader.appendChild(div);
    //     icon.remove();
    // }

    function navigateCV() {
        window.open("./page/cv/cv.html", "_blank").focus();
    }
    function navigateLearnEnglish() {
        window
            .open("https://bisenosiay.github.io/learn-english/", "_blank")
            .focus();
    }

    cvPage.addEventListener("click", navigateCV);
    learnEngPage.addEventListener("click", navigateLearnEnglish);
});
