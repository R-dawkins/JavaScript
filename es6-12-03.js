/** 함수와 스프레드 연산자 */
//기존 방식
function doSuff(x, y, z){
  console.log(x + y + z);
}
var args = [0, 1, 2];
doSuff.apply(null, args);  //함수 호출, 인수 전달 : //3(0+1+2)

//스프레드 문법
doSuff(...args);   //3(0+1+2)
console.log(args);  

/** 함수와 스프레드 연산자 */
const name = ['Alberto','Montalesi'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name);  //Hello~ Alberto Montalesi

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name2 = ['Jon','Paul','Jones'];
function greet2(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet2(...name2);  //Hello~ Jon Paul