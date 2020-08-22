"use strict";
function print(a, b, mostrar) {
    var result = a + b;
    mostrar(result);
}
print(2, 2, function (value) {
    console.log(value);
});
