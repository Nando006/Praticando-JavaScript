'use strict';

const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

let intervalId;
let counter = 0

function semaphore(evento) {
    const ids = evento.target.id;
    const verificationColors = colors.hasOwnProperty(ids);
    if(verificationColors) {
        clear();
        colors[ids]();
    }
}

const colors = {
    'off': () => img.src = './img/desligado.png',
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'auto': () => intervalId = setInterval(shifts, 1000)
}

function shifts() {
    const colorsId = ['red', 'yellow', 'green'];
    const index = colorsId[counter];
    counter < 2? counter++ : counter = 0
    colors[index](); 
}

function clear() {
    clearInterval(intervalId);
}

buttons.addEventListener('click', semaphore);