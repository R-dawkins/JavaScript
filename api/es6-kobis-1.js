const getKobis = (date='20230907')=>{
      console.log(date);
    fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)
    .then(response => response.json())
    .then(kobis => {
      console.log(kobis);
      let koRes = kobis.boxOfficeResult.dailyBoxOfficeList
      
      const diplayDb =() => {
        document.querySelector('#kobisContent').insertAdjacentHTML('beforeend',`
        <h2>${kobis.boxOfficeResult.boxofficeType}</h2>
        <em>${kobis.boxOfficeResult.showRange}</em>
        <div class="container">
        <table>
        <tr>
        <th>영화 제목</th>
        <th>박스오피스 순위</th>
        <th>개봉일</th>
        <th>일일 관객수</th>
        <th>누적 관객수</th>
        <th>누적 매출액</th>
        </tr>
        ${koRes.map(item=>
          ` 
          <tr>
          <td><a href="./detail.html?id=${item.rnum}">${item.movieNm}</a></td>
          <td class ="rank">${item.rank}위</td>
          <td class ="date">${item.openDt}</td>
          <td class ="dayAcc">${item.audiCnt}명</td>
          <td class ="allAcc">총 ${item.audiAcc}명</td>
          <td class ="allSales">${item.salesAcc}원</td>
          </tr>
          `
          ).join('\n')}
          </table>
          </div>
          `)
        }
          // map함수로 단순 문자열 출력만 할 때는 braces 없이 적는다
          // document.getElementById("kobisContent") 옛날 방법
          // document.querySelector('#kobisContent') 요즘 방법
          diplayDb()
          //html문서의 모든 작업이 완료(DOMContentLoaded 이벤트)
          //된 뒤에 script파일을 실행하는것
          //DOM 객체 생성 후 diplayDb 함수 호출
        })
        .catch(
          )
        }
        
//일별 박스오피스 출력 -순위, 영화제목, 개봉일, 누적관객수, 누적매출액
// console.log(kobis.boxOfficeResult.dailyBoxOfficeList[0]);

/* const getInput = () => {
  document.querySelector('#search').addEventListener('click',e=>{
    date = document.querySelector('#searchDate').value
    document.querySelector('.container').innerHTML ="";
    getKobis(date)
  })
}

addEventListener('DOMContentLoaded',getInput) */
//어떤 이벤트가 발생했는지 엔진에게 알리는 객체가 이벤트핸들러
document.addEventListener("DOMContentLoaded",()=>{
  getKobis()
  search.addEventListener('click',function(){
    kobisContent.innerHTML ="";
    getKobis(searchDate.value)
  })
})
//일별,주별


