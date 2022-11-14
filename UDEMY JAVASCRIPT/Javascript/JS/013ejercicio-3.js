'use strict'

/*
    Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
*/

var numero1 = Number(prompt("Introduce el primer numero",""));
var numero2 = Number(prompt("Introduce el primer numero",""));
document.write("<h1>De"+numero1+" a "+numero2+" estan estos numeros:</h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i+"<br/>");
}