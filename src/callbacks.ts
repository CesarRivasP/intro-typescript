function print(a: number, b: number, mostrar: (value: number) => void): void {
  let result: number = a + b;

  mostrar(result);
}


print(2, 2, (value) => {
  console.log(value);
});