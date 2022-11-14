'use strict'

/*
    Muestre todos los numeros divisores de un numero introducido en un prompt
*/

var numero = Number(prompt("Ingrese un numero",""));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        document.write(i+" es divisor"+"<br/>");
    }
}