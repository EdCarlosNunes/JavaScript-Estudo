let velocity = 80

switch(velocity * 2){ // o Switch ele fez o velocity vezes 2 que é 160
  case 100: // ele pegao primeiro resultado, como não é ele vai para o proximo
    console.log("Sua velocidade é de 100Km/s")
    break // para se for 100
  case 160: // ele vai ver se é 160 se for ele vai 
    console.log("Sua velocidade é 160Km/s") // mostrar o alert
    break // e para no break. se não tem o Break ele continua
  default: // e o default so aparece se nenhum dos case for verdade
    console.log("velocidade não indentificada")
}

// Exemplo 2 com string

let spacaship = "Elemental"

switch(spacaship){ //aqui o switch vai pegar "Elemental e comparar com as case abaixo"
  case "Golias":// Se for igual mostrar console abaixo
    console.log("Nave mais resistente")
    break // e para aqui se for igual, se não continua
  case "Raptor":// Se for igual mostrar console abaixo
    console.log("NAve mais rapida")
    break// Se for igual mostrar console abaixo
  case "Enterpraise":// Se for igual mostrar console abaixo
    console.log("Nave da frota estelar")
    break// Se for igual mostrar console abaixo
  default:// se não for igual nenhum dos case acima inprime o default
    console.log("Nave comum")
}

// exemplo 3

let velocityy = 90

switch(velocityy){//aqui o switch vai pegar o valor 90 de velocityy e procurar nos case 
  case 80:// se não for ele continua para o proximo
      console.log("Velocidade minima")
  case 90:// é igual a velocityy 90 porem não tem o break ele vai continuar
    console.log("velocidade ta ficando aceitavel")
  case 100: 
    console.log("Velocidade aceitavel")
  case 110:
    console.log("Velocidade alta, mas aceitavel")
    break // ele vai parar aqui mesmo o valor sendo 110, pois o switch so para com o break
  default:
    console.log("Velocidade não indentificada")
}