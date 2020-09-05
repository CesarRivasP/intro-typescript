// Intersection: combinar tipos
type User = {
  name: string,
  startDate: Date
};

type Admin = {
  name: string,
  permission: string [];
};

// Si se quiere tener un usuario que ademas de usuario sea administrador
// Combinar los dos types
type UserAdmin = User & Admin;

const doctorExample: UserAdmin = {
  name: 'César',
  startDate: new Date(),
  permission:  ["Ver chart de paciente"]
};

// Tambien se puede hacer a traves de interfaces
interface UserInterfaceExample {
  name: string,
  startDate: Date
};

interface AdminInterfaceExample {
  name: string,
  permission: string [];
};

interface UserAdminInterfaceExample extends UserInterfaceExample, AdminInterfaceExample {}

const doctorExampleInterfaceExample: UserAdminInterfaceExample = {
  name: 'César',
  startDate: new Date(),
  permission:  ["Ver chart de paciente"]
};