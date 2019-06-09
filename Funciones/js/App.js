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

// Funciones Anonimas.

var notificacion = function(nombre){
    var notificacion = "Hola " + nombre;
    return notificacion;
}

// Funcion Arrow

var despedida = persona => "Adios" + persona;
console.log(despedida(" Luis"));

// Callbacks

function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

