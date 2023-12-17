# js-homework; misson 02 : Poster

## 작업순서

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.

   ```js
   // 이벤트 위임을 위한 DOM 처리
   const navigation = document.body.querySelector(".nav ul");

   // 위임과 반복문을 통하여 handle click 함수 생성
   function handleClick(e) {
     e.preventDefault();
     const li = e.target.closest("li");
     if (!li) return;
     const list = [...navigation.children];
     list.forEach((li) => li.classList.remove("is-active"));
     li.classList.add("is-active");
   }

   // 클릭이벤트에 함수 적용
   navigation.addEventListener("click", handleClick);
   ```

2. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.

   ```js
   // 이벤트 위임을 위한 DOM 처리
   const visual = document.body.querySelector(".visual img");
   const title = document.body.querySelector(".nickName");

   // 변경을 위해 코드 작성, 함수의 구분을 위해 새로운 함수로 생성
   function setBgColor(e) {
     const li = e.target.closest("li");
     if (!li) return;
     document.body.style.background = `linear-gradient(to bottom, ${
       data[li.dataset.index - 1].color[0]
     },${data[li.dataset.index - 1].color[1]}`;
   }

   function setImage(e) {
     const li = e.target.closest("li");
     if (!li) return;
     visual.src = `./assets/${data[li.dataset.index - 1].name}.jpeg`;
     visual.alt = `${data[li.dataset.index - 1].alt}.alt`;

   ```

3. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.

   ```js
   function setNameText(e) {
     const li = e.target.closest("li");
     if (!li) return;
     title.textContent = data[li.dataset.index - 1].name;
   }
   ```

4. 오디오 적용

   ```js
   function setAudio(e) {
     const li = e.target.closest("li");
     if (!li) return;

     const audio = new AudioPlayer(
       `./assets/audio/${data[li.dataset.index - 1].name}.m4a`
     );
     audio.play();
   }
   ```

5. 함수의 분리 및 실행
   ```js
   navigation.addEventListener("click", (e) => {
     handleClick(e);
     setBgColor(e);
     setImage(e);
     setNameText(e);
     setAudio(e);
   });
   ```

## 회고

1.  리팩토링 진행하지 못함

- dataset에서 index를 가져오는 코드가 반복되어서, 이것을 변수처리하면 좋을것 같다.

2. 구현하지 못한 점

- 클릭해서, 오디오가 재생되는 동안 다른 포스터를 클릭하면 오디오가 겹친다.
  오디오의 재생관리를 위한 변수(let playing = false;)를 생성하고, setAudio함수에서 audio의 재생과 함께 playing = true로 재할당하고, 조건문으로 playing = true일때는 setTimeOut을 이용해서 재생되는 오디오가 끝나면 그다음 오디오를 재생하고 싶었는데, 구현이 어려웠다.
