//aqui a gente ve o if e else
//aqui vamos pedir o valor que a pessoa esta se for acima de 80 vamos aplicar uma multa
let velocidade = parseFloat(prompt("Qual a velocidade do carro no momento:"));
if (velocidade > 80){
    let multa = ((velocidade*7) - 560);
    alert("Voce passou de 80Km!!!!\nVoce foi multado e o valor é R$7,00 a cada Km acima do limite!\nSua multa é no valor de R$" + multa.toFixed(2));
}else if(velocidade > 70){
    alert("Voce esta acima de 70Km!!\n Esta apenas 10Km abaixo do limite\nCUIDADO.....")
}else if(velocidade > 60){
    alert("Voce esta acima de 760Km!!\n Esta apenas 20Km abaixo do limite\nCUIDADO.....")
}else if(velocidade > 50){
    alert("Voce esta acima de 50Km!!\n Esta apenas 30Km abaixo do limite\nCUIDADO.....")
}else if(velocidade > 40){
    alert("Voce esta acima de 40Km!!\n Esta apenas 40Km abaixo do limite\nCUIDADO.....")
}else if(velocidade > 30){
    alert("Voce esta acima de 30Km!!\n Esta apenas 50Km abaixo do limite\nCUIDADO.....")
}else if(velocidade > 20){
    alert("Voce esta acima de 20Km!!\n Voce esta 60Km abaixo do limite, pode causar acidaente\nCUIDADO.....")
}else if(velocidade > 10){
    alert("Voce esta acima de 10Km!!\n Voce esta 70Km abaixo do limite, Voce vai causar um acidaente\nCUIDADO.....")
}else{
    alert("Voce esta abaixo de 10Km Provavelmente esta pasado né kkkkkk")
}