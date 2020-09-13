// -- Otro ejemplo de constraint -- 

function findValue(object: object, key: string){
  return object[key]; // es pŕobable de que no exista, por lo que TS va a indicar que es error
  // Por lo que hay que re implementar de la siguiente manera
};

// keyof garantiza que el key va a existir dentro del type que se esta enviando en el type indicado, en este caso, el t
// aseguramos que U va a existir dentro de T
function findValueV2<T extends object, U extends keyof T>(object: T, key: U){
  return object[key];
};

findValueV2({ "name": 'Cesar Rivas', "age": 24}, "name");

// Con keyof se le da otra restriccion a nuestro generic, asegurando que uno de los tipos que estamos enviando va a pertener
// al otro tipo