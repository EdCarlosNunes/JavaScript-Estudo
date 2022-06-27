let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Qual o nome da nave?")
    spaceship.type = prompt("Qual o tipo da nave?")
    spaceship.maxVelocity = Number(prompt("Inofrme a velocidade maxima da nave? (Km/s"))
}

function acelerate(){
    let accelerantion = Number(prompt("Quanto voce quer acelerar? (km/s"))
    spaceship.speedUp(accelerantion)
    if( spaceship.velocity > spaceship.maxVelocity){
        alert("Velocidade maxima ultrapassada!" + 
              "\nVelocidade da Nave: " + spaceship.velocity + "Km/s\n" +
              "Velocidade maxima da Nave:" + spaceship.maxVelocity + "Km/s" )
    }
}

function stop(){
    alert("Name :" + spaceship.nama + "\nTipo: " + spaceship.type + "\nVelocidade da Nave: "
          + spaceship.velocity + "\nMaxima da Nave: " + spaceship.maxVelocity)
          spaceship.velocity = 0
}

function showMenu(){
    let chosenOption
    do{
        chosenOption = prompt("Voce deseja\n 1- Acelerar\n 2 - Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção invalida")
        }
    }while(chosenOption != "2")
}

registerSpaceship()
showMenu()