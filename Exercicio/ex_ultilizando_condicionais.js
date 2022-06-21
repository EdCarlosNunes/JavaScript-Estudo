let name = prompt("Qual seu nome piloto? ")
let velocity = 0
alert(name +" sua nave esta com a velocidade de:  " + velocity +" Km/h")
let newVelocity = prompt(name +" qual velocidade gostaria de ir?")
let confirme = confirm(name +" certeza que voce vai a " + newVelocity + " Km/h")

if(newVelocity < 0){
    alert(name +" sua nave esta parada, considere partir e aumentar a velocidade.")
}else if(newVelocity < 40){
    alert(name +" voce esta devagar, podemos aumentar mais.")
}else if(newVelocity < 80){
    alert(name +" parece uma boa velocidade vamos manter.")
}else if(newVelocity < 100){
    alert(name +" sua velocidade esta alta, considere diminuir.")
}else{
    alert(name +" Velocidade perigosa, controle automatico forçado") 
}
alert(name +" sua velocidade é " + newVelocity + " Km/h")

