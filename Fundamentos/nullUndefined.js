let valor // não inicada
console.log(valor)

valor = null // não tem nenhum valor dentro dela e não aponta para nenhum lugar na memória 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 4.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)