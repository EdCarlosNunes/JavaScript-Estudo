let spaceship = { // objeto
    nama: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Julia", "thiago"] // aninhando array no objeto
}
spaceship.crew.push("ten. Fernanda")// adicionando mais um para o array dentro do objeto
console.log(spaceship)

let listaSpaceship = [ // array
    {name: "Elemental", crew: 10}, // aqui é um objeto aninhado no array
    {name: "Colossus", crew: 8},
    {name: "Helmet", crew: 15}
]
console.log(listaSpaceship)
console.log(listaSpaceship[0].name)

listaSpaceship.forEach(listaSpaceship => {
    console.log(listaSpaceship.name + " tem "+ listaSpaceship.crew + " Tripulantes")
});

let naveship = { // objeto
    name: "Golias",
    crew: 20,
    capitain: { //objeto dentro de objeto
        name: "Andre",
        age: 4
    }
}
console.log(naveship.capitain.name)
