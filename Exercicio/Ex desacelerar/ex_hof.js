function slowDown(velocity, printer) { // decalrando função para desacelerar, (velocidade, e print na tela)
    let deceleration = 20 // declarando de quanto em quanto desacelera

    while(velocity > 0){ // criando um laço de repetição até velocidade ser menor que 0
        printer(velocity)// print velocidade
        velocity -= deceleration // e diminua 20 da velocidade
    }
    alert("Nave parada, as comportas podem ser abertaas") // um alerta de que pode abrir pq ja esta em 0km
}

let spaceshipVelocity = 150 // velocidade de inicio da nave
 
slowDown(spaceshipVelocity, function(velocity){ // chamamos a primeira função passamos o parametro velocity e criamos uma função çara
    console.log("Velocidade atual: "+ velocity) // imprimir no console a velocidade até parar 
})
 