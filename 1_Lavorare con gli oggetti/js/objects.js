// console.log(document.documentElement); 

// console.log(document.body.childNodes);

// for(var i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }

// let content = document.getElementById("content");

// let elements = content.getElementsByTagName("*")[2];
// console.log(elements);

// for(var i = 0; i < elements.length; i++)
//     console.log(elements[i]);

// let el = document.getElementsByName("fname")[0].tagName;
// console.log(el);

// let allClasses = document.getElementsByClassName("some")[1];
// console.log(allClasses);

// let elements = document.querySelectorAll("ul.test > li");
// console.log(elements);

// let el = document.querySelector("#content");
// console.log(el);

// let ulItems = document.querySelector("#span-text");

let ulItems = document.querySelectorAll(".span-text")[0];
let parentLi = ulItems.closest(".some-test");

// parentLi.innerHTML = "Nuovo verso";

let input = document.querySelector("input[type]");
if(input != null) {
input.value = "Lorem Ipsum";

input.setAttribute("data-toggle", "some value");
input.setAttribute("type", "text");

if(input.getAttribute("type"))
alert(input.getAttribute("class"));

input.className = "some new test";
alert(input.className);

// input.removeAttribute("class");
}

// document.write("HTML");

input.style.backgroundColor = "red";
input.style.color = "#fff";
input.style.border = "2 px solid silver";
input.style.borderRadius = "5px";
input.style.padding = "15px 10px";