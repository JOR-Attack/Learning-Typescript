// 1. Declara una variable de tipo string llamada "nombre" e inicialízala con tu nombre.

let nombre: string = "Jorge";

// 2. Crea una función que reciba dos números y devuelva la suma de ambos. Especifica los tipos de los parámetros y del valor de retorno.

function sumar(a: number, b: number): void {
  return console.log(a + b);
}

sumar(1, 1);

// 3. Define una interfaz llamada "Persona" con las propiedades "nombre" (string), "edad" (number) y "activo" (boolean).

interface Persona {
  nombre: string;
  edad: number;
  activo: boolean;
}

const jorge: Persona = {
  nombre: "Jorge",
  edad: 20,
  activo: true,
};

// 4. Crea una función que reciba un objeto del tipo "Persona" y devuelva un string con un mensaje que incluya el nombre y la edad.

function Saludar(persona: Persona): void {
  return console.log(`Hola ${persona.nombre}, tienes ${persona.edad} años.`);
}

Saludar(jorge);

// 5. Declara un array de números e inicialízalo con cinco valores. Luego, crea una función que calcule el promedio de esos números.

const array: number[] = [895, 2, 3, 4, 5];

function Promedio(array: number[]): void {
  let suma: number = 0;
  let promedio: number = 0;
  for (let valor of array) {
    suma = suma + valor;
  }
  promedio = suma / array.length;
  return console.log(`Su promedio es ${promedio}`);
}

Promedio(array);

// 6. Escribe una función que tome una cadena de texto y devuelva la misma cadena en mayúsculas. Usa el tipo adecuado para el parámetro y el retorno.

function EnMayusculas(texto: string): void {
  return console.log(`${texto.toUpperCase()}`);
}

EnMayusculas("este texto todo en mayusculas");

// 7. Declara un enum llamado "Dia" con los días de la semana. Luego, crea una función que reciba un valor de tipo "Dia" y devuelva si es día laborable o fin de semana.

enum Dia {
  lunes = 1,
  martes = 1,
  miercoles = 1,
  jueves = 1,
  viernes = 1,
  sabado = 0,
  domingo = 0,
}

function IsLaboral(dia: Dia): void {
  if (dia === 1) {
    console.log("Es un dia laboral!");
  } else {
    console.log("No es un dia laboral!");
  }
}

IsLaboral(Dia.lunes);

// 8. Define una clase llamada "Rectangulo" con propiedades "base" y "altura" (ambas de tipo number), y un método que calcule el área del rectángulo.

class Rectangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.altura = altura;
    this.base = base;
  }

  area(): void {
    console.log(`El area es ${this.altura * this.base} `);
  }
}

const rectangulo = new Rectangulo(2, 5);
rectangulo.area();

// 9. Crea una función genérica que reciba un array de cualquier tipo y devuelva el primer elemento del array.

function Generica(array: any): void {
  return console.log(array[0]);
}

Generica(array);

// 10. Usa una unión de tipos para declarar una variable que pueda ser string o number, e imprime su valor dependiendo de su tipo.

let dato: string | number;

dato = "Hola mundo";
// dato = 42; // También puedes probar con un número

function Tipo(dato: string | number) {
  if (typeof dato === "string") {
    console.log(`El dato es una cadena: ${dato.toUpperCase()}`);
  } else if (typeof dato === "number") {
    console.log(`El dato es un número: ${dato * 2}`);
  }
}

Tipo(dato);

console.log("Aprendí mucho en esta seccion");
