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
var VehicleClassAbstract = (function () {
    function VehicleClassAbstract(brandName, model, color, price) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(VehicleClassAbstract.prototype, "handleCurrentPrice", {
        get: function () {
            return "El precio actual es " + this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleClassAbstract.prototype, "handleSetPrice", {
        set: function (value) {
            this.price = value;
        },
        enumerable: false,
        configurable: true
    });
    VehicleClassAbstract.PriceToCurrency = function (value, typeOfCurrency) {
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
    VehicleClassAbstract.testCurrentPrice = 1505050;
    return VehicleClassAbstract;
}());
var CarClassAbstract = (function (_super) {
    __extends(CarClassAbstract, _super);
    function CarClassAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDrive = function () {
            console.log("Estoy conduciendo un auto " + _this.brandName);
        };
        return _this;
    }
    return CarClassAbstract;
}(VehicleClassAbstract));
var newCarClassAbstract = new CarClassAbstract('Porsche', '993', 'plateado', 150000);
console.log(newCar);
newCar.handleDrive();
console.log(VehicleClassAbstract.PriceToCurrency(95000, 'USD'));
