/** set/get 메소드 */
class Person{
  //생성자
  constructor(name, surname){
      this.name = name;
      this.surname = surname;
      this.nickname = "";
  }

  //set method
  set nicknames(value){
      this.nickname = value;
      console.log(`set method ${this.nickname}`);
  }

  //get method
  get nicknames(){
      console.log(`get method Your nickname is ${this.nickname}`);
  } 
}//class Person
//동적바인딩

//(내생각)
//미리 객체를 만들어 두고 후에 값을 넣는 형태로 사용하기 위해? class를 사용하는게 아닐까
//공통적인 틀에다가 값만 다르게 넣어서 활용하는 용도
//ex 학생 10명의 성적

const alberto = new Person("Alberto", "Montalesi");
alberto.nicknames = "Albi"; //set 호출 데이터를 넣을 때
alberto.nicknames; //get 호출 데이터를 꺼낼 때
const hong = new Person("Hong","Gildong")
//객체 주소만 
hong.nicknames = "Thief"
hong.nicknames;
console.log(hong.name)