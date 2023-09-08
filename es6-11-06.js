/** Array.some & Array.every() */
const array = [3,4,5,6];
let arraySome = array.some(e => e > 3);//
console.log(arraySome);   //true

let arrayEvery = array.every(e => e > 2);
console.log(arrayEvery);   //false