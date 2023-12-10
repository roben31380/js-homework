const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const userEmail = document.querySelector(".user-email-input");
const userPw = document.querySelector(".user-password-input");
const loginButton = document.querySelector(".btn-login");

//* email 정규표현식을 사용한 조건처리
userEmail.addEventListener("input", checkEmail);

function checkEmail() {
  if (!emailReg(userEmail.value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

//* pw 정규표현식을 사용한 validation
userPw.addEventListener("input", checkPw);
function checkPw() {
  if (!pwReg(userPw.value)) {
    userPw.classList.add("is--invalid");
  } else {
    userPw.classList.remove("is--invalid");
  }
  console.log(userPw.value);
  console.log(pwReg(userPw.value));
}

//* 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
//* 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
//* 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
loginButton.addEventListener("click", loginButtonClick);
function loginButtonClick(e) {
  e.preventDefault();
  if (userEmail.value === user.id && userPw.value === user.pw) {
    window.location.href = "../naver_login/welcome.html";
  } else {
    window.location.href = "../naver_login/index.html";
    alert("이메일이나 비밀번호를 다시 확인하세요.");
  }
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
