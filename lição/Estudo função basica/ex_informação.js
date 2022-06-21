// Pedindo as informaçoes e confirmando
alert("Bem-vindo ! A Seguir pediremos que informe alguns dados.") //alerta na tela 
let name = prompt("Digite seu nome :") // criando uma variavel e pedindo no prompt para digitar lago para atribuir ao let name
let idade = prompt("Qual sua idade: ")  // mesma coisa atribuindo um numero para variavel let idade
let idadeConfirmacao = confirm("Sua idade é " + idade + " anos") // confirm é para confirmar na tela algo

alert("Nome: " + name + "\nIdade: " + idade +"\nIdade confirmada: " + idadeConfirmacao ) //um alert com os dados