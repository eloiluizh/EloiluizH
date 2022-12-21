let lista = document.querySelector('.lista')
let input = document.querySelector('.txtn')
let button = document.querySelector('.txtb')
let res = document.getElementById('res')
let valoreslista = []
function adicionar() {
    if (input.value == 0 || valoreslista.indexOf(input.value) != -1 || input.value.lenght == 0) {
        window.alert('[ERRO]Número inválido ou já definido')
    } else if (input.value > 100 || input.value < 0){
        window.alert('[ERRO] Números menores que 1 ou maiores que 100 não são suportados!')
    } else  {
        lista.options[lista.options.length] = new Option(`Valor ${input.value} adicionado.`)
        valoreslista.push(input.value)
    }
}
function finalizar() {
    if (valoreslista.length == 0) {
        window.alert('[ERRO] Por favor, adicione os números que queira calcular antes de finalizar!')
    } else {
        var soma = 0
        for (i=0;i < valoreslista.length;i++) {
            soma += Number(valoreslista[i])
        }
        let tot = valoreslista.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, valoreslista)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, valoreslista)}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/valoreslista.length}</p>`
    }
}