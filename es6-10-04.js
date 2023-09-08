/** for of 와 for in 차이 */
let list = [4, 5, 6];

//for in 은 키의 목록(배열은 인덱스값)을 반환한다.
console.log("--------------->> for in");
for(let i in list){
    console.log(i); //"0","1","2"
}

//for of 는 값을 반환한다.
console.log("--------------->> for of");
for(let i of list){
    console.log(i);  //4  5  6
}