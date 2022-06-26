console.log(speedUp(60, 10))//função padrãopode ser chamado antes
console.log(doubleSpeed(50))// ja função anonima não pode 

let doubleSpeed = function(velocity){ // função anonima ela vai no let 
    return velocity * 2
}


function speedUp(velocity, acceleration){ // finção padrão
    return velocity + acceleration
}