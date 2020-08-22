"use strict";
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Espera un string, pero recibi '" + padding + "'.");
}
console.log(padLeft('Hola mundo', 20));
console.log(padLeft('Hola mundo', ''));
function paddingLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Espera un string, pero recibi '" + padding + "'.");
}
console.log(paddingLeft('Hola mundo', 20));
console.log(paddingLeft('Hola mundo', ''));
