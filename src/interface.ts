enum Role {
  Doctor,
  Anesthesiologist,
  Assistant,
  Administrative
};

const doctor = {
  name: 'Cesar',
  email: 'Cesar@email.com',
  role: Role.Doctor,
  // Agregados posteriormente
  total: 25,
  currentBill(){
    return `Valor actual de la factura es de ${this.total}`
  }
};

const printStaff = (staff: { name: string, email: string, role: Role}) => {
  console.log(staff);
};

printStaff(doctor);

// Si se quisiera crear una nueva funcion que utilice la misma estructura, habria que crear la estructura de nuevo del parametro
// de la funcion
// --- Uso de interface ---
// el proposito de esta es complir como un contrato entre los objetos y la estructura que estamos definiendo
interface Staff {
  name: string,
  email: string,
  role: Role
};

const handlePrintStaff = (staff: Staff) => {
  console.log(staff);
};

handlePrintStaff(doctor);

// --- Diferencias entre types e interg¿faces ---
/*
 * Las interfaces son solo para definir y modelar la estructura de un objeto
 * Types nos permite realizar lo anterior, pero no esta limitado a esto, puesto que es mas flexible que el solo modelado
 de objetos
 * Pero en programacion las interfaces son las que se usan para definir la estructura del objeto
 */

interface Billable {
  total: number,
  currentBill(): string
};

const handlePrintBill = (bill: Billable) => {
  console.log(bill.currentBill());
};

handlePrintBill(doctor);  //Para que funcione, hay que agregar a la estructura medico los campos correspondientes con este metodo