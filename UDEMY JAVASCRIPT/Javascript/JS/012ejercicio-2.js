'use strict'

/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado.
*/

var suma = 0;
var contador = 0;

do{
    var numero = Number(prompt("introduce numeros hasta que metas uno negativo",""));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        // suma += numero;
    
        contador++;
    }
}while(numero >= 0)

alert("la suma de todos los numeros es: "+suma);
alert("la media de todos los numeros es: "+(suma/contador));


/*
var contador = 0;
var bandera = true;
var numero1 = 0;
var numero = 0;
while(bandera){
    numero = Number(prompt("introduce el numero",""));
    while(isNaN(numero1)){
        numero = Number(prompt("introduce UN numero",""));
    }
    contador++;
    var suma = numero+numero1;
    var media = (numero+numero1)/contador;
    if(numero<0){
        alert(numero+"+"+numero1+"="+suma+" y la media es "+media);
        break;
    }
    alert(numero+"+"+numero1+"="+suma+" y la media hasta el momento es "+media);
    numero1 = numero+numero1;
}
*/