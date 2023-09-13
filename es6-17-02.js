const foo = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};
//*가 generator를 뜻하는듯
let str = '';
for (const val of foo()) {
  str = str + val;
}
//for of명령어를 사용할 수 있는 이유 = 
//iterator class를 상속받아서 iterable protocol표준으로 삼고 있기 때문에
//next함수를 이용해서 for of 문을 사용할 수 있습니다
console.log(str);
// Expected output: "abc"

const foo_gen = foo();
/*
console.log(foo_gen.next());
foo_gen.return();
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next()); */
//while문 사용 가능

while (true){
  const data = foo_gen.next(); //{value:a,done:false}
  if(!data.done){console.log(data.value);}
  else{
    break;
  }
}