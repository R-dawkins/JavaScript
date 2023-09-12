function execute(callback, seconds){
  console.log('1');
  setTimeout(callback , seconds)
  console.log('3');
}

execute(()=>{ console.log('2'); },2000);
/*callstack에 등록된 후 기다려야하는 시간 동안 cpu를 놀릴 수 없기 
때문에 web api로 넘기고 해당 시간 후에 
task 큐에서 다시 호출된 후 이벤트 루프가 call stack이 한가한지 확인하고
call stack이 할 일이 없다면 callback함수가 실행이 된다 
************************** 중요 *************************
*/