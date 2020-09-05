// --- Ahora el mismo ejemplo con clases ---
class BirdExampleWithClass {
  fly(): void {
    console.log('Cruzo las fronteras como un AIRBUS');
  };
};

class FishExampleWithClass {
  swin(): void{
    console.log('Nadando');
  };
};

type UknownPetExampleWithClass = FishExampleWithClass | BirdExampleWithClass;

function printPetExample(pet: UknownPetExampleWithClass){
  // Solo funciona con una forma
  if(pet instanceof FishExampleWithClass){
    pet.swin();
  }
  // Otra forma
  if(pet instanceof BirdExampleWithClass){
    pet.fly();
  }
};

const newPet = new FishExampleWithClass();
const newPetFly = new BirdExampleWithClass();
printPetExample(newPet);
printPetExample(newPetFly);