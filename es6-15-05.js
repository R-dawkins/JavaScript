/** 클래스 상속 */
class Person{

  //생성자 --> new Person('홍길동',30) memory heap에 등록될 때 
  //constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드입니다.
  constructor(name, age){
      this.name = name;
      this.age = age;
      console.log(`Person name : ${this.name}`);
  }

  greet(){
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }
}//class Person
//extends라는 키워드를 사용하면 Adult는 Person의 자식이 된다
//Adult 클래스 : Person 자식 클래스 
class Adult extends Person{
  constructor(name, age, work){//new Adult()
      super(name, age);  //super키워드 사용=> Person(부모)의 생성자 호출
      //반드시 넣을 필요는 없지만 필요하다면 가장 처음에 super 사용
      this.name = name;
      this.work = work;
      console.log(`Adult name : ${this.name}`);
  }
}
//const hong = new Person("홍길동", 30); 
//const hong2 = new Adult("홍주니어", 10);
//Adult는 Person을 가지고있기 때문에 메모리가 더 크다
//Adult extends Person Person(틀)이 먼저 메모리에 등록되고 그다음에 Adult 등록
//hong에서 등록된 Person과
//hong2에서 등록된 Person은 다른 객체이다 틀의 이름만 같을 뿐 
//hong2의 Person에 "홍길동"이나 30이라는 값은 없다
let hong = new Person("홍길동",20);
console.log(hong.name);
console.log(hong.age);

let alberto = new Adult("Alberto", 30, "developer");
console.log(alberto.age);  //30
console.log(alberto.work);  //developer
console.log(alberto.name);  //Alberto
alberto.greet();

hong = alberto; //주소만 카피하는 형태
//hong이 X100(주소)을 가리켰고 alberto가 X200을 가리켰다면
//hong이 X200을 가리키게 된다
//따라서 정상적으로 X200에 있는 값이 호출이 된다
console.log(hong.name);
console.log(hong.work);



//오버로딩?
//js에서는 불가
//ex - constructor는 한개만 가질 수 있다
//2개 이상 생성되면 syntax error 발생
