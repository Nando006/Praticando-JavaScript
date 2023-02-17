const inicio = document.querySelector('#ini');
const fim = document.querySelector('#fim');
const passos = document.getElementById('passo');

const res = document.querySelector('#res');

const validation = (i, f) => {
    if(i.length <= 0 || f.length <= 0) {
        return true
    } else {
        return false
    }
}

const onePassos = (p) => {
    if(p.length <= 0) {
        return true
    } else {
        return false
    }
} 

function contar() {
    if(validation(inicio.value, fim.value)) {
        alert('Preencha todos os campos vazios! ⚠️')
    } else {
        if(onePassos(passos.value)) {
            alert('Passos Inválidos, começando passo 1 ⚠️')
            passos.value = 1     
        } 

        const ini = Number(inicio.value);
        const end = Number(fim.value);
        const pass = Number(passos.value);

        res.innerHTML = ''
        res.innerHTML += 'Começando Contagem 😎 <br><br>'
        if(ini <= end) {           
            for(let i = ini; i <= end; i += pass ) {
                res.innerHTML += `${i} 👌 `
            }
        } else {
            for(let i = ini; i >= end; i -= pass) {
                res.innerHTML += `${i} 👌 `
            }
        }
        
        res.innerHTML += '<br><br>Contagem Encerrada 🤓';
    }

    inicio.value = '';
    fim.value = '';
    passos.value = '';
    inicio.focus();
}

function reset() {
    location.reload();
}

document.querySelector('#contar').addEventListener('click', contar);
document.querySelector('#reset').addEventListener('click', reset);