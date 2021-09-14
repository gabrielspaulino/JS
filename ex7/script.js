var res = document.getElementById('resultado')
var numero = document.getElementById('inputnumero')
var select = document.getElementById('lista')
var vetor = []
var contador = 0

function adicionar() {
    res.innerHTML = ""
    var n = Number(numero.value)
    if (n > 0 && n <= 100 && !inLista(n, vetor)) {
        vetor.push(n)
        let texto = document.createElement('option')
        texto.text = 'Número ' + vetor[contador] + ' adicionado.'
        select.appendChild(texto)
        contador++
    }
    else {
        alert("Digite um número entre 1 e 100 que ainda não foi adicionado.")
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (vetor.length != 0) {
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0
        for(let pos in vetor) {
            if(vetor[pos] > maior)
                maior = vetor[pos]
            if(vetor[pos] < menor)
                menor = vetor[pos]
            soma += vetor[pos]
        }
        var media = soma / vetor.length
        res.innerHTML = "Ao total, temos " + vetor.length + " números cadastrados. <br> O maior valor informado foi " + maior + ". <br> O menor valor informado foi " + menor +
            ". <br> Somando todos os valores, temos " + soma + ". <br> A média dos valores digitados é " + media + "."
    }
    else {
        alert('Adicione pelo menos um valor.')
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    }
    else {
        return false
    }
}