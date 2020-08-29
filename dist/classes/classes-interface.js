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
;
;
var VehicleInterface = (function () {
    function VehicleInterface(brandName, model, color, price) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(VehicleInterface.prototype, "handleCurrentPrice", {
        get: function () {
            return "El precio actual es " + this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleInterface.prototype, "handleSetPrice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    VehicleInterface.PriceToCurrency = function (value, typeOfCurrency) {
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
    VehicleInterface.testCurrentPrice = 1505050;
    return VehicleInterface;
}());
var CarClassInterface = (function (_super) {
    __extends(CarClassInterface, _super);
    function CarClassInterface() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDrive = function () {
            console.log("Estoy conduciendo un auto " + _this.brandName);
        };
        _this.currentBill = function () {
            return "La factura actual es de 200";
        };
        return _this;
    }
    return CarClassInterface;
}(VehicleInterface));
var newCarClassInterface = new CarClassInterface('Porsche', '993', 'plateado', 150000);
console.log(newCar);
newCar.handleDrive();
console.log(Vehicle.PriceToCurrency(95000, 'USD'));
var Airplane = (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentBill = function () {
            return "La factura actual es de 200";
        };
        _this.altitude = function () {
            return "La altura actual es de 14500";
        };
        return _this;
    }
    return Airplane;
}(Vehicle));
var airplane = new Airplane('Airbus', '15952', 'white', 600);
