'use strict'

// Bucle While

var year = 2018;
//while(Condicion)
while(year != 1991){
    console.log("Estamos en el año: "+year);
    if(year == 2000){
        break;
    }
    year--;
}

// Do while

/*
var years = 21;
do{
    alert("solo cuando sea diferente a 20");
    years = 20;
}while(years != 20)
*/

var years = 30;
do{
    alert("solo años ("+years+") cuando sea mayor a 25");
    years--;
}while(years > 25)