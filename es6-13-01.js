/** 변수를 키/값으로 하는 객체 만들기 */
const name = "Alberto";
const surname = "Montalesi";
const age = 20;
const nationality = "Italian";

//ES5
const person = {
    name : name,
    surname : surname,
    age : age,
    nationality : nationality,
};

//ES6
const person2 = {name, surname, age, nationality,};

console.log(person);
console.log("----------------------------------------------");
console.log(person2);