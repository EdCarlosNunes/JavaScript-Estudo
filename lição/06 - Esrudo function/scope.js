let spaceshipName = "Supernova" //a variavel let tem um scope global pode cer acessado de 
//qualquer lugar do codigo
function changerSpaceshipName (){
    spaceshipName = "Elemental" // pois aqui ela é chamada e alterada
}

console.log(spaceshipName)// aqui imprime = "Supernova"
changerSpaceshipName()// chamando a função
console.log(spaceshipName)// aqui imprime = "Elemental" pois na função ela é alterada


//exemplo 2


function starSpaceship(){
    let spaceshipVelocity = 0  // o let na função fica com um scope local e não pode 
}//ser acessado de fora

let spaceshipVelocity = 20 // esse lete mesmo tendo o mesmo nome é diferente do de cima

starSpaceship()
console.log(spaceshipVelocity)// aqui mesmo acima chmando a função starSpaceship()
// vai retornar spaceshipVelocity = 20 pq so ele pode cer acessado


//exemplo 3 


function setSpaceshipDatails(){
    let velocity = 50 // declaração de velocity como 50 esta no scope local
    if(velocity == 50){ // ai ele consegue entrar no if velocity pois esta no scope local
        velocity = 60// recebe valor de 60
        var spaceshipName = "Elemental"//o var ele é amarzenado no maior escopo da função setSpaceshipDatails()
        let spaceshipType = "Discovery"// ja o let ele é amarzenado no scope do if 
    }
    console.log(velocity)
    console.log(spaceshipName)//por ser var  é amarzenado no maior escopo da função ele é impreço
    console.log(spaceshipType)
}
setSpaceshipDatails()
