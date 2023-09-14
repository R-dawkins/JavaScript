const a = 1;
{
  const b = 2;
  {
    const c = 3;
    console.log(a);//출력가능 : 스코프 내부에서 외부 참조 가능
  }//실행 컨텍스트에서 스코프를 기억하는 객체를 가지고 있다 객체 1
}// 실행 컨텍스트 객체 2
console.log(c);//에러 발생 :스코프 외부에서 내부 참조 불가능
//실행 컨텍스트 객체 3
//Lexical Environment Object(LEO)
//블럭 1 객체 내부환경 참조 c=3;
//주소(X001)  외부환경 참조 X002(주소에 가서 참조: Scope Chaining)
//블럭 2 객체 내부환경 참조 b=2;
//주소(X002)  외부환경 참조 X003 (Scope Chaining)
//블럭 3 객체 내부환경 참조 a=1;
//주소(X003)  외부환경 참조 