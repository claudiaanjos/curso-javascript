var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'blue'
}

function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'red'
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}