function plus(value: number, valueTwo: number): number{
  return value + valueTwo;
}

// Cuando las funciones no tienen retorno, lo que se retorna es un tipo void
// tecnicamente es igual a undefined, pero no se puede utilizar de la misma manera, puesto que con
// type undefined, si tendrias que retornar un undefined en la funcion
// por lo que con void, ts sabe que no se va a retornar nada en la funcion
function print() : void {
  console.log(plus(10, 20));
}

print();

// Con arrow functions
const plusArrowFunction = (value1: number, value2: number) : number => value1 + value2;

const divide = function(value1: number, value2: number) : number {
  return value1 / value2;
};

// Otra forma de no retornar nada en las funciones
//type never
// con never nunca se va a retornar nada en la funcion, pero con void podria retornar undefined o null y seria valido para void
const throwError = (message: string) => { //type never
  throw new Error(message);
}

//aqui se condiciona el throw new error solo para cuando no haya mensaje, y eso cambia el type de la funcion
// abria que declarar que la funcion es de type never para que esta se asegure de que no se vaya a retornar nada
const throwErrorV2 = (message: string) => { //type string
  if(!message) {
    throw new Error(message);
  }

  return message;
}


// funciones como types

const plusV2 =  (value: number, valueTwo: number): number => {
  return value + valueTwo;
}

let plusV3 = plusV2;

function printV2(): void {
  console.log(plusV2(10, 20));
}

console.log(plusV3(2, 2));

let plusV4: Function;
plusV4 = 'sadadsad'; //tiene que ser una funcion para que no sea un error

let plusV5: (a: number, b: number) => number; //otra forma validar el tipo de una funcion
// plusV5 = printV2; // no es valido, porque print es de type void

console.log(plusV4(2, 2));

