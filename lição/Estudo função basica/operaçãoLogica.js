let spaceship = "Elemental"
let velocity = 20

// exemplo de && (E) tabela vdd
console.log(spaceship.length == 9 && velocity > 15) // primeiro ele conta com .length e ve se é igual == a 9
// ai vem o && que é o (E) Velocity é maior > que 15, como os dois é verdade retorna true // V e V = V

console.log(velocity > 10 && velocity < 19) //primeiro ve se velocity é maior > que 10
//ai vem o && que é o (E) velocity é menor < que 19, como o primeiro pe vdd e segundo falso // V e F = F

console.log(velocity < 17 && spaceship == "Elemental")// primeiro ve se velocity pe menor < que 17 falso
//ai vem o && que é o (E) spaceship é igual == a "Elemental" é vdd // F e V = F

console.log(spaceship == "Golias" && velocity > 21)// primeiro ve se spaceship igual == a "Golias" que é falso
//ai vem o && que é o (E) velocity é maior > que 21 falso // F e F = F

// exemplo de || (OU) tabela vdd

console.log(spaceship.length == 9 || velocity > 15) // primeiro ele conta com .length e ve se é igual == a 9
// ai vem o || que é o (OU) Velocity é maior > que 15, como os dois é verdade retorna true // V e V = V

console.log(velocity > 10 || velocity < 19) //primeiro ve se velocity é maior > que 10
//ai vem o || que é o (OU) velocity é menor < que 19, como o primeiro pe vdd e segundo falso // V e F = V

console.log(velocity < 17 || spaceship == "Elemental")// primeiro ve se velocity pe menor < que 17 falso
//ai vem o || que é o (OU) spaceship é igual == a "Elemental" é vdd // F e V = V

console.log(spaceship == "Golias" || velocity > 21)// primeiro ve se spaceship igual == a "Golias" que é falso
//ai vem o || que é o (OU) velocity é maior > que 21 falso // F e F = F

// exemplo de ! (Não) tabela vdd

console.log(!(velocity > 19)) // Não V = F
console.log(!(spaceship == "Golias")) // Não F = V

//Exemplo
console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity -3 == 17 && spaceship.length + 1 > 15))
//!(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15))
//!(F && V) || (V && F))
//!F || F)
//!F = V