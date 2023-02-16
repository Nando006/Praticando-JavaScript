'user strict'

const container = document.querySelector('#container');

const createDiv = (texto) => {
    const span = document.createElement('span');
    span.classList.add('key');
    span.textContent = texto;
    span.id = texto;
    container.appendChild(span);
}

const sounds = {
    'A': './sounds/boom.wav',
    'W': './sounds/clap.wav',
    'D': './sounds/hihat.wav',
    'S': './sounds/kick.wav',
    'E': './sounds/openhat.wav',
    'Q': './sounds/ride.wav',
    'C': './sounds/snare.wav',
    'X': './sounds/tink.wav',
    'Z': './sounds/tom.wav'
}

Object.keys(sounds).forEach(createDiv);

const effect = (letter) => {
    document.getElementById(letter).classList.add('active');
}

const effectEnd = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const displaySound = (evento) => {
    const letter = evento.target.id;
    const validation = sounds.hasOwnProperty(letter);
    if(validation) {
        const audio = new Audio(`${sounds[letter]}`);
        effect(letter);
        audio.play();
        effectEnd(letter);
    }
}

const displaySoundTwo = (evento) => {
    const letter = evento.key.toUpperCase();
    const validation = sounds.hasOwnProperty(letter);
    if(validation) {
        const audio = new Audio(`${sounds[letter]}`);
        effect(letter);
        audio.play();
        effectEnd(letter);
    }
}



container.addEventListener('click', displaySound);
window.addEventListener('keydown', displaySoundTwo);