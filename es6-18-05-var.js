"use strict";
const i = 100;
for(i = 0; i<5; i++){ i+= 1;
}
console.log(i);//i -->

// person = '홍길동';
// person = '김길동';
console.log(person);
// let name = '첵스'
let name = '오즈'
console.log(name);

var fruit = 'apple'; //전역
{
  var fruit = 'orange'; //로컬이어야하지만?
  console.log(fruit);
  {
    var fruit = 'banana'; //로컬이어야하지만?
    console.log(fruit);
    {
      var fruit = 'melon'; //로컬이어야하지만?
      console.log(fruit);
    }
  }
}
console.log(fruit);

var test = 'test';

function varTest(){
  var test = 'test2';
  console.log(test);
}
varTest()
console.log(test);