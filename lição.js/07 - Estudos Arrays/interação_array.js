let listaSpaceship = ["Demeter", "Darwin", "Supornova", "fenix", "Puller"]

listaSpaceship.forEach(function(CurrentSpacehip, index){ // vai retorna o nome e o index do array
    console.log("Nave: " + CurrentSpacehip + "\nindice: "+ index)
})

let upperSpaceship = listaSpaceship.map(function(CurrentSpacehip){ // deixar todas os elementos do array maiusculo sem modificar o array
    let upcased = CurrentSpacehip.toLocaleUpperCase()
    return upcased
})

console.log(upperSpaceship)

let with7Chars = listaSpaceship.filter(element => { return element.length >= 7}) // vai filtrar apenas os que tiverem 7 letras
console.log(with7Chars)

let with7Chars2 = listaSpaceship.find(element => { return element.length >= 7}) // vai retornar apenas o primeiro que tiver 7 letras
console.log(with7Chars2)

