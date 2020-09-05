function indexPlus(valueOne: number, valueSecond: number) {
  return valueOne + valueSecond;
}

let value1: number;
let value2: number;

value1 = 1;
value2 = 2;

console.log(indexPlus(value1, value2));

const age: number = 24;


// -- TYPECASTING -- 
// Cuando se tiene que tomar un inputText desde el DOM
const element = document.getElementById('inputText');
// No se le ha indicado a typescript que element es un inputText, por lo que no lee que exista la propiedad value
// Solo entiende que es un elemento html
element.value; // Error

// Hay dos formas de hacer typecasting en TS
// Primera manera
const elementCasting = <HTMLInputElement>document.getElementById('inputText');
elementCasting.value; 

// Segunda manera 
const elementCastingV2 = document.getElementById('inputText') as HTMLInputElement;
elementCastingV2.value; 
 

// Para asegurar que un elemento existe dentro del DOM o simplemente que este no es nulo
const elementCastingV3 = document.getElementById('inputText')!;
// ESte signo no es necesario utilizarlo cuando se implemente el typecasting, puesto que al hacerlo
// Se le esta indicando a TS que estamos seguros que ese elemento existe

// -- Typescasting nos sirve para llevar de un tipo a otro tipo.