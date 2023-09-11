/** 프로토타입 상속 */
function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function(){
  console.log("Hello, my name is " + this.name);
}

const alberto = new Person("Alberto", 30);
const caroline = new Person("Caroline", 30);
//Person 타입

alberto.greet();
caroline.greet();