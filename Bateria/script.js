'use strict';

const container = document.getElementById('container');

const sounds = {
    'A': './sounds/boom.wav',
    'S': './sounds/clap.wav',
    'D': './sounds/hihat.wav',
    'W': './sounds/kick.wav',
    'X': './sounds/openhat.wav',
    'E': './sounds/ride.wav',
    'Q': './sounds/snare.wav',
    'C': './sounds/tink.wav',
    'Z': './sounds/tom.wav'
};

const createDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    container.appendChild(div);
}

const display = (sounds) => Object.keys(sounds).forEach(createDiv);

display(sounds);

const effect = (letter) => {
    document.getElementById(letter).classList.add('active');
}

const removeEffect = (letter) => {
    const eff = document.getElementById(letter);
    const removeEff = () => eff.classList.remove('active');
    eff.addEventListener('transitionend', removeEff);
}

const whenClicking = (evento) => {
    let letter;
    if(evento.type === 'click') {
         letter = evento.target.id
    } else {
        letter = evento.key.toUpperCase()        
    }
    
    let verification = sounds.hasOwnProperty(letter);
    if(verification) {
        effect(letter);
        catching(letter);
        removeEffect(letter);
    }  
}

const catching = (letter) => {
    const audio = new Audio(`${sounds[letter]}`);
    audio.play()
}

container.addEventListener('click', whenClicking);
window.addEventListener('keydown', whenClicking);