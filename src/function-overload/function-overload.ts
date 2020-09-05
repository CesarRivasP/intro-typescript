type stringOrArray = string[] | string;


// Actualmente la funcion reverse va a retorna un elemento de tipo stringOrArray, por lo que no nos va a permitir
// acceder a metodos de los arrays o string. Para solucionar eso, hay que realizar una sobrecarga:
// -- Sobrecarga --
function reverse(stringOrArray: string): string;
function reverse(stringOrArray: string[]): string[];
// Asi cuando se llame a reverse, si le toca retornar un string, lo hara, y si es array tambien lo hara


//Crear una funcion que va a invertir el array o el string
function reverse(stringOrArray: stringOrArray): stringOrArray {
  return typeof stringOrArray === "string" ? (
    // Convertir en array
    stringOrArray.split("").reverse().join("")
  )
  :
  ( //si es un array
    stringOrArray.slice().reverse()
  )
};

const output = reverse(["a", "b", "c"]);
console.log(output);