/* let - block scope variable */
let x = "global";
if(x ==="global"){
  let x = "block";
  console.log(x); //block-scope
}
console.log(x); //global-scope

/* var - function scope variable  */
var y = "global";
if(y === "global"){
  var y = "block-scope";
  console.log(y);
}console.log(y);