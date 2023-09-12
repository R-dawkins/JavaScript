//주어진 seconds(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러 출력
//콘솔 로그에 '타이머 종료!!'를 출력
function timer(callback, seconds){
  if(seconds <= 0){console.log('error')}
  else{setTimeout(callback, seconds)}
}

timer(() => {console.log('타이머 종료!!')}, 100)

const time = ((seconds)=>{
  if(seconds <= 50){console.log('error')}
  else{setTimeout(()=>{
    console.log('타임 종료!!')
  }, seconds)}
})
time(60)

//////////////////////
function executeTimer(callback, seconds){
  if(!seconds || seconds < 0){
    throw new Error('seconds가 0보다 작음');
    //throw 문- 사용자 정의 예외 - error 를 발생하게 하는 키워드 
    //error가 발생하면 현재 함수의 실행이 중지된다
  }
  setTimeout(callback,seconds*1000);
}

try {
  executeTimer(()=>{console.log('타이머 종료!!');}, 1)
  
} catch (error) {//error 매개변수는 error로그가 담겨있음
  console.log('에러발생 : seconds 값이 0보다 작거나 값이 주어지지 않음');
  console.log(error);
}

