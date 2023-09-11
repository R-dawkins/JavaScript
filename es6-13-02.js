/** 객체에 함수 추가하기 */
//ES5
const person = {
  name : "hong",
  greet : function(){
      console.log("Hello~~");
  }
};

person.greet();

//ES6
const person2 = {
  name : "홍길동",
  greet(){
      console.log("Hello2~~");
  },
  greet2 : () => //arrow function
  console.log("Hello3~~")

};

person2.greet();
person2.greet2();
