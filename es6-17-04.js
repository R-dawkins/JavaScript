/** 제너레이터 종료 */
function* fList(){
  yield '바나나';
  yield '복숭아';
  yield '사과';
  yield '멜론';
  yield '수박';
}

const fruits = fList();

console.log(fruits.return());