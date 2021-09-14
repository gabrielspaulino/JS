function contar() {
    var a = document.getElementById('inputinicio')
    var b = document.getElementById('inputfim')
    var c = document.getElementById('inputpasso')
    var contador = 0
    var contagem = document.getElementById('contagem')
    contagem.innerHTML = ""
    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        contagem.innerHTML = "Preencha todos os campos."
    }
    else {
        a = Number(a.value)
        b = Number(b.value)
        c = Number(c.value)
        if (a == b) {
            contagem.innerHTML = "Digite números diferentes para início e fim."
        }
        else {
            if (b > a) {
                for (var contador = a; contador <= b; contador += c) {
                    contagem.innerHTML += contador + " \u{1F449} " //funciona'
                }
            }
            else {
                for (var contador = a; contador >= b; contador -= c) {
                    contagem.innerHTML += contador + " \u{1F449} " //funciona'
                }
            }
            contagem.innerHTML += " \u{1F3C1}"
        }
    }
}
