# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

## 작업순서

### 1. queryselector 를 사용하여 필요한 값을 받아옴

```js
const userEmail = document.querySelector(".user-email-input");
const userPw = document.querySelector(".user-password-input");
const loginButton = document.querySelector(".btn-login");
```

### 2. email 정규표현식을 사용한 조건처리

- 정규표현식을 사용하여 입력한 이메일의 조건에 맞게 is--invalid class를 넣어주거나
  제거하는 함수를 만들어 사용함.

```js
userEmail.addEventListener("input", checkEmail);

function checkEmail() {
  if (!emailReg(userEmail.value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}
```

### 3. pw 정규표현식을 사용한 조건처리

- email의 조건처리와 동일한 방법으로 처리.

```js
userPw.addEventListener("input", checkPw);
function checkPw() {
  if (!pwReg(userPw.value)) {
    userPw.classList.add("is--invalid");
  } else {
    userPw.classList.remove("is--invalid");
  }
}
```

### 4. 로그인 버튼을 클릭했을때

1. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
2. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
3. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
4. 두 값이 일치 하지 않으면 기존 페이지(index.html)로 이동

- && 를 사용하여 두 조건을 모두 만족했을때 welcome.html 로 이동하고,
  그렇지 않을 경우 다시 index.html로 이동함.

```js
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
```

---

## 회고

1.  처음으로 실제로 배운것을 가지고 처음으로 동작하게 만들어 보았다. 무엇을 가져와서 작업해야하는지 감을 잡는데에 오랜 시간이 걸렸다. 예를 들어서 조건이 일치하지 않을때 에러메세지를 나타나게 해야하는데, is--invalid class를 error-meassage에 넣어도 나오지 않아서 한참 헤맸다.답은 제대로 마크업을 확인하지 않아서 였다.

    ```html
    <span class="error-message" id="userPasswordError"
      >비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.</span
    >
    ```

    ```css
    .is--invalid + .error-message {
      display: block;
    }
    ```

    span이 아니라 형제레벨인 input에게 is--invalid를 넣어줘야하는데 작성된 html과 css를 확인하지 않아서 시간을 많이 소비했다. 동작도 동작이지만, 기본이 되는 마크업과 스타일링을 제대로 알아야함을 다시끔 되새겼다.

    </br>

2.  힌트로 받은 preventDefault()를 제대로 이해하지 못했다.
    submit에 쓰이는 것 같아 loginform에 사용하였는데 어떠한 차이가 있는지 정확이 몰라서 공부가 더 필요할것 같다.
