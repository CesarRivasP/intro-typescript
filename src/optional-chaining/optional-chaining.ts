interface Media {
  title: string;
  genres: string[];
  director?: { name: string };
};

const fetchMediaData: Media = {
  title: 'GoodFellaz',
  genres: [ 'Drama', 'Crime'],
  // director: { name: 'Martin Scorsese' } Para simular el caso en el que no hay director
};

// Optional chaining, se trata de poner un signo de pregunta antes de la propiedad que se considera que bien podria ser nula
// Asi se le indica a TS que la siguiente propiedad puede o no tener un valor
console.log(fetchMediaData.director?.name);


// -- Nullish coallesing -- 
// Nos permite evitar retornar undefined cuando los elemenos no existen
console.log(fetchMediaData.director?.name ?? 'El elemento no existe');