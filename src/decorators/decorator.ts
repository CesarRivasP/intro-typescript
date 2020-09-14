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

  post(request: string){
    this.castles.push(request);
  };
}

function registerEndpoint(target: any){
  const className = target.name.toLowerCase();  // Nombre de la clase
  const endpointPath = `/${className}`;

  httpServer[endpointPath] = new target();  //Hace referencia al prototype del objeto
};

// Asi no se llaman los decoradores
/* registerEndpoint(Families);
registerEndpoint(Castles);
 */
console.log(httpServer);

console.log(httpServer['/families'].get());
console.log(httpServer['/castles'].get());



