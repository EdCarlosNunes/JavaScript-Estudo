let velocity = 50 //atribuindo 50 a variavel velocity
let acceleration = 5 // e atribuindo 5 para variavel acceleration

do{ // do ele repete até verificar a condição while mais abaixo
    console.log("Acelerando: Estamos a " + velocity + " Km/s") // vai imprimir o valor de velocity
    velocity += acceleration//bloco de codigo para adicionar mais 5 de acceleration
}while(velocity <= 100) //verifica de velocity é menor ou igual <= a 100

// exemplo 2

let velocity2 = 110 //atribuindo 110 a variavel velocity
let acceleration2 = 5 // e atribuindo 5 para variavel acceleration

do{ // do ele repete até verificar a condição while mais abaixo
    console.log("Acelerando: Estamos a " + velocity + " Km/s") // vai imprimir o valor de velocity
    velocity2 += acceleration2//bloco de codigo para adicionar mais 5 de acceleration
}while(velocity2 <= 100) //verifica de velocity é menor ou igual <= a 100
// no caso do codigo acima por seu do ele vai imprimir a condição de velocity 110
//mesmo o while falando para não imprimir, mas ele imprime pois while é so verificdo
//no final do loop, ai ele imprime 110 e para pois fala para parar no 100