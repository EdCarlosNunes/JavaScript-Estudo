//significa "fatiar" ou "Dividir"
//extrai uma parte do array sem alterar o array original
//sintaxe
// Array.slice([begin[, end]])

let spaceship = ["Elemental", "Darwin", "Artemis", "Supernova"]


let extrairvespaceship = spaceship.slice(1, 3) //vai consultar da posição 1 a posição 2

console.log(spaceship) // e não vai alterar o array
console.log(extrairvespaceship)

