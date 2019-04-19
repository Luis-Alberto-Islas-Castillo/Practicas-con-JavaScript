"use strict"

var datoA = 10;
var datoB = 20;

var suma = datoA + datoB;
console.log(`La suma: `+ datoA +' + '+ datoB + ` es igual a: `, suma);

var resta = datoA - datoB;
console.log(`La resta: `+ datoA +' - '+ datoB + ` es igual a: `, resta);

var multiplicacion = datoA * datoB;
console.log(`La multiplicacion: `+ datoA +' * '+ datoB + ` es igual a: `, multiplicacion);

var divicion = datoA / datoB;
console.log(`La divicion: `+ datoA +' / '+ datoB + ` es igual a: `, divicion);

var modulo = datoA % datoB;
console.log(`El modulo: `+ datoA +' / '+ datoB + ` es igual a: `, modulo);

var incremento = datoA;
incremento++;
console.log(`El incremento: `+ datoA + ` es igual a: `, incremento);

var decremento = datoA;
decremento--;
console.log(`El decremento: `+ datoA + ` es igual a: `, decremento);

//Operadores relacionales

var datoC = 34;
var datoD = 56;

var mayorQue = datoC > datoD;
console.log("Es "+ datoC + " mayor que " + datoD + ": " + mayorQue);

var menorQue = datoC < datoD;
console.log("Es "+ datoC + " mayor que " + datoD + ": " + menorQue);

// Operadores Logicos

var dato1 = 20;
var dato2 = 30;

var and = (dato1 > 10 && dato2 > 10)
console.log("El resultado de AND es: " + and);

var or = (dato1 > 10 || dato2 > 10)
console.log("El resultado de Or es: " + or);

// Operadores de Asignacion

var dadoasig = 23;

var igual = dadoasig;
console.log("El resultado de la asignacion es: "+ igual);

var masIgual = 56;
masIgual += dadoasig;
console.log("El resiltado es +=: "+ masIgual);

// Operadores de Concatenacion

var nombre = "Luis";
var apellido = "Islas";

var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);

var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);
