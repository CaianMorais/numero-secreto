const menorNumero = 1
const maiorNumero = 1000
const numeroSecreto = numeroAleatorio()

function numeroAleatorio(){
    return parseInt(Math.random() * maiorNumero + 1)

}
/*console.log('Numero secreto:', numeroSecreto)*/

const elementoMenorNumero = document.getElementById('menor-numero')
elementoMenorNumero.innerHTML = menorNumero

const elementoMaiorNumero = document.getElementById('maior-numero')
elementoMaiorNumero.innerHTML = maiorNumero