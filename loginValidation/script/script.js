function idCheck(){
  document.querySelector('.member').addEventListener('click',e=>{
    let id = document.querySelector('.id').value;
    console.log(id);
    let idArr = [...id];
    console.log(idArr.length);
    if(idArr.length < 4 || idArr.length > 12){ document.querySelector('.idCheck').style.color = 'red'}
    else{document.querySelector('.idCheck').style.color = 'blue';}
  })
}//idCheck

//
function pwCheck(){
  document.querySelector('.member').addEventListener('click',e=>{
    let pw = document.querySelector('.pw').value;
    console.log(pw);
    let pwArr = [...pw];
    console.log(pwArr.length);
    if(pwArr.length < 4 || pwArr.length > 12){ document.querySelector('.pwCheck').style.color = 'red'}
    else{document.querySelector('.pwCheck').style.color = 'blue';}
  })
}//pwCheck

function birthCheck(){
  document.querySelector('.member').addEventListener('click',e=>{
    let birth = document.querySelector('.birth').value;
    console.log(birth);
    let birthArr = [...birth];
    console.log(birthArr.length);
    if(birthArr.length !== 8){ document.querySelector('.birthCheck').style.color = 'red'}
    else{document.querySelector('.birthCheck').style.color = 'blue';}
  })
}//birthCheck

// idCheck()
// pwCheck()
// birthCheck()

//////////////////////////////////////////// i made end
//getElementById es5부터 사용했기때문에 es5~es6까지 모두 사용가능하기때문에 사용
//////////////////////////////////////////// teacher's made it
/* submit 전 폼 체크 validation check(유효성 체크) */
function formCheck(){
  let name = document.getElementById('name');
  let id = document.getElementById('id');
  let pw = document.getElementById('pw');
  let pwc = document.getElementById('pwc');
  let birth = document.getElementById('birth');
  let phone = document.getElementById('phone');
  let agree = document.getElementById('agree');
  let email = document.getElementById('email')
  let emailSelect = document.getElementById('emailSelect')
  let emailId = document.getElementById('email-id')
  //name이라는 id를 가진 태그 자체에 접근

  function textColorfalse(errorCheck){
    errorCheck.style.color = 'red';
  }//글자색변환함수 에러
  function textColortrue(){
    errorCheck.style.color = 'green';
  }//글자색변환함수 정상

  console.log(id.value);
  console.log(pw.value);
  console.log(birth.value);

  if(name.value == '') {
    var errorCheck = document.querySelector('.nameCheck');
    errorCheck.textContent = '*이름을 입력해 주세요';
    textColorfalse(errorCheck)
    name.focus();
    return false;
  }//이름확인
  else{
    var errorCheck = document.querySelector('.nameCheck')
    errorCheck.textContent = '정상적인 입력입니다';
    textColortrue(errorCheck)
  }

  if(id.value == '') {
    var errorCheck = document.querySelector('.idCheck');
    errorCheck.textContent = '*아이디를 입력해 주세요';
    textColorfalse(errorCheck)
    id.focus();
    return false;
  }//아이디확인

  //문자열도 iterable protocol을 가지고 있기 때문에
  //바로 length가 사용 가능하다
  let idLength = id.value.length
  if(idLength < 4 || idLength > 12){
    var errorCheck = document.querySelector('.idCheck')
    errorCheck.textContent = '* 4~12글자까지만 입력 가능합니다';
    textColorfalse(errorCheck)
    id.focus();
    return false
  }//아이디양식확인 4~12
  else{
    var errorCheck = document.querySelector('.idCheck')
    errorCheck.textContent = '정상적인 입력입니다';
    textColortrue(errorCheck)
  }

  if(pw.value == '') {
    var errorCheck = document.querySelector('.pwCheck');
    errorCheck.textContent = '*패스워드를 입력해 주세요';
    textColorfalse(errorCheck)
    pw.focus();
    return false;
  }//비밀번호확인


  let pwLength = pw.value.length
  if(pwLength < 4 || pwLength > 12){
    var errorCheck = document.querySelector('.pwCheck')
    errorCheck.textContent = '* 4~12글자까지만 입력 가능합니다';
    textColorfalse(errorCheck)
    pw.focus();
    return false
  }//비밀번호양식확인 4~12
  else{
    var errorCheck = document.querySelector('.pwCheck')
    errorCheck.textContent = '정상적인 입력입니다';
    textColortrue(errorCheck)
  }

  if(pw.value !== pwc.value){
    var errorCheck = document.querySelector('.pwcCheck')
    errorCheck.textContent = '비밀번호가 다르게 입력 되었습니다.';
    textColorfalse(errorCheck)
    pwc.focus();
    return false
  }//비밀번호 확인 비교
  else{
    var errorCheck = document.querySelector('.pwcCheck')
    errorCheck.textContent = '비밀번호가 바르게 입력 되었습니다.';
    textColortrue(errorCheck)
  }

  if(birth.value == '') {
    var errorCheck = document.querySelector('.birthCheck');
    errorCheck.textContent = '*생년월일을 입력해 주세요 ex)19700101 8자리로 입력';
    textColorfalse(errorCheck)
    birth.focus();
    return false;
  }//생년월일확인

  let birthLength = birth.value.length
  if(birthLength !== 8){
    var errorCheck = document.querySelector('.birthCheck')
    errorCheck.textContent = '*ex)19700101 - 8자리로 입력';
    textColorfalse(errorCheck)
    birth.focus();
    return false
  }//생년월일양식확인 8
  else{
    var errorCheck = document.querySelector('.birthCheck')
    errorCheck.textContent = '정상적인 입력입니다';
    textColortrue(errorCheck)
  }

  if(phone.value == '') {
    var errorCheck = document.querySelector('.phoneCheck');
    errorCheck.textContent = '*전화번호를 입력해 주세요';
    textColorfalse(errorCheck)
    phone.focus();
    return false;
  }//전화번호확인

  if((phone.value).includes('-')){
    var errorCheck = document.querySelector('.phoneCheck')
    errorCheck.textContent = `* '-'없이 입력 해 주세요`;
    textColorfalse(errorCheck)
    phone.focus();
    return false
  }//전화번호 '-' 확인

  if(!agree.checked){
    var errorCheck = document.querySelector('.agreeCheck')
    errorCheck.textContent = `* 약관에 동의하지 않으면 회원가입을 할 수 없습니다.`;
    textColorfalse(errorCheck)
    alert('* 약관에 동의하지 않으면 회원가입을 할 수 없습니다.')
    agree.focus();
    return false
  }//약관동의 확인

  if(email.value =='' && emailSelect.value =='self' || emailId.value ==''){
    var errorCheck = document.querySelector('.emailCheck')
    alert('이메일을 입력 해 주세요')
    email.focus();
    return false
  }//이메일 확인

}//formCheck

function emailChange(){
  let emailValue = document.getElementById('emailSelect');
  let email = document.getElementById('email')
  if(emailValue.value == 'self'){
    email.value = ''
  }else{
    email.value = emailValue.value;
  }
}
//전화번호 -는 include로 true false받기
//카카오 api 사용해서 주소 검색 
document.addEventListener("DOMContentLoaded",()=>{
  // memberJoin.addEventListener('click',()=>{formCheck()}) 를 생략
  emailSelect.addEventListener('change',emailChange)
  memberJoin.addEventListener('click',formCheck)
})

const getKakao = (()=>{
  function kakaoFetch(){
    return new Promise((resolve, reject) => {
      fetch(`https://dapi.kakao.com/v2/local/search/address.json`
      
      )
    })
  }
})

//select - change - value
//