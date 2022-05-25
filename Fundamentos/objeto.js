const prod1 = {}
prod1.nome = 'Paulo'
prod1.idade = 23
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Arielly',
    idade: 29,
    obj: {
        preco: 4,
        item: 'pão'
    }
}

console.log(prod2)