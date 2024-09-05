let n1,n2
n1 = parseInt(prompt("Digite o primeiro número"))
n2 = parseInt(prompt("Digite o segundo número"))

let soma = n1+n2
let sub = n1-n2
let mult = n1*n2
let div = n1/n2

if (n1 == 0){
alert(`Soma = ${soma} \nSubtração = ${sub} \nMultiplicação = ${mult} \nDivisão = Impossível dividir por zero!`)

}else if (n2 == 0){
    alert(`Soma = ${soma} \nSubtração = ${sub} \nMultiplicação = ${mult} \nDivisão = Impossível dividir por zero!`)
    

}else {
    alert(`Soma = ${soma} \nSubtração = ${sub} \nMultiplicação = ${mult} \nDivisão = ${div}`)

}
