function verificaNumero(chute){
    const numero = +chute

    if (numeroInvalido(numero)){
        elementoChute.innerHTML += '<div>Número inválido</div>'
        return
    }
    
    if (numeroPermitido(numero)){
        elementoChute.innerHTML += `
            <div>Número inválido, o número precisa estar entre ${menorNumero} e ${maiorNumero}</div>
        `
        return
    }

    if(numero === numeroSecreto){
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era <strong>${numeroSecreto}</strong></h3>
        <button id="reiniciar" class="btn-reiniciar">Jogar novamente</button>
    `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroPermitido(numero){
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'reiniciar'){
        window.location.reload()
    }
})