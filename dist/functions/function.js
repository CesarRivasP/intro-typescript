"use strict";
function plus(value, valueTwo) {
    return value + valueTwo;
}
function print() {
    console.log(plus(10, 20));
}
print();
var plusArrowFunction = function (value1, value2) { return value1 + value2; };
var divide = function (value1, value2) {
    return value1 / value2;
};
var throwError = function (message) {
    throw new Error(message);
};
var throwErrorV2 = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
var plusV2 = function (value, valueTwo) {
    return value + valueTwo;
};
var plusV3 = plusV2;
function printV2() {
    console.log(plusV2(10, 20));
}
console.log(plusV3(2, 2));
var plusV5;
