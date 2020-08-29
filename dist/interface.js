"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anesthesiologist"] = 1] = "Anesthesiologist";
    Role[Role["Assistant"] = 2] = "Assistant";
    Role[Role["Administrative"] = 3] = "Administrative";
})(Role || (Role = {}));
;
var doctor = {
    name: 'Cesar',
    email: 'Cesar@email.com',
    role: Role.Doctor,
    total: 25,
    currentBill: function () {
        return "Valor actual de la factura es de " + this.total;
    }
};
var printStaff = function (staff) {
    console.log(staff);
};
printStaff(doctor);
;
var handlePrintStaff = function (staff) {
    console.log(staff);
};
handlePrintStaff(doctor);
;
var handlePrintBill = function (bill) {
    console.log(bill.currentBill());
};
handlePrintBill(doctor);
