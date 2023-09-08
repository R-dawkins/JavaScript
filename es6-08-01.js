/** 기본적인 문자열 메소드 */

//1. indexOf()
const str = "this is a short sentence";
console.log(str.indexOf("short"));  //10

//2. slice()
const strSlice = "pizza, orange, apple";
console.log(strSlice.slice(0, 5));  //pizza

//3. toUpperCase()
const strToUpperCase = "i ate an apple";
console.log(strToUpperCase.toUpperCase());  //I ATE AN APPLE

//4. toLowerCase()
const strtoLowerCase = "I ATE AN APPLE";
console.log(strtoLowerCase.toLowerCase());  //i ate an apple