'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

// Recordar que el + sirve para concadenar strings como para sumar numeros.
alert("El resultado de la operacion es: "+operacion);


// Tipos de datos
var numero_entero = 44;
var cadena_texto = "hola 'que' tal"; 
// Para los Strings sirven tanto las comillas dobles como las siemples.
var verdadero_o_falso = true;
// Booleano

// Tambien tenemos funciones para transformar un tipo de dato a otro como;
var numero_falso = "33.4"
// Number lo transforma a cualquier tipo de numero, como flotante, decimal o entero.
// Comparado con parseInt, solo lo transforma en un Entero, lo mismo con parseFloat.
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7);

// Si quiero transformarlo en un string se usa la funcion String a cualquier variable.
console.log(String(numero_entero)+4);

// Como saber que tipo de variable es mi dato.
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);