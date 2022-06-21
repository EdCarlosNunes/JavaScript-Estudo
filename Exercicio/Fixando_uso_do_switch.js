let anoLuz = prompt("Vamos viajar em anos Luzes\nQual a distancia voce quer em Anos Luzes?")
// acima ele pede o valor em ano luz
let opcoes = prompt("Vamos converter um algumas medidas, voce escolhe\n1- Parsec (pc)\n2- Unidade Astronomica (AU)\n3- Quilometros(Km)")
//acima vamos pedira conversão e atribuir outro valor a variavel opcoes que vai para o switch
switch(opcoes){ // pegamos a variavel opcoes que esta e string e verificamos qual o usuario digitou
    case "1": // opçao um se for vai fazer
        opselect = "Parsec(pc)" // armazenar esse resulta
        unidade = "pc" // essa medida
        newValue = anoLuz * 0.306601 //e fazer essa conversao
    break // e se for para no break se não continua até o default
    case "2":
        opselect = "Unidade Astronomica(AU)"
        unidade = "AU"
        newValue = anoLuz * 63241.1
    break
    case "3":
        opselect = "Quilometros(Km)"
        unidade = "Km"
        newValue = anoLuz * 9.5 * Math.pow(10, 12)
    break
    default: // caso não tenha cido nenhuma case acima termina aqui informando ao usuario que não foi indentificado
        console.log("Opção não indentificada")
}

alert("Voce escolhu " + anoLuz + " anos luz\n que convertido para "+ opselect +" fica "+ newValue + unidade)
//por fim mostre o valor que ele digitou e qual o valor convertido e qual medida foi escolhida