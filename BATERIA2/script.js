'use strict';

const containerLetter = document.getElementById('container-letter');

const sounds = {
    'Q': './sounds/boom.wav',
    'W': './sounds/clap.wav',
    'E': './sounds/hihat.wav',
    'A': './sounds/kick.wav',
    'S': './sounds/openhat.wav',
    'D': './sounds/ride.wav',
    'Z': './sounds/snare.wav',
    'X': './sounds/tink.wav',
    'C': './sounds/tom.wav'
};

const createSpan = (texto) => {
    const span = document.createElement('span');
    span.classList.add('key');
    span.textContent = texto;
    span.id = texto;
    containerLetter.appendChild(span);
};

const screen = (sounds) => {
    Object.keys(sounds).forEach(createSpan);
};

screen(sounds);

const soundClick = (evento) => {
    let letter;
    if(evento.type == 'click') {
        letter = evento.target.id;
    } else {
        letter = evento.key.toUpperCase();
    };
    const verification = sounds.hasOwnProperty(letter);
    if(verification) {
        effect(letter);
        soundAudio(letter);
        removeEffect(letter);
    };
};

const soundAudio = (letter) => {
    const audio = new Audio(sounds[letter]);
    audio.play();
};

const effect = (letter) => {
    document.getElementById(letter).classList.add('active');
};

const removeEffect = (letter) => {
    const l = document.getElementById(letter);
    const remove = () => l.classList.remove('active');
    l.addEventListener('transitionend', remove);
}

containerLetter.addEventListener('click', soundClick);
window.addEventListener('keydown', soundClick);