function getHTML(){
  //1초 후에 HTML 문자를 리턴하는 프로미스 생성
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('HTML')
    }, 1000);
  })
}
  function getCSS(){
    return new Promise((resolve)=>{
      setTimeout(() => {resolve('CSS')}, 1000);
    })
  }
  function getJS(){
    return new Promise((resolve)=>{
      setTimeout(() => {resolve('JS')}, 1000);
    })
  }


  getHTML()
    .then((html)=>{
      getCSS()
        .then((css)=>{
          getJS()
            .then((js)=>{console.log([html,css,js])
            })
        })
    })
//이전방식

//async 방식
  async function getResult(){
    const html = await getHTML()
    const css = await getCSS()
    const js = await getJS()
    return [html, css, js];
  }
  getResult().then((result)=>{console.log(result);})
  //getResult도 async가 붙으면 펜딩함수가 되기 때문에 .then을 써야함