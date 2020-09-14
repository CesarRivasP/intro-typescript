var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
var httpServer = {};
var Families = /** @class */ (function () {
    function Families() {
        this.houses = ["Lannister", "Targaryen"];
    }
    Families.prototype.get = function () {
        return this.houses;
    };
    ;
    Families.prototype.post = function (request) {
        this.houses.push(request);
    };
    ;
    Families = __decorate([
        registerEndpoint // Asi se le aplican los decoradores a nuestras clases
    ], Families);
    return Families;
}());
;
var Castles = /** @class */ (function () {
    function Castles() {
        this.castles = ["Winterfell", "Caserly Rock"];
    }
    Castles.prototype.get = function () {
        return this.castles;
    };
    ;
    Castles.prototype.post = function (request) {
        this.castles.push(request);
    };
    ;
    __decorate([
        test
    ], Castles.prototype, "post");
    Castles = __decorate([
        registerEndpoint
    ], Castles);
    return Castles;
}());
// Decorador de prueba
function test(target, key, descriptor) {
    console.log(target); // Prototype del objeto
    console.log("Identificador " + key); //Identificador del metodo, propiedad o acceso donde se esta aplicando el decorator
    console.log(descriptor.value); // Referencia a la logica de la funcion
}
;
function registerEndpoint(target) {
    var className = target.name.toLowerCase(); // Nombre de la clase
    var endpointPath = "/" + className;
    httpServer[endpointPath] = new target(); //Hace referencia al prototype del objeto
}
;
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
