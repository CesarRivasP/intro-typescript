class Vehicle {
  /* private brandName: string;
  private model: string;
  private color: string; */
  // forma de setear los parametros a traves del constructor, agregado posteriormente
  constructor(private brandName: string, private model: string, private color: string){
    /* this.brandName = brandName;
    this.model = model;
    this.color = color; */
  }

  handleDrive = () => {
    console.log(`Estoy conduciendo un ${this.brandName} ${this.model} de color ${this.color}`);
  }
}

const myCar = new Vehicle('Porsche', '911', 'plateado');
// myCar.brandName = 'Ruf'; 
// Para evitar que los atributos del objeto puedan ser cambiados en sus intancias, hay que agregar
// private a los atributos. Asi los atributos pasan a ser privados, y no se pueden cambiar desde fuera de la clase
myCar.handleDrive();
console.log(myCar);