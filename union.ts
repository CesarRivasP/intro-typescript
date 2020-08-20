// Tipo union
// string | boolean | number

function padLeft(value: string, padding: any){
  if(typeof padding === 'number'){
    return Array(padding + 1).join(' ') + value;
  }

  if(typeof padding === 'string'){
    return padding + value;
  }

  throw new Error(`Espera un string, pero recibi '${padding}'.`)
}

console.log(padLeft('Hola mundo', 20));  //                     Hola mundo
console.log(padLeft('Hola mundo', ''));  //Hola mundo
// console.log(padLeft('Hola mundo', false));  //Error

// Usando union

type StringOrNumber = string | number;

function paddingLeft(value: string, padding: StringOrNumber){
  if(typeof padding === 'number'){
    return Array(padding + 1).join(' ') + value;
  }

  if(typeof padding === 'string'){
    return padding + value;
  }

  throw new Error(`Espera un string, pero recibi '${padding}'.`)
}

console.log(paddingLeft('Hola mundo', 20));  //                     Hola mundo
console.log(paddingLeft('Hola mundo', ''));  //Hola mundo
// console.log(paddingLeft('Hola mundo', false));  //no assignable