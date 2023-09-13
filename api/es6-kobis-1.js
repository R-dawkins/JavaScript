/*
  Kobis 일별 박스오피스 출력
*/
function showDailyList(kobis,range='Daily'){
  let koRes = kobis.boxOfficeResult.weeklyBoxOfficeList
    if(range === 'Daily'){koRes = kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(koRes);}
    else if(range === 'Weekly'){koRes = kobis.boxOfficeResult.weeklyBoxOfficeList;}
  function diplayDb(koRes){ 
    //계속 undefind가 뜬 이유 - diplayDb에서 koRes를 파라미터로 넘겨주지 않았음
    //그래서 koRes.map에서 Weekly를 받지 못해 자꾸 오류가 생김
    //오류가 생긴 위치를 자세히 보고 생각하자
    console.log(koRes);
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
      <td class ="movieName" id="${item.movieCd}"><a href="./detail.html?id=${item.movieCd}">${item.movieNm}</a></td>
      <td class ="rank">${item.rank}위</td>
      <td class ="date">${item.openDt}</td>
      <td class ="dayAcc">${item.audiCnt}명</td>
      <td class ="allAcc">총 ${item.audiAcc}명</td>
      <td class ="allSales">${item.salesAcc}원</td>
      </tr>
      `).join('\n')}
      </table>
      </div>
      `)
      // map함수로 단순 문자열 출력만 할 때는 braces 없이 적는다
      // document.getElementById("kobisContent") 옛날 방법
      // document.querySelector('#kobisContent') 요즘 방법
      //html문서의 모든 작업이 완료(DOMContentLoaded 이벤트)
      //된 뒤에 script파일을 실행하는것
      //DOM 객체 생성 후 diplayDb 함수 호출
    }
    diplayDb(koRes)
    //1. movieName 클래스를 가지고 있는 태그요소 가져오기 --> document.querySelectorAll(클래스명)
    //const mlist = document.
    document.querySelectorAll('.movieName').forEach((td)=>{
      td.addEventListener('click',e=>{
        let movieId = e.currentTarget.id
        execKobisContent(movieId)
      })//click
    })//foreach
}

const getKobis = (date,range)=>{
    function KobisFetch(date='20230911',range='Daily'){
      if(range === 'Daily'){return fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${range}BoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)}
      else if(range=== 'Weekly'){return fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${range}BoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)}
    }
    console.log(KobisFetch(date,range));
    KobisFetch(date,range)
    .then(response => response.json())
    .then((kobis)=>{showDailyList(kobis,range)
      console.log(kobis);
    })
    // .then(showDailyList)// 아래와 같은 코드를 생략가능
    // .then(kobis => {showDailyList(kobis)}) 
    // .catch(()=>console.log('fetch 실패!!!'))
    }//getKobis
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
      document.querySelector('#kobisContent').innerHTML =""
      let range = document.querySelector('.subm input:checked').value
      console.log(range);
      if(!searchDate.value){getKobis()}
      else{getKobis(searchDate.value,range)}
    })
  })
//일별,주별
//kobis API를 연동하여 영화 상세 정보 출력
const execKobisContent = (movieCd) => {
  return new Promise((resolve,reject)=>{
    fetch(`	http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`)
    .then(response => response.json())
    .then(showMovieContent)
    resolve()
  })
}

function showMovieContent(mContent){
  let md = mContent.movieInfoResult.movieInfo
  console.log(md);
  let {actors, directors, genres, movieCd, movieNm, movieNmEn, openDt} = md
  console.log(directors);
  document.querySelector('#kobisContent').innerHTML = ''
  document.querySelector('.movie-detail').innerHTML = `
  <h3 class="movieNm"></h3>
  <p>감독 : <i class="directors"></i></p>
  <p>배우 : <i class="actors"></i></p>
  <p>장르 : <i class="genres"></i></p>
  <p>개봉일 : <i class="openDt"></i></p>
  `
  document.querySelector('.movie-detail .movieNm').innerHTML = `영화 제목 : ${movieNm}`
  document.querySelector('.movie-detail .directors').innerHTML = ''
  directors = directors.slice(0,2);
  directors.forEach((v)=>{document.querySelector('.movie-detail .directors').insertAdjacentHTML('beforeend',`${v.peopleNm} /`)})
  actors = actors.slice(0,5);
  document.querySelector('.movie-detail .actors').innerHTML = ''
  actors.forEach((v)=>{
    document.querySelector('.movie-detail .actors').insertAdjacentHTML('beforeend',` ${v.peopleNm} /`)
  })
  document.querySelector('.movie-detail .genres').innerHTML = ''
  genres.forEach((v)=>document.querySelector('.movie-detail .genres').insertAdjacentHTML('beforeend',` ${v.genreNm} /`))
  
  document.querySelector('.movie-detail .openDt').innerHTML = `${openDt}`
  
}