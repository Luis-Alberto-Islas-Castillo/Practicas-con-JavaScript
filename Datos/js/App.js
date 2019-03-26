"use strict"

var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);
//Ejemplo con variables comunes.

/////////////////////////////////////////////////////////

var bebida = "agua";

var comida = `carnitas`;

var instruccion = "Mi comida tipica son las `carnitas` ";

var edad2 = 34;

var edadtxt = String(edad2); 
//Ejemplos con variables concatenadas

/////////////////////////////////////////////////////////

var activo = false;

var estado = Boolean( 10 > 9);

var estado2 = Boolean(10 < 9);
// Ejemplo con valores Booleanos

/////////////////////////////////////////////////////////

var fecha = new Date();
// Ejemplo de Fecha.

/////////////////////////////////////////////////////////

var simbolo1 = Symbol();

var simbolo2 = Symbol();

var ambiente = Symbol(`Soft`);

// Ejemplo de simbolos 

/////////////////////////////////////////////////////////

var persona = {nombre : 'Luis', signo: 'piscis'};

var personas = [
    {nombre: 'Alberto', color: 'Rojo'},
    {nombre: 'Ramon', color: 'Verde'},
    {nombre: 'Ana', color: 'Azul'}
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)
// Ejemplos de datos con JSON.