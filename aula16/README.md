# Curso de *JavaScript e ECMAScript* - professor Gustavo Guanabara 

## Aula 16 - Funções
<br>
<p>Nessa aula aprendemos sobre as funções.</p>
<br>
<p>Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.</p>
<p>Uma função pode receber parâmetros e retornar um resultado.</p>
<br>
<p>Estrutura:</p>
<pre><code>function parimp(n){
    if(n%2==0){
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp(11)
</code></pre>
<p>Recursividade:</p>
<pre><code>function fatorial (n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))
</code></pre>
<br>
<p>No exercício 21 realizamos exemplos com funções.</p>