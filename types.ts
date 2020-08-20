// Anotacion de tipos
let car: string;

let quantity: number;

let isAutomatic: boolean;


// Inferencia de tipos
let carBrand = "Porsche";

// Tipos primitivos
// string, boolean, number, null, undefined

// Tipos no-primitivos - Objetos
let people: { name: string, age: number, address: { street: string, code: number }, courses: string[] } = {
  name: 'Cesar',
  age: 24,
  address: {
    street: 'Paraiso con Jose Felix Ribas',
    code: 1010
  },
  courses: [ 'React','Patrones de diseño','MongoDB']
};

/* console.log(people.name)
console.log(people.age)
console.log(people.address) */

// Tipo Array

let coursesArray: string[] = [
  'React',
  'Patrones de diseño',
  'MongoDB'
];

for(const course of coursesArray){
  console.log(course);
}

console.log(coursesArray);

let hobbies: any[] = [
  "Programar",
  10
];

console.log(hobbies);

// Tipo tuples
let hypercar: [string, number, string] = ['Ferrari', 2016, 'LaFerrari'];
hypercar[1] = 2021;

console.log(hypercar)

// para poder reutilizar la validacion del type en un array
type motocycleType = [string, number, string];

let motocycle: motocycleType = ['Ducati', 2018, 'Monster']

// Tipo Enum
// nos permite utilizar valores fijos
enum role { student, teacher };

let person = {
  roleTeacher: role.teacher, //1
  roleStudent: role.student  //0
};

console.log(person)


// Tipo any
// se pueden definir distintos valores dentro de un array
// no es muy recomendable ya que si se utiliza, se pierde el proposito de typescript para validar types
// es recomendado usar tuples en estos casos

const bikes: any[] = [ "KTM", 2019];


// type literal
// el valor asignado se toma como un tipo, y este no se puede cambiar nuevamente por otro type que se quiere indicar luego
let auto: 'automovil';

auto = 'automovil';