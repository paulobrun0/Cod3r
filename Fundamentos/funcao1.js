//Função sem retorno
function imprimirSomaa(a, b) {
    console.log(a + b)
}

imprimirSomaa(2, 3)

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2))