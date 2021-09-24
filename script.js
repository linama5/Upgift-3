// check if JS file is loaded
console.log("script.js is loaded");

//Selector 
const changeColorButton = document.querySelector(".changeButton");
const header = document.querySelector(".helloWorld");


//Event listeners 
changeColorButton.addEventListener("click",changeFunction);

//Functions

function changeFunction(){


header.classList.toggle("NewTag");
header.innerHTML= "Goodbye World";

}