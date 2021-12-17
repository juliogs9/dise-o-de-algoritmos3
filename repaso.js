//  Arreglos

const comidas = ["pozole", "quesadillas", "tacos"];

//  length longitud del arreglo cantidad de elemntos en el arreglo
console.log(comidas.length);

// push agrega al final
// pop quita el elemnto del final
// unshift agrega un elemento al inicio de la lista
// shift quita el elemento del inicio de la lista

comidas.push("tortas");

console.log(comidas);

comidas.forEach(function (el) {
  console.log(el);
});

const numeros = [1, 2, 3, 4];
console.log(numeros);

// numeros.forEach(function (el) {
//   let suma = numeros + 1;
// });
// console.log(suma);

const arr = [];

function suma(num) {
  let sumNum = num + 1;
  return arr.push(sumNum);
}

suma(5);
suma(6);
suma(7);
suma(8);
suma(9);

console.log(arr);
