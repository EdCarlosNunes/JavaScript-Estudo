let nameNave = prompt("Digite o nome da nave?")// pedir o nome da nave
let spaceshipVelocity = 0 //amarzena 0 para variavel velocidade
let opcaoUser // a opçoes do menu no momento não precisa atribuir nada

function showMenu(){ // não precisa mostrar nenhum parametro para função
    let option // criando uma variavel chamada opcao
    while (option != "1" && option != "2" && option != "3" && option != "4") {//laço para ver se é diferente !=
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar masi 5 Km/s\n" +
                        "2- Desacelerar 5 Km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair do programa\n")// enquanto for diferente continua aparecendo o menu
    }
    return option // retornar a opção que o usuario escolheu
}

function speedUp(velocity){//criando a função que recebe velocity
    let newvelocity = velocity + 5
    return newvelocity //sempre pegar e retorna a velocidade com mais 5
}

function speedDown(velocity){//criando uma função que recebe velocity
    let newVelocity = velocity - 5
    if(newVelocity < 0){//como a velocidade não pode ficar negativo, verifica se newvelocity esta abaixo de 0
        newVelocity = 0 // e atribua 0 que vai ser o minimo
    }
    return newVelocity // e vai retornar com menos 5 na nova velocidade
}

function printBordo(name, velocity){//atribui name e velocity
    alert("Espaçonave: "+ name +"\nVelocidade: "+ velocity +"Km/s")
}

do{
    opcaoUser = showMenu()//garantindo que o menu apareça pelo menos uma ves
    switch(opcaoUser){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = speedDown(spaceshipVelocity)
            break
        case "3":
            printBordo(nameNave, spaceshipVelocity)
            break
        default:
            alert("encerrando programa de bordo")
    }
}while(opcaoUser != 4)// e pedir para encerrar na opção 4
//que é quando o do vai parar
