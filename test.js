const algo = require("./algo");
//DECLARACION DE VARIABLES
let nombre = "Juan"; // Esto declar una variable
var apellido = "Perez"; // Esto tambien declara una variable
const PI = 3.1416; // Esto declara una constante
// LA DIFERENCIA ENTRE LET Y VAR TIENE QUE VER CON EL SCOPE
//TIPOS DE DATOS
//String
let cadena = "Hola mundo";
//Number
let numero = 10;
//Boolean
let boleano = true;
//Array
let array = ["Juan", "Pedro", "Maria"];
let arraybolea = [true, false, true];
let arraynum = [1, 2, 3, 4, 5];
let arraymix = ["Juan", 1, true];
let arrayobj = [{ nombre: "Juan" }, { nombre: "Pedro" }];
//Object
const user = {
  nombre: "Juan",
  apellido: "Perez",
  lugarDeNacimiento: {
    pais: "Mexico",
    estado: "CDMX",
  },
  lugaresVisitados: ["USA", "Canada", "Japon"],
}; // ESTO ES JSON, Javascript Object Notation

//Undefined
let indefinido;
//Null
let nulo = null;

//FUNCIONES
//OPERADORES
//ARITMETICOS
let suma = 1 + 1;
let resta = 1 - 1;
let multiplicacion = 1 * 1;
let division = 1 / 1;
let modulo = 1 % 1;
//COMPARACION
let mayor = 1 > 2;
let menor = 1 < 2;
let igual = 1 == 1;
let identico = 1 === 1;
let x = "1";
let y = true;
let igualdad = x == y;
let identidad = x === y;
let mayorIgual = 1 >= 1;
let menorIgual = 1 <= 1;
let diferente = 1 != 1;
let noIdentico = 1 !== 1;

//LOGICOS
let and = true && true;
let or = true || false;
let not = !true;

//CONDICIONALES
//if
if (true) {
  console.log("Hola");
} else {
  console.log("Adios");
}
//switch
let dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Es lunes");
    break;
  case "Martes":
    console.log("Es martes");
    break;
  default:
    console.log("No es lunes ni martes");
}

//FUNCIONES
function saludar() {
  console.log("Hola");
}
function suma(a, b) {
  return a + b;
}
const sumafuncion = (a, b) => {
  return a + b;
};
const sumafuncioncorta = (a, b) => a + b;
// LAS FUNCIONES FLECHA O ANONIMAS ESTARAN PRESENTES EN MUCHAS DE LAS COSAS QUE HAGAMOS
//CALLBACKS
function operacion(a, b, callback) {
  return callback(a, b);
}
//CICLOS
// for

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// while
let bandera = true;
let contador = 0;
while (bandera) {
  contador++;
  console.log("While" + contador);
  if (contador === 10) {
    bandera = false;
  }
}
// do while
bandera = true;
contador = 0;
do {
  contador++;
  console.log("do while" + contador);
  if (contador === 10) {
    bandera = false;
  }
} while (bandera);
// for each
let arreglo = [1, 2, 3, 4, 5];
arreglo.forEach((element) => {
  console.log("Arreglo" + element);
});
