"use strict";
// 1. Declara una variable de tipo string llamada "nombre" e inicialízala con tu nombre.
let nombre = "Jorge";
// 2. Crea una función que reciba dos números y devuelva la suma de ambos. Especifica los tipos de los parámetros y del valor de retorno.
function sumar(a, b) {
    return console.log(a + b);
}
sumar(1, 1);
const jorge = {
    nombre: "Jorge",
    edad: 20,
    activo: true,
};
// 4. Crea una función que reciba un objeto del tipo "Persona" y devuelva un string con un mensaje que incluya el nombre y la edad.
function Saludar(persona) {
    return console.log(`Hola ${persona.nombre}, tienes ${persona.edad} años.`);
}
Saludar(jorge);
// 5. Declara un array de números e inicialízalo con cinco valores. Luego, crea una función que calcule el promedio de esos números.
const array = [895, 2, 3, 4, 5];
function Promedio(array) {
    let suma = 0;
    let promedio = 0;
    for (let valor of array) {
        suma = suma + valor;
    }
    promedio = suma / array.length;
    return console.log(`Su promedio es ${promedio}`);
}
Promedio(array);
// 6. Escribe una función que tome una cadena de texto y devuelva la misma cadena en mayúsculas. Usa el tipo adecuado para el parámetro y el retorno.
function EnMayusculas(texto) {
    return console.log(`${texto.toUpperCase()}`);
}
EnMayusculas("este texto todo en mayusculas");
// 7. Declara un enum llamado "Dia" con los días de la semana. Luego, crea una función que reciba un valor de tipo "Dia" y devuelva si es día laborable o fin de semana.
var Dia;
(function (Dia) {
    Dia[Dia["lunes"] = 1] = "lunes";
    Dia[Dia["martes"] = 1] = "martes";
    Dia[Dia["miercoles"] = 1] = "miercoles";
    Dia[Dia["jueves"] = 1] = "jueves";
    Dia[Dia["viernes"] = 1] = "viernes";
    Dia[Dia["sabado"] = 0] = "sabado";
    Dia[Dia["domingo"] = 0] = "domingo";
})(Dia || (Dia = {}));
function IsLaboral(dia) {
    if (dia === 1) {
        console.log("Es un dia laboral!");
    }
    else {
        console.log("No es un dia laboral!");
    }
}
IsLaboral(Dia.lunes);
// 8. Define una clase llamada "Rectangulo" con propiedades "base" y "altura" (ambas de tipo number), y un método que calcule el área del rectángulo.
class Rectangulo {
    constructor(base, altura) {
        this.altura = altura;
        this.base = base;
    }
    area() {
        console.log(`El area es ${this.altura * this.base} `);
    }
}
const rectangulo = new Rectangulo(2, 5);
rectangulo.area();
// 9. Crea una función genérica que reciba un array de cualquier tipo y devuelva el primer elemento del array.
function Generica(array) {
    return console.log(array[0]);
}
Generica(array);
// 10. Usa una unión de tipos para declarar una variable que pueda ser string o number, e imprime su valor dependiendo de su tipo.
let dato;
dato = "Hola mundo";
// dato = 42; // También puedes probar con un número
function Tipo(dato) {
    if (typeof dato === "string") {
        console.log(`El dato es una cadena: ${dato.toUpperCase()}`);
    }
    else if (typeof dato === "number") {
        console.log(`El dato es un número: ${dato * 2}`);
    }
}
Tipo(dato);
console.log("Aprendí mucho en esta seccion");
