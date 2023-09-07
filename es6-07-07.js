/** 태그된 템플릿 리터럴 */
let person = "hong";
let age = 25;
//`That ${person} is a ${age}!!` templateLiteral 안에있는 That이 strings[0], is a가 strings[1], !!가 strings[2]로 자동으로 배열이 만들어 진다
function myTag(strings, personName, personAge){
    //template Literal안의 문자들이 자동으로 변환>> strings : ['That ',' is a',' !!']
    let str = strings[1];  //'is a'
    let str0 = strings[0];
    let str2 = strings[2];
    let ageStr;

    personAge > 50? ageStr="grandPa" : ageStr="youngster";
    
    return str0 + personName + str + ageStr + str2;
}

let sentence = myTag`That ${person} is a ${age}!!`;//templateLiteral로 소괄호 없이 바로 값을 넘겨줄 수 있다.
console.log(sentence);  //hong is a youngster