const img = document.querySelector('#img');
const button = document.querySelector('#butao');

const imagens = {
    'desligada': './img/desligada.jpg',
    'ligada': './img/ligada.jpg',
    'quebrada': './img/quebrada.jpg'
}

function butao() {
    if(button.value == 'Ligar') {
        if(validation()) {
            button.value = 'Desligar';
            img.src = imagens['ligada'];
        }
    } else if(button.value == 'Desligar') {
        if(validation()) {
            button.value = 'Ligar';
            img.src = imagens['desligada'];
        }
    } 
}

function doubleClick() {
    img.src = imagens['quebrada'];
}

const validation = () => {
    return !img.src.endsWith('quebrada.jpg');
}

button.addEventListener('click', butao);
img.addEventListener('dblclick', doubleClick);
img.addEventListener('mouseover', butao);
img.addEventListener('mouseleave', butao);