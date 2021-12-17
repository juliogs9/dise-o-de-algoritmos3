//  ciclos - bucles - loops

// while
// do while
// for

// while
/*

let condicion = 1; - valor inicial

while(condition){
  codigo correra mientras la condicion se realice
  modificacion a nuestro valor inicial
}

*/

// imprimir  todos los numeros del 1 al 10

// let condicion = 11;
// while (condicion <= 10) {
//   console.log(condicion);
//   // condicion = condicion + 1;
//   condicion++;
// }

// let numero = 1; /* el doble signo de (++)suma 1  */
// numero++;
// console.log(numero);

// let num = 11;
// num--; /* el doble signo de (--) resta 1 */
// console.log(num);

/* 
do while a difrencia de while 
do while se ejecuta al menos una vez 
*/

// let numero = 11;

// do {
//   console.log(numero);
//   numero++;
// } while (numero <= 10);

/*
For utiliza un contador
 */

for (let control = 1; control <= 10; control++) {
  console.log(control);
}

const comidas = ["pozole", "tacos", "tortas", "tamales"];

for (let i = 0; i < comidas.length; i++) {
  console.log(comidas[i]);
}
