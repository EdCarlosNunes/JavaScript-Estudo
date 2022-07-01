function speedUp(velocity, acceleration){// aqui na função passamos dois parametros
    let newVelocity = velocity + acceleration // criando uma variavel e fazendo uma conta com o parametro
    console.log("Nova velocidade: "+ newVelocity) //imprimir o resultado
}
speedUp(60, 10) // aqui passamso os valores que na função declaramos
// e no final vai imprimir 70 pois velocity = 60 e acceleration = 10
// e no let newVelocity = 60 + 10 

//exemplo2

function minhaFuncao(objeto){//função nomeDoParametro
    objeto.carro = "Toyota" //estamos falando que o objeto na posição .carro vai ser igual "Toyota"
}

let meucarro = {//aqui criei um objeeto
    carro: "Corsa",
    modelo: "Sedan",
    ano: 2010
}

let x, y // criando duas variaveis vazias

x = meucarro.carro // atribundo o objeto para a variavel que esta em Carro
console.log(meucarro)//chamando o objeto

minhaFuncao(meucarro)//chamando a função e passando o parametro objeto meu carro
y = meucarro.carro//atribundo o objeto para a variavel que esta em Carro

console.log(x)
console.log(y)
console.log(meucarro)