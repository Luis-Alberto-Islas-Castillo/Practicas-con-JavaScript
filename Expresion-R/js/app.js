 "use strict"

var expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdf'));

var expresion2 = /Hola Mundo/;
console.log(expresion2.test('Mi primer programa es Hola Mundo'));

var parrafo = /text1 \/n texto2 /;