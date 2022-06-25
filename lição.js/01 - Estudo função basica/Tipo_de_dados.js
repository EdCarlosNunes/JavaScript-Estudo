// Tipos de dados

let numero = 15 // Numero
let Nome = "Ed" // String
let Objeto = {primeiroNome:"Rodrigo", Ultimo:"Rdrigues"}
//Objeto

//se adicionar numero mais letra
let a = 16 + " Carro" // reconhece 16 como string

//e se for dois numeros
let y = 5 + 4 + " Carro"

//Os tipos de javascript são dinaico
//tipo dinamico significa que a mesma variavel pode ser usada para amazenar diferentes tipos de dados
let x //x é undefined é indefinido
x = 5 // agora x é numero
x = "Ed" //agora x é string é letra

//aspas as duas funcionam
let a1 = "Torre" // Aspas duplas
let a2 = 'Torre' // ou Aspas simples

// Numeros cientificos
let n1 = 123e5 // 12300000
let n2 = 123e-5 // 0.00123

//Booleanos 
let b1 = 5
let b2 = 5
let b3 = 6
(b1 == b2) // Returna True = verdadeiro
(b1 == b3) // Retorna False = falso

//objetos
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//<!DOCTYPE html>
//<html>
//<body>
//<h2>JavaScript Objects</h2>
//<p id="demo"></p>
<script>
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>
//</body>
//</html>

//retora John is 50 years old.