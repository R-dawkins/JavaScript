/** 클래스 정적 메소드 */
class Person{
    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //정적메소드 static
    //info 함수 : static 함수로 생성 --> 클래스명.메소드명 방식으로 호출
    //정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다.
    static info(){
        console.log("I am a Person, nice to meet you");
    }

    //greet 함수
    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }   
}

const alberto = new Person("Alberto", 30); //클래스의 인스턴스화
alberto.greet();
Person.info();
// alberto.info();//클래스를 인스턴스화 한 후 호출하면 오류 발생