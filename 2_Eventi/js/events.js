function clickHref() {
    alert('Ciao a tutti');
    document.querySelector("a.href").style.color = "#333";
    document.querySelector("a.href").style.textDecoration = "none";
}

function clickText(selector) {
    document.querySelector(selector).style.backgroundColor = "#333";
    document.querySelector(selector).style.color = "#fff";
}

// --------------------------------------------------------

let input = document.querySelector("input");

function focusEvent() {
    input.style.backgroundColor = "#333";   
    input.style.padding = "10px";   
    input.style.border = "0";   
}

function focusEndEven() {
    input.style.backgroundColor = "#fff";   
    input.style.padding = "0"; 
    input.style.border = "1px solid silver";   
}

input.onmouseover = function() {
    console.log('onmouseover');
};

window.onresize = function() {
    console.log('Cambio larghezza o altezza');
};

window.onload = function() {
    console.log('Pagina aggiornata');
};

window.onscroll = function() {
    console.log('Scrill del mouse');
};

document.querySelector(".full-text").oninput = function() {
    console.log('Lorem Ipsum Lorem Ipsum Lorem Ipsum');
};

// --------------------------------------------------------


let block = document.querySelector("div.block");

function handlerOver() {
    block.innerHTML = "Nuovo Testo"
}

function handlerOut() {
    block.innerHTML = "Hello World!"
}

block.addEventListener("mouseover", handlerOver);
block.addEventListener("mouseout", handlerOut);

block.removeEventListener("mouseout", handlerOut);