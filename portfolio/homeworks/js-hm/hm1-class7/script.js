let firstDiv = document.getElementById("first");
let firstDivChild = firstDiv.firstElementChild;
firstDivChild.innerText = "Best web page!";
console.log(firstDivChild);
let allDiv = document.querySelectorAll("div");
console.log(allDiv);
console.log(allDiv[1].innerHTML);
let textDiv = document.querySelectorAll("text");
console.log(textDiv);
console.log(textDiv[0].innerText);
textDiv[0].innerHTML = "Yep! it is about traning!";
let paragraphs = document.getElementsByTagName('p');
paragraphs[0].innerHTML = "This is game, find me now";
paragraphs[1].innerHTML = "Copy paste is not working always";
console.log(paragraphs);
let lastDiv = document.getElementsByTagName('h1');
lastDiv[1].innerHTML = "I found you to be change it";
console.log(lastDiv);
let lastDivlast = document.getElementsByTagName('h3');
console.log(lastDivlast);
lastDivlast[0].innerHTML = "hahaha where you can hide from me!";
