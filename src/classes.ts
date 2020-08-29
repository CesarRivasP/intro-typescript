class Vehicle {
  /* private brandName: string;
  private model: string;
  private color: string; */
  // forma de setear los parametros a traves del constructor, agregado posteriormente
  constructor(/*private*/ protected readonly brandName: string, private model: string, private color: string){ //asignar y crear atributos en la clase
    // readonly solo existe en TS, y nos indica que solo podemos utulizar los atributos en su inicializacion
    /* this.brandName = brandName;
    this.model = model;
    this.color = color; */
  }

  handleDrive = () => {
    // this.brandName = 'Porsche Singer';  // Si se puede alterar el valor de este atributo desde dentro de la clase
    console.log(`Estoy conduciendo un ${this.brandName} ${this.model} de color ${this.color}`);
  }
}

const myCar = new Vehicle('Porsche', '911', 'plateado');
// myCar.brandName = 'Ruf'; 
// Para evitar que los atributos del objeto puedan ser cambiados en sus intancias, hay que agregar
// private a los atributos. Asi los atributos pasan a ser privados, y no se pueden cambiar desde fuera de la clase
myCar.handleDrive();
console.log(myCar);

// Herencia
class Car extends Vehicle {
  // Con la herencia se pueden sobreescribir acciones de la clase padre
  handleDrive = () => {
    // this.brandName = 'Porsche Singer';  // Si se puede alterar el valor de este atributo desde dentro de la clase
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }
}

const newCar = new Car('Porsche', '993', 'plateado');
console.log(newCar);
newCar.handleDrive();

// -- Visibilidad de la herencia --
/*
 * Public: puede ser llamado desde cualquier lugar 
 * Private: puede ser llamado desde la misma clase nada mas
 * Proteted: puede ser llamado desde la misma clase y sus clases derivadas
 */