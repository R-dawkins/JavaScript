/** 객체 리터럴과 스프레드 */
let person = {
  name : 'Alberto',
  surname : 'Montalesi',
  age : 30,
};

let clone = {...person};
console.log(clone);

//person 속성 추가
person.addr = 'gangnam';

console.log(person);
console.log(clone);