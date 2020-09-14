interface ApiEndpoint {
  get(): string[];
  post(request: string): void;
};

let httpServer: { [key: string]: ApiEndpoint } = {};

@registerEndpoint // Asi se le aplican los decoradores a nuestras clases
class Families implements ApiEndpoint {
  private houses = ["Lannister", "Targaryen"];

  get(){
    return this.houses;
  };

  post(request: string){
    this.houses.push(request);
  };
};

@registerEndpoint
class Castles implements ApiEndpoint {
  private castles = ["Winterfell", "Caserly Rock"];

  get(){
    return this.castles;
  };

  @test
  post(request: string){
    this.castles.push(request);
  };
}

// Decorador de prueba
function test(target: any, key: string, descriptor: PropertyDescriptor){
  console.log(target);  // Prototype del objeto
  console.log(`Identificador ${key}`);  //Identificador del metodo, propiedad o acceso donde se esta aplicando el decorator
  console.log(descriptor.value);  // Referencia a la logica de la funcion, que es lo que hace la clase
};

function registerEndpoint(target: any){
  const className = target.name.toLowerCase();  // Nombre de la clase
  const endpointPath = `/${className}`;

  httpServer[endpointPath] = new target();  //Hace referencia al prototype del objeto
};

// Asi no se llaman los decoradores
/* registerEndpoint(Families);
registerEndpoint(Castles);
 */
/*
console.log(httpServer);

console.log(httpServer['/families'].get());
console.log(httpServer['/castles'].get());
 */

// -- Detalles sobre los decoradores --
/**
 * Estos se ejecutan una sola vez cunado ejecutamos el proyecto
 * Solo cuando se ejecuta el archivo que tiene una clase con un decorador, es que este decorador se ejecuta
 * No se ejecuta cuando se crean instancias de la clase
 * En javascript son simples funciones
 */