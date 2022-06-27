let listaSpaceship = ["Colossus", "Elemental", "Helmet"]

console.log(listaSpaceship)
listaSpaceship.push("Supernova") // adiciona um novo elemento a Array
console.log(listaSpaceship)

listaSpaceship.pop() // remove o ultimo elemento do array independente qual for 
console.log(listaSpaceship)

let removidopop = listaSpaceship.pop()// tem como retorna o que esta removendo
console.log(removidopop)
console.log(listaSpaceship)

let removidopop2 = listaSpaceship.shift()// remove o primeiro elemento do array independente qual for
console.log(removidopop2)// e tambem da para retornar
console.log(listaSpaceship)

listaSpaceship.unshift("Colossus")// vai adicionar um elemento no inicio do Array
console.log(listaSpaceship)

console.log(listaSpaceship.length) //vai retorna o tamanho do array

let elementalPos = listaSpaceship.indexOf("Elemental")// vai mostrar a posição do elemento "Elemental", caso não tenha o elemento ele retorna -1
console.log(elementalPos)