/** 프로미스와 함께 사용하기 */
const myPromise = () => new Promise((resolve)=>{
     resolve("Our value is..");
});

function* gen(){
     let result = "";
     yield myPromise().then(data =>{  //프로미스를 반환
         result = data;
     });
     yield result +2; //프로미스의 결과를 기다린 후 이 값을 사용
}

const asyncFunc = gen();
const value1 = asyncFunc.next();
console.log(value1);

value1.value.then(() => {
     console.log(asyncFunc.next());
});