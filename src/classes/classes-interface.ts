interface Billiable {
  currentBill(): string
};
  
interface Flyable {
  altitude(): string
};

abstract class VehicleInterface {
  static testCurrentPrice: number = 1505050;
  constructor(
    protected readonly brandName: string, 
    private readonly model: string, 
    private readonly color: string,
    private price: number){ }

  get handleCurrentPrice(){
    return `El precio actual es ${this.price}`;
  }

  set handleSetPrice(value: number){
    this.price = value;
  }

  abstract handleDrive(): void 

  static PriceToCurrency(value: number, typeOfCurrency: string): string { 
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
  
class CarClassInterface extends VehicleInterface implements Billiable {
  handleDrive = (): void => {
    console.log(`Estoy conduciendo un auto ${this.brandName}`);
  }

  // tiene que ser implementada ajuro este metodo si se implementa la interface a la clase
  currentBill = (): string => {
    return `La factura actual es de 200`;
  }
}

const newCarClassInterface = new CarClassInterface('Porsche', '993', 'plateado', 150000);
console.log(newCar);
newCar.handleDrive();

console.log(Vehicle.PriceToCurrency(95000, 'USD'));


// Se puede implementar mas de una interfaz
class Airplane extends Vehicle implements Billiable, Flyable {
  currentBill = (): string => {
    return `La factura actual es de 200`;
  }

  altitude = (): string => {
    return `La altura actual es de 14500`;
  }
}

const airplane: Flyable = new Airplane('Airbus', '15952', 'white', 600);