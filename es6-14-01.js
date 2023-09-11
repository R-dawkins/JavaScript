/* 심벌은 es5에 없음 원시 값을 가진 상수형 객체
new 연산자를 이용해서 객체생성이 불가능하다*/
/* 원시 값? :JavaScript에서, 원시 값(primitive, 또는 원시 자료형)이란 객체가 아니면서 메서드 또는 속성도 가지지 않는 데이터입니다. 원시 값에는 7가지의 종류가 있습니다. */
/** 심벌의 고유성 */
const me = Symbol("Alberto");
console.log(me); 
/* 첫글자가 대문자라면 클래스 ,객체라는 뜻 */
/** 같은 값을 가진 새로운 심벌을 만들면 어떻게 될까? */
const clone = Symbol("Alberto");
console.log(clone);

//심벌 비교
console.log(me == clone);   //false
console.log(me === clone);  //false
//Object와 symbol은 부모자식간의 상속관계 Object가 부모 symbol이 자식

const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
