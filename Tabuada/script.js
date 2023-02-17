const number = document.getElementById('numero');
const list = document.getElementById('lista');

const validation = (n) => {
    if(n.length == 0 || Number(n) <0) {
        return true
    } else {
        return false
    }
}

function generate() {
    if(validation(number.value)) {
        alert('[Error] Porfavor Preencha O Campo Corretamente! ⚠️')
    } else {
        const num = Number(number.value);
        list.innerHTML = ''
        for(let i = 0; i <= 10 ; i++) {
            const option = document.createElement('option');
            option.value = 'tabuando'
            option.innerHTML += `🤓O resultado é ${num} x ${i} = ${num * i}`;
            list.appendChild(option);
        }
    }
    number.value = ''
    number.focus();
}

document.getElementById('multiplicar').addEventListener('click', generate);