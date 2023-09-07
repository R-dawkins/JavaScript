/* ES5 function syntax */
function greeting1(name){
  return "greeting1 : hello~" + name;
}

const greeting2 = function(name){
  return "greeting2 : hello~" + name;
}

var greeting3 = (name) => {
  return "greeting3 : hello~" + name;
}
var greeting4 = () => {
  return "greeting4 : hello~";
}

console.log(greeting1("홍길동"));
console.log(greeting2("홍길동"));
console.log(greeting3("홍길동"));
console.log(greeting4());