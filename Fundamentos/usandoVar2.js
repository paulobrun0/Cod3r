// so existe escopo de var em função

var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero) // sobrecreveu o valor para 02
}
console.log('fora = ', numero) // sobrescreveu o valor para 02