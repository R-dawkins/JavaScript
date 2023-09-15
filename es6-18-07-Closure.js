function outer(num){
  const a = 1;
  function inner(){
    console.log(num - a);
  }
  inner();
}

outer(100);
