const hitchedSpaceships = [["fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Drawin", 15, false]]

let with9Chars = hitchedSpaceships.filter(element => {
     return element[1] > 9
    }).map(element => {
        return element[0]
    })
console.log(with9Chars)

let primeiroTrue = hitchedSpaceships.findIndex((item) => item[2] == false)
console.log(primeiroTrue)

let upperSpaceship = hitchedSpaceships.map(spaceshio =>{
    return spaceshio[0].toLocaleUpperCase()
    
})
console.log(upperSpaceship)

alert("Nave com +=9 tripulantes: "+ with9Chars[0][0] +"\nposição da nave com engate pedente: "+ (primeiroTrue +1) +"\nNaves: "+ upperSpaceship)

