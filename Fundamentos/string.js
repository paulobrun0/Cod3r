const escola = 'Cod3r'

console.log(escola.charAt(4)) // retorna a letra que esta no index 4
console.log(escola.charAt(5)) // Não retorna nada
console.log(escola.charCodeAt(3)) // retorna o valor da tabela unicode
console.log(escola.indexOf('3')) // retorna a posição na string do valor passado
console.log(escola.substring(1)) // retorna o valor começando do index 1
console.log(escola.substring(0, 3)) // retorna a string começando do index 0 ao 3
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // retira o numero 3 e coloca o e no lugar
console.log('Ana, Maria, Paulo'.split(',')) // gera um array separando os itens por virgula