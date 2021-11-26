'use strict'

const switcher = document.querySelector('.nupp');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Tume";
    }
    else {
        this.textContent = "Hele";
    }

    console.log('current class name: ' + className);
});