/** 배열의 복사 - 기존 배열의 참조 */

const veggie = ['tomato','cucumber','beans'];
const newVeggie = veggie;

//veggie 복사본을 생성한 것처럼 보이지만, 다음을 확인
veggie.push('peas');

console.log(veggie);
console.log(newVeggie);

/** ES5 및 이전 버전에서의 배열 복사 */
const veggie1 = ['tomato','cucumber','beans'];
const newVeggie1 = [].concat(veggie1); //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie1.push('peas');
console.log(veggie1);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie1);  //[ 'tomato', 'cucumber', 'beans' ]

/** ES6 스프레드 문법으로 배열 복사 */
const veggie2 = ['tomato','cucumber','beans'];
const newVeggie2 = [...veggie2]; //빈 배열 생성, 기존 배열의 값을 새 배열에 잇기
veggie2.push('peas');
console.log('---------------------------------------------->');
console.log(veggie2);     //[ 'tomato', 'cucumber', 'beans', 'peas' ]
console.log(newVeggie2);  //[ 'tomato', 'cucumber', 'beans' ]