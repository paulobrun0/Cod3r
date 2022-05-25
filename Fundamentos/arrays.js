const valores = [7, 4, 56, 3,]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push('paulo') // adiciona no fim do array
console.log(valores)

valores.pop() // retira o ultimo elemento 
delete valores[0] // retira o elemento no index informado
console.log(valores)

console.log(typeof valores)
