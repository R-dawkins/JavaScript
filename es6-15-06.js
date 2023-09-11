/** 클래스를 활용하여 배열 확장하기 */
class ClassRoom extends Array{ //Array = 객체인 배열 생성
  constructor(name, ...students){ //new ClassRomm('hong',)여기의 ...students는 rest연산자  
      super(...students); //여기서 ...students는 스프레드 연산자
      //각 객체를 Array index 0부터 차곡차곡넣는다
      //...을 붙이지 않으면 배열 하나로 통째로 들어간다는 뜻
      this.name = name;
  }
  add(student){
      this.push(student);
  }
}

const myClass = new ClassRoom('1A', 
                                  {name : "Tom", mark:6 },
                                  {name : "Tim", mark:5 },
                                  {name : "Jon", mark:8 },
                                  {name : "Jim", mark:10 },
                              );
console.log('---------------------->> myClass');                            
console.log(myClass);

console.log('---------------------->> myClass add ');    
myClass.add({name:"Jimmy", mark:10});
console.log(myClass);
console.log('---------------------->> myClass[4]');  
console.log(myClass[4]);  //인덱스 4번지 출력

console.log('---------------------->> myClass 배열 출력');  
for(const student of myClass){
  console.log(student);
}