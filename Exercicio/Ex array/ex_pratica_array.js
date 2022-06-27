const hitchedSpaceships = [["fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Drawin", 15, false]]

let with9Chars = hitchedSpaceships.filter(element => { return element[0].length >= 7}) 
console.log(with9Chars[0][0])

let primeiroTrue = hitchedSpaceships.findIndex((item) => item[2] == true)
console.log(primeiroTrue)

let upperSpaceship = hitchedSpaceships.map(function(CurrentSpacehip){
    let upcased = CurrentSpacehip[0].toLocaleUpperCase()
    return upcased
})
console.log(upperSpaceship)

alert("Nave com 9 chars: "+ with9Chars[0][0] +"\nposição da nave com engate pedente: "+ primeiroTrue +"\nNaves: "+ upperSpaceship)

