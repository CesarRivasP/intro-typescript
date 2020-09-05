interface Square {
  size: number;
  // Agregado posteriormente
  type: "square";
};

interface Rectangle {
  height: number;
  // Agregado posteriormente
  type: "rectangle";
};

interface Circle {
  radius: number;
  // Agregado posteriormente
  type: "circle";
};

type Shape = Square | Rectangle | Circle;

function printRectangle(shape: Shape){
  /* if("size" in shape){
    shape.size;
  }
  if("height" in shape){
    shape.height;
  }
  if("radius" in shape){
    shape.radius;
  } */

  // -- Para evitar posibles errores, se puede usar el discriminated-union patron --
  // Este patron nos sirve para trabajar con los typeguards
  switch(shape.type){
    case 'circle':
      shape.radius;
      break;
    case 'rectangle':
      shape.height;
      break;
    case 'square':
      shape.size;
      break;
    default:
      break;
  };
};