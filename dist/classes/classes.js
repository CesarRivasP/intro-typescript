"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(brandName, model, color, price) {
        var _this = this;
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
        this.handleDrive = function () {
            console.log("Estoy conduciendo un " + _this.brandName + " " + _this.model + " de color " + _this.color);
        };
    }
    Object.defineProperty(Vehicle.prototype, "handleCurrentPrice", {
        get: function () {
            return "El precio actual es " + this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "handleSetPrice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.PriceToCurrency = function (value, typeOfCurrency) {
        console.log(this.testCurrentPrice);
        var result = '';
        switch (typeOfCurrency) {
            case 'USD':
                result = typeOfCurrency + " " + value;
                break;
            case 'PESOS':
                result = typeOfCurrency + " " + value;
                break;
            case 'EUROS':
                result = typeOfCurrency + " " + value;
                break;
        }
        return result;
    };
    Vehicle.testCurrentPrice = 1505050;
    return Vehicle;
}());
var myCar = new Vehicle('Porsche', '911', 'plateado', 95000);
myCar.handleDrive();
console.log(myCar);
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDrive = function () {
            console.log("Estoy conduciendo un auto " + _this.brandName);
        };
        return _this;
    }
    return Car;
}(Vehicle));
var newCar = new Car('Porsche', '993', 'plateado', 150000);
console.log(newCar);
newCar.handleDrive();
myCar.handleSetPrice = 77777;
console.log(myCar.handleCurrentPrice);
console.log(Vehicle.PriceToCurrency(95000, 'USD'));
