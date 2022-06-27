let spaceship = {
    name: "fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship) // chamar todos
console.log(spaceship.type) // posso chamar apenas um
console.log(spaceship["type"])

spaceship.isHitched = false //adicionando uma variavel
spaceship["ShieldLevel"] = 100 // adicionando uma variavel
console.log(spaceship)

let spaceship = {} // pode ser criada vazia tambem
