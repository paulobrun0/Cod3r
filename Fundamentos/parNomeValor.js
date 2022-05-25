// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Paulo',
    idade: 23,
    peso: 73,
    endereco: {
        logradouro: 'Rua X',
        numero: 36
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)