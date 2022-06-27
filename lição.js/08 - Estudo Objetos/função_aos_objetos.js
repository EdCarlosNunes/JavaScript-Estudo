let spaceship = {
    name: "Deméter",
    type: "Extração",
    turnOn: function(){
        console.log("preparando propulsão")
        console.log("Ligando computador de bordo")
    }
}

spaceship.velocity = 0
spaceship.speedUp = function(spaceshipSpeed, acceleration){
    spaceshipSpeed.velocity  += acceleration
}

console.log(spaceship)
spaceship.speedUp(spaceship, 10)
console.log(spaceship)