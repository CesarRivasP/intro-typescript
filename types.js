"use strict";
// Anotacion de tipos
var car;
var quantity;
var isAutomatic;
// Inferencia de tipos
var carBrand = "Porsche";
// Tipos primitivos
// string, boolean, number, null, undefined
// Tipos no-primitivos - Objetos
var people = {
    name: 'Cesar',
    age: 24,
    address: {
        street: 'Paraiso con Jose Felix Ribas',
        code: 1010
    },
    courses: ['React', 'Patrones de diseño', 'MongoDB']
};
/* console.log(people.name)
console.log(people.age)
console.log(people.address) */
// Tipo Array
var coursesArray = [
    'React',
    'Patrones de diseño',
    'MongoDB'
];
for (var _i = 0, coursesArray_1 = coursesArray; _i < coursesArray_1.length; _i++) {
    var course = coursesArray_1[_i];
    console.log(course);
}
console.log(coursesArray);
var hobbies = [
    "Programar",
    10
];
console.log(hobbies);
// Tipo tuples
var hypercar = ['Ferrari', 2016, 'LaFerrari'];
hypercar[1] = 2021;
console.log(hypercar);
var motocycle = ['Ducati', 2018, 'Monster'];
// Tipo Enum
// nos permite utilizar valores fijos
var role;
(function (role) {
    role[role["student"] = 0] = "student";
    role[role["teacher"] = 1] = "teacher";
})(role || (role = {}));
;
var person = {
    roleTeacher: role.teacher,
    roleStudent: role.student //0
};
console.log(person);
// Tipo any
// se pueden definir distintos valores dentro de un array
// no es muy recomendable ya que si se utiliza, se pierde el proposito de typescript para validar types
// es recomendado usar tuples en estos casos
var bikes = ["KTM", 2019];
// type literal
// el valor asignado se toma como un tipo, y este no se puede cambiar nuevamente por otro type que se quiere indicar luego
var auto;
auto = 'automovil';
