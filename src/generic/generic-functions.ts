// Generic types tambien puede ser aplicado a funciones
function printString(array: string[]):void {
  array.forEach((element, index) => {
    console.log(array[index]);
  });
};

function printNumber(array: number[]):void {
  array.forEach((element, index) => {
    console.log(array[index]);
  });
};

function printAny<T>(array: T[]): void {
  array.forEach((element, index) => {
    console.log(array[index]);
  });
};

printAny<string>(['h', 'o', 'l', 'a']);
printAny<number>([1, 2, 3, 4]);