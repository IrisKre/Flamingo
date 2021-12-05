'use strict'
//See kood vahetab nupu vajutusel heledus-tumedus režiimi
//Allikas: https://docs.microsoft.com/en-us/learn/modules/build-simple-website/5-javascript-basics
const switcher = document.querySelector('.nupp');
switcher.addEventListener('click', function() { //Nupuvajutuse sündmus
    document.body.classList.toggle('dark-theme') //Vahetab režiimi

    var className = document.body.className; 
    if(className == "light-theme") { //Selles osas määrab ära kumba režiimi
        this.textContent = "Tume";
    }
    else {
        this.textContent = "Hele";
    }
    console.log('current class name: ' + className); //Annab logides teada, kumba režiimi vahetati
});