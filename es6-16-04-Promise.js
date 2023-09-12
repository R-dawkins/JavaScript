let myFirstPromise = new Promise((resolve, reject)=>{
  function timer(callback,seconds){
    if(!seconds || seconds < 0){
      reject('실패')
    }
    else{setTimeout(callback, seconds)}
  }
  timer(()=>{resolve('myFirstPromise 성공')}, 100)

});

myFirstPromise.then((Message)=>{
  console.log("wow! " + Message)
}).catch(function(error){
  console.log(error);
})

///////////////////////////////
function executeTimer(seconds){
  return new Promise((resolve, reject) => {
    if(!seconds || seconds < 0){
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds) //생략 가능
    // setTimeout(()=>{resolve('executeTimer 성공')}, seconds)
  })//Promise
}//executeTimer

executeTimer()
.then(()=>console.log('타이머 성공'))
//.then(()=>{console.log('타이머 성공')}) 중괄호 생략
.catch(console.log(Error))
//.catch(()=>{console.log(Error)})중괄호와 파라미터 생략
.finally(()=>console.log(`executeTimer 프로그램 종료`))
//finally = 성공이든 실패든 실행할 함수

//fetch()전역 함수는 promise를 반환하기 때문에 then,catch등으로 받는 것