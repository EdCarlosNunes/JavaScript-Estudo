let name_spaceship = prompt("Qual o nome da sua nave?")
let spaceshipvelocidade = 0
let chosenOption

function showMenu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer\n" +
                        "1- Acelerar a nave em 5Km/s\n" +
                        "2- Desacelerar a nave em 5Km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair do programa")
    }

    return option
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity - 5
    if(newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printspaceship(name, velocity){
    alert('Espaçonave: '+ name +"\n Velocidade: "+ velocity +"Km/s")
}

do{
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            spaceshipvelocidade = speedUp(spaceshipvelocidade)
            break;
        case "2":
            spaceshipvelocidade = slowDown(spaceshipvelocidade)
            break;
        case "3":
            printspaceship(name_spaceship, spaceshipvelocidade)
            break;
        default:
            alert("Encerrando programa de bordo");
            break;
    }
}while(chosenOption != "4"){

}

