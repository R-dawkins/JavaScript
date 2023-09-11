/** 객체 속성에 대한 식별자 */
const office = {
  "Tom" : "CEO",
  "Mark" : "CTO",
  "Mark" : "CIO",
};
//Mark는 이름이 같아서 프로퍼티 1개로 배열이 만들어 짐
for(person in office){
  console.log(person);
}
/* for(person of office){
  console.log(person);
} */
//3번째 데이터인 Mark가 유실됨 iterable 에러 발생

console.log('office2----')

const office2 = {
  [Symbol("Tom")] : "CEO",
  [Symbol("Mark")] : "CTO",
  [Symbol("Mark")] : "CIO",
};

const symList = Object.getOwnPropertySymbols(office2)//symbol의 주소 반환
console.log(symList.length)
//symbol scope가 전역
//자바스크립트 엔진이 살아있다면 계속 사용 가능
for(person in symList){
  console.log(person);
}

for(person of symList){
  console.log(person);
}
//내장객체 - 자바스크립트 엔진이 만들어 둔다는 것
//객체로 만들어지면 class형태로 메모리힙에 만들어지고 내용은 같아도 별도로 만들어진다
//office2의 Symbol("Mark") : "CTO"와 Symbol("Mark") : "CIO"를 구분하게 만들어주는 식별자