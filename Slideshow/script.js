'use strict';

const imgCont = document.querySelector('#img-cont');

const images = [
    {'url': './img/chrono.jpg'},
    {'url': './img/inuyasha.jpg'},
    {'url': './img/ippo.png'},
    {'url': './img/tenchi.jpg'},
    {'url': './img/tenjhotenge.jpg'},
    {'url': './img/yuyuhakusho.jpg'}
];

const allocateImage = (images) => {
    images.forEach(eachImage => {
        imgCont.innerHTML += `
            <div id='image-item'>
                <img src='${eachImage.url}'>
            </div>

        `
    })
}

allocateImage(images);

const previous = () => {
    let imageItem = document.querySelectorAll('#image-item');
    imgCont.appendChild(imageItem[0]);
}

const next = () => {
    let imageItem = document.querySelectorAll('#image-item');
    let pos = images.length - 1;
    let oneImage = imageItem[0];
    imgCont.insertBefore(imageItem[pos], oneImage);
}

let start;

const auto = () => {
    clearInterval(start);
    start = setInterval(previous, 1500);
}

const off = () => {
    clearInterval(start);
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.querySelector('#auto').addEventListener('click', auto);
document.querySelector('#off').addEventListener('click', off);