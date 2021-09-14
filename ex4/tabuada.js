function calcular(){
    var numero = document.getElementById("inputnumero").value
    var res = document.getElementById("resultado")
    var mult = [ , , , , , , , , , ]
    var contador = 0
    res.innerHTML = ""
    while (contador <= 10){
        mult[contador] = numero * contador
        res.innerHTML += numero + " x " + contador + " = " + mult[contador] + "<br>"
        contador++
    }
}