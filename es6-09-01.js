/** 객체 디스트럭처링 - ES6 이전 */
var person = {
  first : "hong",
  last : "gildong",
  age : "25",
};

var first = person.first;
var last = person.last;
var age = person.age;

console.log(`first : ${first}`);
console.log(`last : ${last}`);
console.log(`age : ${age}`);


/** 객체 디스트럭처링 - ES6 */
var person2 = {
  first2 : "hong",
  last2 : "gildong",
  age2 : "30",
};

const {first2, last2, age2} = person2;

console.log(`first : ${first2}`);
console.log(`last : ${last2}`);
console.log(`age : ${age2}`);