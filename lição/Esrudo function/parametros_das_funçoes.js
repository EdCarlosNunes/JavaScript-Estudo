function speedUp(velocity, acceleration){// aqui na função passamos dois parametros
    let newVelocity = velocity + acceleration // criando uma variavel e fazendo uma conta com o parametro
    console.log("Nova velocidade: "+ newVelocity) //imprimir o resultado
}
speedUp(60, 10) // aqui passamso os valores que na função declaramos
// e no final vai imprimir 70 pois velocity = 60 e acceleration = 10
// e no let newVelocity = 60 + 10 