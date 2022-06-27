function doubleVelocity(velocity, printer){
    console.log("Entrei em doublevelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity =>{
    console.log("Nova velocidade: " + velocity + "Km/s")
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)