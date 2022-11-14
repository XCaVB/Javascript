'use strict'
// Pruebas con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); // valor 50

//Var trabaja como informacion goblal, por lo tanto
//cambia los valores de cada variable





//Prueba con let
var texto = "Curso JS benjaminsanchez.es";
console.log(texto); //valor JS

if(true){
    let texto = "Curso Laravel 5 benjaminsanchez.es";
    console.log(texto); //valor Laravel 5
}

console.log(texto); //valor JS

//Let en su diferencia solo trabaja la informacion como bloque
// es decir, trabaja en el bloque que esta. ( if(true){} )