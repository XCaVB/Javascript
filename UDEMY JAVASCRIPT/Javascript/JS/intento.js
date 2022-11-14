'use strict'

//  doble factorial, si el numero es par, son todos los numeros Pares desde 1 hasta el numero seleccionado, si es impar son todos los numeros impares desde el 1 hasta el numero.

var numero = Number(prompt("Ingresar el numero",""));

if((numero%2)==0){
    //numero es 
    for(var i = 2; i<numero; i+=2){
        console.log(i);
        i = i*i;
        console.log(i);
    }
}else if(numero%2!=0){
    //numero impar
    for(var i = 1; i<=numero; i+=2){
        
    }
}
