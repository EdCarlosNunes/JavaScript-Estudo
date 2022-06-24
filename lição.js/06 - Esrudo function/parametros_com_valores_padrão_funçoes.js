function greetPilot(name, mensagem){
    alert(mensagem + ", "+ name)
}
greetPilot("Ed", "Bom dia")

// deixamos como padrão caso não tenha nenhuma atribuição

function greetPilot(name = "Piloto", mensagem = "Olá"){ // deixando como padrão no nome e na mensagem
    alert(mensagem + ", "+ name)
}
greetPilot()// caso não tenh digitado nada 