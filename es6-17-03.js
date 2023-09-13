/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList = ['바나나','사과','오렌지','멜론','복숭아'];

function* loop(arr){
  //iterator 표준 프로토콜을 가진 배열 등이 파라미터에 들어가야 가능
  //객체가 들어가면 에러가 일어난다 : iterator 표준 프로토콜을 가지지 않았기 때문
    for(const item of arr){
          yield `I like to eat ${item}`;
    }
}

const fruitGenerator = loop(fruitList);
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next().value);

