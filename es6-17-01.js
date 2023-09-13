// for of, spread 등 
// iterator, iterable protocol 을 포함하여 생성된 내장객체
// iterable protocol을 포함하기 때문에 데이터를 순차적으로 출력해준다
// iterator, iterable protocol? : 내부적으로 순환참조를 가능하게하는 프로토콜
// 이런 프로토콜은 interface라고 불린다
// iterator 메서드가 사용 가능한 타입은 mdn에서 prototype을 확인 할 수 있다.
// String.prototype[@@iterator](),Array.prototype[@@iterator]() 등
// iterator라는 부모에게서 상속받아서 만들어 졌다는 뜻
// Symbol.iterator등을 편리하게 사용하기 위해 generator가 만들어 짐
const strArray = ['바나나','알러지','원숭이']
for (iterator of strArray) {
  console.log(iterator);
}
//바나나
//알러지
//원숭이

const charArray = "hello,javascript!!"
for (char of charArray){
  console.log(char);
}
//각 글자가 모두 각각 출력된다
//h
//e
//l
//l
//o
//,

const tmap = new Map();
tmap.set(0, 'test1');
tmap.set(1, 'test2');
tmap.set(2, 'test3');
console.log(tmap);
const tmapArray = tmap[Symbol.iterator]();
for (const iterator of tmapArray) {
  console.log(iterator);
}
//tmap이라는 map객체가 iterator protocol을 따르기 때문에 순환참조가 가능한 것

const tObj = {
    name : '홍길동',
    age : '20',
}

//const tArray = tObj[Symbol.iterator]();
//Symbol.iterator은 iterator protocol을 따를 때만 사용 가능

for(const obj of tObj){
  console.log(obj);
}//Object is not iterable

//Generator는 iterator의 자식 클래스이기 때문에 iterator를 사용 가능하다
//function*