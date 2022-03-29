'use strict'

const title = document.createElement('h1');
const demo = document.getElementById('Demo');
title.textContent='Event Listern Demo';
demo.appendChild(title);

function buttonClick(){
 let buttonText = document.createElement('h1');
 let textArea = document.getElementById('buttonInfo');
 buttonText.textContent = "Button Was Clicked";
 textArea.appendChild(buttonText);

}

document.getElementById('myButton').addEventListener("click", buttonClick);

// document.getElementById('myButton').addEventListener("click", function(){
//   alert('button was clicked');
// })