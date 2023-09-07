/* const - block scope variable */
const z = "I am a constant";
z = "I can't be reassign";
console.log(z);
/* const - 객체 정의 */
const person = {
  name : "홍길동",
  age : 30
};
person.age = 35;
console.log(person.age);
console.log(person.name);