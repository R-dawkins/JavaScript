let strArray = []; //let strArray = new Array();
//자동으로 생성자 Prototype을 사용해서 Array를 생성
class Parent{
  constructor(){

  }
}
class Person{
	constructor(){
		this.name = 'hong';
		this.age = 20;
	}
}

let hong = new Person();
console.log(hong);

const obj1 = new Object(); //주소1  주소가 다름
const obj2 = new Object(); //주소2 
console.log(obj1.__proto__ == obj2.__proto__); //true
//객체(오브젝트)의 타입 비교 : Object.prototype.__proto__

const array1 = ['hong', 'kim', 'park']; //Array > Object
//new Array후 hong,kim,park을 push 한 것

console.log(array1.values()); //MDN의 API를 통해 상속구조 이해하기
//클래스의 정의 => 여러개의 객체를 생성하는 틀

class People{
	constructor(name, age){
	this.name = name;
	this.age = age;
	}
}//People이라는 틀 추상적

class Actor extends People{
  constructor(name,age,movie){
    super(name,age);
    this.movie = movie;
  }
}

const gong = new Actor('공유',40,'오징어게임');
const son = new Actor('손석구',30,'범죄도시');
const song = new Actor('송혜교',35,'더글로리');


//eat() 을 People 안에 실제로 넣으면 메모리 낭비가 심함
//eat() 함수를 프로토타입으로 정의함

People.prototype.eat = function(){
  console.log(`${this.name} eat `); //eat 프로토타입 함수가 속한 People에 있는 속성을 받아 올 수 있다.
}//필요할때만 프로토타입.eat을 호출한다

Actor.prototype.act = function(){
  console.log(`${this.name} 배우가 ${this.movie}에서 연기를 한다`);
}


console.log(gong.name);
console.log(son.name);
console.log(song.name);

gong.eat();
song.eat();
son.eat();


/* const gong = new People('공유',40);
const son = new People('손석구',30);
const song = new People('송혜교',35); */
/* gong.act(); //Type Error
son.act();
song.act(); */



gong.act(); 
son.act();
song.act();


