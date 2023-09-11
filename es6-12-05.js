/** 레스트 매개변수 */
const runners = ['Tom','Paul','Mark','Luke'];
const [first, second, ...losers] = runners;//레스트 배열로 다시 만드는 것
//스프레드와 레스트 구별
console.log(first,second)
console.log(...losers); //스프레드 요소를 펼쳐내는 것