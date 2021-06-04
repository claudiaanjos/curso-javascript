var p1 = document.getElementsByTagName('p')[0] // Seleciono o primeiro paragráfo
window.document.write('O primeiro p: ' + p1.innerText) // Apresenta o 1ª paragráfo sem a formatação (sem as filhas)
p1.style.color = 'black' // Altero a cor do paragráfo

var p2 = document.getElementsByTagName('p')[1]
document.write(' O segundo p com a formatação HTML ' + p2.innerHTML)

var corpo = window.document.body
corpo.style.background = 'rgb(100, 100, 218)'

var d = window.document.getElementById('msg')
d.style.background = 'blue'
d.innerText = 'Utilizamos o innerText...'
/*outra opção
window.document.getElementById('msg').innerText = 'Estou aguardando... '
*/
var d2 = document.querySelector('div#texto') // Utilizamos a sintaxe do CSS
d2.style.background = 'black'

