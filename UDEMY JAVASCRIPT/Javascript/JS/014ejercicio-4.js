'use strict'

/*
    Mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("introduce el primer numero",0));
var numero2 = parseInt(prompt("introduce el segundo numero",0));

while(numero1 < numero2){
    numero1++;

    if(numero1%2 != 0){
        console.log("El "+numero1+" es impar");
    }
}

/*
var numero1 = Number(prompt("Introduce el primer numero",""));
var numero2 = Number(prompt("Introduce el primer numero",""));
document.write("<h1>De"+numero1+" a "+numero2+" estan estos numeros impares:</h1>")
for(var i = numero1; i <= numero2; i++){
    if((i%2)==1){
        document.write(i+"<br/>");
    }
}
*/