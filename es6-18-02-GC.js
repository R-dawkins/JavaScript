let apple = {
  name : 'apple'
}//memory heap에 객체 생성
//apple에 객체의 주소 저장

let orange = apple;
console.log(orange);
apple = null; //주소 삭제
//null은 원시타입 데이터
//null은 메모리 힙의 객체를 가리키는 주소가 없다는 것
//memory heap 의 객체 reference 하지 않음
orange = null; //
//GC의 대상은? 
//{name : 'apple'}
//아무도 참조하지 않기 때문
//메모리가 임계치에 도달해야 삭제, 그 전은 삭제 대상일 뿐