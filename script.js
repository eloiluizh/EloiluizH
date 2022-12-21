let lista = document.querySelector('.lista')
let input = document.querySelector('.txtn')
let button = document.querySelector('.txtb')
let t1 = document.querySelector('.txt1')
let t2 = document.querySelector('.txt2')
let t3 = document.querySelector('.txt3')
let t4 = document.querySelector('.txt4')
let t5 = document.querySelector('.txt5')
let valoreslista = []
function adicionar() {
    t1.innerHTML = ''
    t2.innerHTML = ''
    t3.innerHTML = ''
    t4.innerHTML = ''
    t5.innerHTML = ''
    if (input.value == 0 || input.value == valoreslista[valoreslista.length - 1] || input.value.lenght == 0) {
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
        t1.innerHTML = 'Ao todo temos ' + valoreslista.length + ' números cadastrados.'
        t2.innerHTML = 'O maior valor informado foi ' + Math.max.apply(null, valoreslista) + '.'
        t3.innerHTML = 'O menor valor informado foi ' + Math.min.apply(null, valoreslista) + '.'
        t4.innerHTML = `Somando todos os valores temos ${soma}.`
        t5.innerHTML = `A média dos valores digitados é ${soma/valoreslista.length}`
    }
}