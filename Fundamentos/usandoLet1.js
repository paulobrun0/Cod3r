var numero = 1
{
    let numero = 2 // esse está em um escopo diferente de var
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)