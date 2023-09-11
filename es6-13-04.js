/** 객체의 속성을 동적으로 정의하기 */
//ES5
var name = "myname";
var person = {};            //빈객체 생성
person[name] = "Alberto";   //객체 업데이트
console.log(person.myname);  //Alberto

//ES6
const name2 = "myname";
const person2 = {
    [name2] : "Alberto2",
};
console.log(person2.myname);  //Alberto2