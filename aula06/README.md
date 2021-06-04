# Curso de *JavaScript e ECMAScript* - professor Gustavo Guanabara 

## Aula 06 - Manipulação de dados
<br>
<p>Nessa aula aprendemos a manipular dados.</p>
<br>
<p>Exercício 02: Exibimos na tela (pop-up) o valor da variável que o usuário digitou.</p>
<br>
<p>Exercício 03: Esse código irá apenas concatenar os números, pois o comando prompt devolve uma string.</p>
<pre><code>var n1 = window.prompt("Digite um número: ")
var n2 = window.prompt("Digite outro número: ")
s = n1 + n2
alert(`A concatenação será ${s}.`)
</code></pre>
<p>Para somar é necessário realizar a transformação dos números. Podemos utilizar:</p>
<pre><code>Number.parseInt(n)
Number.parseFloat(n)
Number(n)
</code></pre>
<p>Para transformar números em strings utilizamos:</p>
<pre><code>String(n)
n.toString()
</code></pre>
<br>
<p>Exercício 04: Realizamos a formatação de Strings e Números.</p>
<pre><code>n.toFixed(2)  //Fixa em duas casas decimais
n.toFixed(2).replace('.',',') // e subistitui o ponto por vírgula
n.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}) // mostra o número com o R$
</code></pre>

