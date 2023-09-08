/** 배열 디스트럭처링 */
const person = ["hong", "gildong", 30, "male"];
const [name, sname, age, gender] = person;

console.log('--------------> person');
console.log(name, sname, age);
console.log(`name : ${name}, sname : ${sname}, age : ${age}, gender : ${gender}`);

/** person2 */
const person2 = ["hong", "gildong", 30];
const [name2, sname2,] = person2;

console.log('--------------> person2');
// console.log(name2, sname2, age2); //age2는 변수로 할당되지 않아, ReferenceError 발생
console.log(`name : ${name2}, sname : ${sname2}`);
//ReferenceError는 memory heap에서 없는 값을 불러오려 할 때 생긴다
/** person3 & rest operator(레스트 연산자) */
const fruits = ["사과","복숭아","수박","자두","멜론"];
const [f1, f2, ...food] = fruits;

console.log('--------------> fruits');
console.log(f1, f2); 
console.log(food);

for (const fr of food) {
  console.log(fr);
}

for (const i in food) {
  if (Object.hasOwnProperty.call(food, i)) {
    const element = food[i];
    console.log(`${i}-->${element}`);
  }
}

for (let i = 0; i < food.length; i++) {
  const element = food[i];
  console.log(element);
}
food.forEach((element,index) => {
  console.log(element,index);
});