'use strict'

/*
    Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales.
    PLUS: si los numeros no son un numero o son menores o iguales a 0, que los pida denuevo.
*/

var numero1 = Number(prompt("introduce el primer numero",""));
var numero2 = Number(prompt("introduce el segundo numero",""));

console.log(isNaN(numero1), isNaN(numero2));

while(isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){
    var numero1 = Number(prompt("introduce el primer numero",""));
    var numero2 = Number(prompt("introduce el segundo numero",""));
}

if(numero1==numero2){
    alert("son iguales");
}else if(numero1 < numero2){
    alert(numero2+" es mayor a "+numero1);
}else if(numero1 > numero2){
    alert(numero2+" es menor a "+numero1);
}else{
    alert("ERROR");
}




/*
var bandera = true;
if(isNaN(numero1)==true || isNaN(numero2)==true){
    bandera = 0;
}

switch(bandera){
    case (numero1 < numero2):
        console.log(numero2+" es mayor a "+numero1);
    break;
    case (numero1 > numero2):
        console.log(numero2+" es menor a "+numero1);
    break;
    case (numero1 == numero2):
        console.log(numero2+" es igual a "+numero1);
    break;
    default:
        console.log("ERROR");
    break;
}
*/