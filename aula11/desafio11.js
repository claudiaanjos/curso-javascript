function verificar(){
    var pais = document.querySelector('input#pais').value.toUpperCase()
    var res = document.querySelector('div#res')
    res.innerHTML = `Você nasceu no ${pais}.</p>`

    if (pais == 'BRASIL'){
        res.innerHTML += `<p>Então você é brasileiro.</p>`
    }else{
        res.innerHTML += `<p>Então você é estrangeiro.</p>`
    }
}