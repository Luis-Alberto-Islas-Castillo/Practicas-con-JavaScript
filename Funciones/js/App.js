"use strict"

function saludar(){
    var saludo = "Hola Mundo";
    console.log(saludo);
}
saludar();

//parametros de una funcion.

function parametros(nombre, edad) {
    console.log('Nombre: ', nombre);
    console.log('Edad: ', edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}
var mensaje = parametros('Luis', 21);
console.log(mensaje);

// Inicializacion de parametros 

function contar (cantidad=23){
    console.log('Total',cantidad);
}
contar(123);
