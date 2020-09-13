// Para definir una marca de trabajo en el componente que estamos trabajando

// -- Constraint -- 

interface IMedia {
  print(): void
};

class Movie implements IMedia {
  constructor(private name: string){}

  print(): void {
    console.log('Pelicula ' + this.name);
  };
};

class TvShow implements IMedia {
  constructor(private name: string){}

  print(): void {
    console.log('Pelicula ' + this.name);
  };
};

// Para indicar que T (tipes que se estan eviendo) son de tipo media
function printMedia<T extends IMedia>(medias: T[]){
  medias.forEach((media) => {
    media.print();
  });
};

const movie = new Movie("American Ganster");
const tvShow = new TvShow('Peaky Blinder');

const media: IMedia[] = [movie, tvShow];

printMedia(media);