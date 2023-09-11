/** 객체 속성에 대한 식별자 얻어오기 */
const office = {
  [Symbol("Tom")] : "CEO",
  [Symbol("Mark")] : "CTO",
  [Symbol("Mark")] : "CIO",
};

//office 객체의 symbol 속성을 배열로 얻어오기
const symbolList = Object.getOwnPropertySymbols(office);
console.log(symbolList);

//속성 배열을 이용하여 속성 값 가져오기
const value = symbolList.map(symbol => office[symbol]);
console.log(value);