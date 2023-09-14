const a = 200;
{
  const a = 100;
  {
    {
      console.log(a)//가장 근거리의 a를 찾는다
      // console.log(b)//상위 외부에서 b를 찾지 못해 error
      
      {
        const b = 300;
      }
    }
  }
}
console.log(a)
//같은 블럭 안에서 찾지 못하면 부모, 조상으로 간다
//같은 블럭 안에서 찾지 못하면 상위 외부에서 참조
//내부에선 찾을 수 없다

function print(){
  const message = 'Hello~ JavaScript!!';
  console.log(message)
}
print()
function sum(a, b){
  console.log(a+b);
}

sum(1,2);

for(let i=0; i<10; i++){
  console.log(i);
}

const text = "global";
{
  console.log(text);
  //가장 가까운 text 변수를 참조하였지만 초기화(initialization)가 되기 전이어서 오류가 발생
  const text ="local"
  {
    console.log(text);
  }
}
