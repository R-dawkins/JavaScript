/** 객체에 함수 추가하기 - 화살표 함수 정의 시 반드시 키 정의!! */
const person = {
  name : "hong",
  //() => console.log("Hello~"),  //문법 오류 : 키 정의안되어 있음
};

const person2 = {
  name : "hong",
  greet : () => console.log("Hello~"),
};

person2.greet();