const img = document.getElementById('img');

const lampada = {
    'desligada': './img/desligada.jpg',
    'ligada': './img/ligada.jpg',
    'quebrada': './img/quebrada.jpg'
}

function desligar() {
    if(validation()) {
        img.src = lampada['desligada'];
    }
}

function ligar() {
    if(validation()) {
        img.src = lampada['ligada'];
    }
}

function quebrar() {
    img.src = lampada['quebrada'];
}

const validation = () => {
    if(img.src.endsWith('quebrada.jpg')) {
        return false
    } else {
        return true
    }
}

function resetar() {
    location.reload();
}

function entrarLigar() {
    if(validation()) {
        img.src = lampada['ligada'];
    }
}

function sairDesligar() {
    if(validation()) {
        img.src = lampada['desligada'];
    }
}

document.getElementById('ligar').addEventListener('click', ligar);
document.getElementById('desligar').addEventListener('click', desligar);
document.getElementById('resetar').addEventListener('click', resetar);

img.addEventListener('dblclick', quebrar);
img.addEventListener('mouseover', entrarLigar);
img.addEventListener('mouseleave', sairDesligar);
