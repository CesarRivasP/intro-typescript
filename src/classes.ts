class Vehicle {
  brandName: string;

  constructor(brandName: string){
    this.brandName = brandName;
  }

  handleDrive = () => {
    console.log(`Estoy conduciendo un ${this.brandName}`);
  }
}

const myCar = new Vehicle('Porsche');
myCar.handleDrive();
console.log(myCar);