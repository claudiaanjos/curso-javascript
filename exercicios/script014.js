function carregar(){
    var msg = document.getElementById('msg')
    var figura = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    var hora = 10
    if (hora >= 0 && hora < 12){
        figura.src = 'img/dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        figura.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        figura.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}
