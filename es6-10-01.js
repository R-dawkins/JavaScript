/** 일반적인 for 루프 */
var fruits = ['apple','banana','orange'];
console.log('----------------->> 일반적인 for 루프');
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

/** for of 루프 */
var fruits2 = ['apple','banana','orange'];
console.log('----------------->> for of 루프');
for(const fruit of fruits2){
    console.log(fruit);
}