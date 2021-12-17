const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * 2;
  console.log(numeros[i]);
}

// const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
// const resultados = [];

// for (let i = 0; i < numeros.length; i++) {
//   resultados.push(numeros[i] * 2);
// }

// resultados.forEach(function (el, i) {
//   document.write("<h1>El resultado del elemento " + i + " es:" + el + "</h1>");
// });
