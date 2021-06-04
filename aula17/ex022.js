let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: '85.1', 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}

console.log(amigo)
amigo.engordar(2)
console.log(amigo.nome)
console.log(amigo.peso)