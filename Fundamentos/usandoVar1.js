{
    {
        {
            { var sera = 'Será' } // essa variável está no escopo global por isso da para acessar em qualquer lugar
            console.log(sera)
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)// so consegue acessar dentro deste escopo
}

teste()
// console.log(local) // não consegue acessar fora do escopo
