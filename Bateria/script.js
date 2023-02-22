'use strict';

const container = document.querySelector('#container');

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

const createSpan = (text) => {
    const span = document.createElement('span');
    span.classList.add('key');
    span.textContent = text;
    span.id = text;
    container.appendChild(span);
};

const showScreen = (sounds) => Object.keys(sounds).forEach(createSpan);

showScreen(sounds);

const soundScreen = (evento) => {
    let letter;
    if(evento.type == 'click') {
        letter = evento.target.id;
    } else {
        letter = evento.key.toUpperCase();
    };
    const verification = sounds.hasOwnProperty(letter);
    if(verification) { 
        effect(letter);   
        letterSounds(letter);
        removeEffect(letter);
    };
};

const letterSounds = (letter) => {
    const audio = new Audio(`${sounds[letter]}`);
    audio.play();
};

const effect = (letter) => {
    document.getElementById(letter).classList.add('active');
}

const removeEffect = (letter) => {
    const letterRemove = document.getElementById(letter)
    const remove = () => letterRemove.classList.remove('active');
    letterRemove.addEventListener('transitionend', remove);
}

container.addEventListener('click', soundScreen);
window.addEventListener('keydown', soundScreen);