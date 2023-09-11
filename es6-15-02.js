/** 클래스 생성 */
class Person { //클래스를 생성할 때는 첫글자가 대문자로 약속
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //greet 함수
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell() {
    console.log("goodbye friend");
  }
}
//위는 코드일 뿐
//class라는 키워드를 이용해 만들어진 Person이라는 객체는
const alberto = new Person("Alberto", 30);
//new 라는 명령어를 주어야만 메모리에 올라간다
alberto.greet();
alberto.farewell();
