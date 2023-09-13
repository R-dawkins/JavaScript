/** .throw()로 오류 잡기 */
function* gen(){
  try{
       yield 'Trying..';
       yield 'Trying harder ..';
       yield 'Trying even harder..';
  }catch(err){
       console.log("Error : " + err);
  }
}

const myGenerator = gen();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.throw('ooops'));