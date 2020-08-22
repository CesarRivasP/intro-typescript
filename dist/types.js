"use strict";
var car;
var quantity;
var isAutomatic;
var carBrand = "Porsche";
var people = {
    name: 'Cesar',
    age: 24,
    address: {
        street: 'Paraiso con Jose Felix Ribas',
        code: 1010
    },
    courses: ['React', 'Patrones de diseño', 'MongoDB']
};
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
var hypercar = ['Ferrari', 2016, 'LaFerrari'];
hypercar[1] = 2021;
console.log(hypercar);
var motocycle = ['Ducati', 2018, 'Monster'];
var role;
(function (role) {
    role[role["student"] = 0] = "student";
    role[role["teacher"] = 1] = "teacher";
})(role || (role = {}));
;
var person = {
    roleTeacher: role.teacher,
    roleStudent: role.student
};
console.log(person);
var bikes = ["KTM", 2019];
var auto;
auto = 'automovil';
