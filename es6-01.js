/* var - function scope variable */
for(var i=0; i<10; i++){
  var leak = "I am available outside of the loop";
}
console.log(i);
console.log(leak);

var fscope = "I am available inside this function";//전역변수
var gname = '';//전역변수
function myfunction(name){
  gname = name
  console.log(name)
  console.log(fscope);
}
console.log(fscope);//error
console.log(gname);//error

myfunction('홍길동');