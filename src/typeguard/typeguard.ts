interface Bird {
  fly(): void;
};

interface Fish {
  swin(): void;
};

type UknownPet = Fish | Bird;

function printPet(pet: UknownPet){
  // Solo funciona con una forma
 /*  if('swin' in pet){
    pet.swin();
  } */
  // Otra forma
  if(pet as Bird){
    (pet as Bird).fly();
  }
};

printPet({
  swin: () => {
    console.log('Nadando');
  },
});

printPet({
  fly: () => {
    console.log('Cruzo las fronteras como un AIRBUS');
  },
});
