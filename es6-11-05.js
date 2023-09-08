/** Array.find() */
const greeting = ["hello", "hi", "byebye", "goodbye", "hi"];

let foundIndex = greeting.findIndex(e => e === "hi"); //첫번째 값의 인덱스만 리턴
console.log(foundIndex);  // 1