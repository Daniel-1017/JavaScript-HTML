let text = document.querySelector(".full-text");

text.onkeypress = function(e) {
    console.log("onkeypress: " + text.value);
};

text.onkeydown = function(e) {
    console.log("onkeydown: " + text.value);
};

text.onkeyup = function(e) {
    console.log("onkeyup: " + text.value);
};

let boldText = document.querySelectorAll("p > b.bold-txt");

boldText.forEach(function(el) {  
    el.onmousedown = function() {
        el.style.color = "red";
    };

    el.onmouseup = function() {
        el.style.color = "blue";
    };  
    
    el.oncontextmenu = function() {
        el.style.color = "green";
    };
});




let inputField = document.querySelector('.input');
let helpField = document.querySelector('.hint');

inputField.onmouseenter = function() {
    helpField.style.display = "block";
};

inputField.onmousemove = function(e) {
    helpField.style.left = e.offsetX + "px";
    helpField.style.top = e.offsetY + "px";
};

inputField.onmouseleave = function() {
    helpField.style.display = "none";
};