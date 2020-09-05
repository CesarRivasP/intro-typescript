interface ErrorType {
  // Queremos que nuestro objeto almacene mensajes, por lo que su propiedad es de tipo string
  // tipo de interface: que valor va a tener esta
  [key: string]: string;
};

// Asi se le indica que nuestro objeto puede almacenar cualquier key:
// Para este caso: { "email": 'Email invalid', "password": "password invalid" }
// indicando que este campo es string, y que su valor sea de tipo string


const errorMessage: ErrorType = {
  email: "email invalid",
  password: "password invalid"
};