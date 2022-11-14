'use strict'

// Variables
// Una variable es un contenedor de informacion

var pais = "España";
var continente = "Europa";
var antiguedad = 2022;
var pais_y_continente = pais+" "+continente; 
//el + nos sirve para concadenar

pais = "Mexico";
continente = "Latinoamerica";
//Aqui estoy reemplazando los valores de pais y contiente
//No necesito crearlos denuevo usando el var

console.log(pais,continente,antiguedad);
//Al ir por orden me va imprimir "Mexico Latinoamerica 2022"
//Ya que reemplaza los valores
alert(pais_y_continente);
//Ya que la variable pais_y_continente se crea antes que se 
//reemplazen los valores, queda como "España Europa"

