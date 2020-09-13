// Hay clases que ya se encuentra pre realizadas en TS, y son bastante utiles

// built-in Typescriot 
class ICar {
  branch: string = '';
  model: string = '';
};

function createVehicle() : ICar {
 /*  const vehicle = {};
  // Da error porque aqui TS no sabe que el objeto vehicle de es de type ICar
  vehicle.branch = "Porsche";
  vehicle.model = '911'; */

  const vehicle: Partial<ICar> = {};
  // Aqui se indica que esta clase es de tipo ICar 
  vehicle.branch = "Porsche";
  vehicle.model = '911';

  return vehicle as ICar;
};

// Partial es una clase generica que nos permite utilizar objetos en TS, permitiendonos que los atributos sean
// opcionales

// -- Otra clase bastante util -- 
// Si queremos que nuestra variable sea inmutable
let cars: Readonly<string[]> = ['Porsche', 'Toyota'];
cars.push('BMW'); // Error

// Los generic types se pueden googlear por utility types