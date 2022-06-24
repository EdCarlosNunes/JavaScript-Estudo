let dataDePartida = prompt("Digite a data de partida (formato DD/MM/YYYY")//peco para digitar a data
let dataPartida = moment(dataDePartida, "DD/MM/YYYY")//converto no moment a data string para data
let hoje = moment() // assim moment() ele pega o dia de hoje
let dataDeHoje = hoje - dataPartida //calcula a data de partida com a de hoje
let opcao = prompt("Como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")
//acima da uma opção de como que o usuario quer que apareça com 4 opçoes
if(opcao == "1"){
    let segundos = Math.round(dataDeHoje / 1000) // pegando e dividindo por segundo igual a 1000
    alert("Tempo de vôo " + segundos + " segundos")
}else if(opcao == "2"){
    let minutos = Math.round(dataDeHoje / 1000 / 60)// dividindo por minutos
    alert("Tempo de vôo " + minutos + " minutos")
}else if(opcao == "3"){
    let horas = Math.round(dataDeHoje / 1000 / 3600 )//dividindo por horas
    alert("Tempo de vôo " + horas + " horas")
}else if(opcao == "4"){
    let dia = Math.round(dataDeHoje / 1000 / 3600 / 24 )//dividndo pro dia
    alert("Tempo de vôo " + dia + " dias")
}else{
    alert("opção invalida")// caso a pessoa digite errado else de alerta
}
