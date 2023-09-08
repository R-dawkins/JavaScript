/** 새로운 문자열 메소드 */

//1. startsWith()
const code1 = "ABCDEFG";
console.log('--------->> startsWith');  
console.log(code1.startsWith("ABB"));  //false
console.log(code1.startsWith("abc"));  //false : 대소문자 구분
console.log(code1.startsWith("ABC"));  //true

console.log(code1.startsWith("DEF", 3));  //true : 3개 문자를 지나 검사


//2. endWith()
const code2 = "ABCDEFGHI";
console.log('--------->> endsWith');  
console.log(code2.endsWith("DEF"));  //false
console.log(code2.endsWith("def"));  //false :  대소문자 구분
console.log(code2.endsWith("GHI"));  //true

//문자열의 확인할 길이를 전달할 수 있다.
console.log(code2.endsWith("EF", 6));  
//true : 첫 6개 문자인 ABCDEF 만을 고려하여, ABCDEF는 EF로 끝나므로


//3. includes()
const code3 = "ABCDEF";
console.log('--------->> includes');  
console.log(code3.includes("ABB"));  //false
console.log(code3.includes("abc"));  //false :  대소문자 구분
console.log(code3.includes("CDE"));  //true


//4. repeat()
const code4 = "Hi";
console.log('--------->> repeat');  
console.log(code4.repeat(10));  //HiHiHiHiHiHiHiHiHiHi