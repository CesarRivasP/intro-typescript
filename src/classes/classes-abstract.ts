abstract class VehicleClassAbstract {
    // con abstract se le indica a la clase que no puede ser instanceada, pueden instancear a las clases hijas
    // pero a esta no se le puede instancear de manera directa
  
    /* private brandName: string;
    private model: string;
    private color: string; */
    static testCurrentPrice: number = 1505050;
    // forma de setear los parametros a traves del constructor, agregado posteriormente
    constructor(
      /*private*/ protected readonly brandName: string, 
      private readonly model: string, 
      private readonly color: string,
      private price: number){ //asignar y crear atributos en la clase
      // readonly solo existe en TS, y nos indica que solo podemos utulizar los atributos en su inicializacion
      /* this.brandName = brandName;
      this.model = model;
      this.color = color; */
    }
  
    get handleCurrentPrice(){
      return `El precio actual es ${this.price}`;
    }
  
    set handleSetPrice(value: number){
      this.price = value;
    }
  
    // Una vez se pasa a abstracto, no puede ser utilizado directamente, solo por clases hijas
    abstract handleDrive(): void 
  
    static PriceToCurrency(value: number, typeOfCurrency: string): string { 
      // Se va a poder acceder a esta funcion sin necesidad que instanciar esta clase con new
      // Cuando se trabaja con propiedades o funciones estaticas, no se puede llamar a una funcion que no sea estica
      // no se puede llamar a los atributos de la clase, si no es estatico, no puede acceder al atributo
      console.log(this.testCurrentPrice); // asi es que se puede acceder, porque es estatico
  
      let result: string = '';
  
      switch(typeOfCurrency){
        case 'USD':
          result = `${typeOfCurrency} ${value}`;
          break;
        case 'PESOS':
          result = `${typeOfCurrency} ${value}`;
          break;
        case 'EUROS':
          result = `${typeOfCurrency} ${value}`;
          break;
      }
  
      return result;
    }
  }
  
  // esto no es posible luego de pasar la clase vehicleClassAbstract como clase abstracta -- ultimo agregado
  
  // const myCar = new VehicleClassAbstract('Porsche', '911', 'plateado', 95000); 
  // myCar.brandName = 'Ruf'; 
  // Para evitar que los atributos del objeto puedan ser cambiados en sus intancias, hay que agregar
  // private a los atributos. Asi los atributos pasan a ser privados, y no se pueden cambiar desde fuera de la clase
  /* myCar.handleDrive();
  console.log(myCar); */
  
  // Herencia
  class CarClassAbstract extends VehicleClassAbstract {
    // Con la herencia se pueden sobreescribir acciones de la clase padre
    handleDrive = (): void => {
      // this.brandName = 'Porsche Singer';  // Si se puede alterar el valor de este atributo desde dentro de la clase
      console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
    // Si se tienen metodos abstractos en la clase padre, siempre tienen que ser implementados en las clases hijas
  }
  
  // SOlo se puede instancear la clase hija de VehicleClassAbstract luego de pasar a ser un clase abstracta
  const newCarClassAbstract = new CarClassAbstract('Porsche', '993', 'plateado', 150000);
  console.log(newCar);
  newCar.handleDrive();
  /* myCar.handleSetPrice = 77777; la clase paso a ser abstracta
  console.log(myCar.handleCurrentPrice); */
  
  // -- Visibilidad de la herencia --
  /*
   * Public: puede ser llamado desde cualquier lugar 
   * Private: puede ser llamado desde la misma clase nada mas
   * Proteted: puede ser llamado desde la misma clase y sus clases derivadas
   */
  
   // Los getters y setters nos permite cambiar y obtener atributos de una clase
  
   // -- Propiedades estaticas --
  /*
   * Nos permiten acceder a estas sin necesidad de utilizar el keyboard new, sin que hagamos una instancia de una clase
   * Es util para valores estaticos que queremos que sean parte de una clase, pero que no varian con el tiempo
   * Una de dichas clases estaticas que contiene varios metodos estaticos para hacer calculos es Math. 
   * Con esta clase podemos acceder a varios metodos sin necesidad de instancear esta clase
   */
  
  console.log(VehicleClassAbstract.PriceToCurrency(95000, 'USD'));
  
  // -- Definir clases abstractas --
  // Que no puedan ser creadas directamente, sino que sean creadas dentro de sus clases derivadas
  // Esto obliga a que los metodos sean utilizados solo por las clases hijas