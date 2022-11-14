'use strict'

/*
    Que nos diga si un numero es par o impar.
    1. Ventana prompt
    2. si no es valido que nos pida de nuevo el numero
*/

var numero = parseInt(prompt("introduce un numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("introduce un numero",0));
}

if(numero%2 != 0){
    alert("Es un numero impar");
}else{
    alert("Es par");
}


/*
var bandera = true;
var numero = 0;
while(bandera){
    numero = Number(prompt("introduce el numero",""));
    while(isNaN(numero)){
        numero = Number(prompt("introduce UN numero",""));
    }
    if(numero%2 != 0){
        console.log("El "+numero+" es impar");
        break;
    }else if(numero%2 != 1){
        console.log("El "+numero+" es par");
        break;
    }
}
*/