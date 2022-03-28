'use strict'

const title = document.createElement('h1');
title.textContent='Event Listern Demo';
document.body.appendChild(title);

document.getElementById('myButton').addEventListener("click", function(){
  alert('button was clicked');
})