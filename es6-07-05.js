/** 삼항 연산자 추가하기 1 */
const isDiscounted = false;

function getPrice(){
    console.log(isDiscounted? "$10" : "$20");
}

getPrice();


/** 삼항 연산자 추가하기 2 */
const artist = {   //name, age와 함께 artist 객체 생성
    name : "잔나비",
    age : 20,
    song : "주저하는 연인들을 위해",
};

//artist 객체에 song 프로퍼티가 있을 때만 문장에 추가하고,
//없으면 아무것도 반환하지 않음
const text = `
    <div>
        <p>${artist.name} : ${artist.age}살 </p>
        ${artist.song? `<p>대표곡 : ${artist.song}</p>` : ''}
    </div>
`;

console.log(text);