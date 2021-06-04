function calcular(){
    var texto = document.getElementById('velocidade')
    var vel = Number(texto.value)
    var res = document.getElementById('resposta')
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}Km/h.</strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está acima da velocidade permitida.</p> <p>Será MULTADO!</p>`
    }else{
        res.innerHTML += `<p>Dirija com cuidado!</p>`
    }
}