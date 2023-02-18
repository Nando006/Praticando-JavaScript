const number = document.querySelector('#numero');
const list = document.querySelector('#lista');

let valores = [];

const res = document.querySelector('#res');

const validation = (n) => {
    if(n.length == 0 || Number(n) < 1 || Number(n) > 100) {
        return true
    } else {
        return false
    }
}

const validationValores = (v, n) => {
    if(v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(validation(number.value)) {
        alert('[x] Número Invalido Ou Vazio ⚠️');
    } else {
        if(validationValores(valores, number.value)) {
            alert('[X] Número já adicionado! ⚠️');
        } else {

            const num = Number(number.value);
            valores.push(num);

            const option = document.createElement('option');
            option.value = 'valores'
            option.innerHTML += `💡 O número ${num} foi adicionado na posição ${valores.indexOf(num)}`;
            list.appendChild(option);
        }
    }

    number.value = '';
    number.focus();
}

const listaNumeros = (v) => {
    if(v.length == 0) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if(listaNumeros(valores)) {
        alert('[X] Lista Vazia, Adicione Pelomenos Um Número! ⚠️');
        number.value = '';
        number.focus();
    } else {
        const num = Number(number.value);

        let total = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce(function(acumulador, valor){
            return acumulador + valor;
        }, 0)
        let media = total % soma;

        res.innerHTML = ''
        res.innerHTML = '💟 Resultados Abaixo <br><br><br>'
        res.innerHTML += `O total de números adicionado é ${total}. <br><br>`
        res.innerHTML += `O maior valor adicionado é ${maior}. <br><br>`
        res.innerHTML += `O menor valor adicionado é ${menor}. <br><br>`
        res.innerHTML += `A soma de todos os números adicionados é ${soma}. <br><br>`
        res.innerHTML += `A média de todos os números adicionados é ${media}.`
    }
}

function reset() {
    location.reload();
}

document.querySelector('#adicionar').addEventListener('click', adicionar);
document.querySelector('#finalizar').addEventListener('click', finalizar);
document.querySelector('#reset').addEventListener('click', reset);