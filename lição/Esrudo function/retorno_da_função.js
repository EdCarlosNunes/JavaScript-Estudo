function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: "+ newVelocity)
    return newVelocity // returno vai armazena a conta que ja foi feita para o usuario
}

let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)

console.log(velocity)