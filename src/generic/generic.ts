class ArrayOfNumbers {
  constructor(private collection: number[]){}

  get (index: number): number {
    return this.collection[index];
  };
};

class ArrayOfString {
  constructor(private collection: number[]){}

  get (index: number): number {
    return this.collection[index];
  };
};

// Para poder llevar la funcionalidad de estas dos clases a una sola se puede realizar mediante Generic
// Esta clase va a resumir las dos clases en una
// <argumentos> esto hace referencia a los types que se van a utilizar
// -- Asi se define una Clase Generica --
// En la que se envia por parametro el tipo que se quiere utilizar
class ArrayAny<T> {
  constructor(private collection: T[]){}

  get (index: number): T {
    return this.collection[index];
  };
};

// Para usarlo
const col = new ArrayAny<string>(['a', 'b', 'c']);