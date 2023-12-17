/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const navigation = document.body.querySelector(".nav ul");
const visual = document.body.querySelector(".visual img");
const title = document.body.querySelector(".nickName");
// let playing = false;

function handleClick(e) {
  e.preventDefault();
  const li = e.target.closest("li");
  if (!li) return;
  const list = [...navigation.children];
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");
}

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
}

function setNameText(e) {
  const li = e.target.closest("li");
  if (!li) return;
  title.textContent = data[li.dataset.index - 1].name;
}

function setAudio(e) {
  const li = e.target.closest("li");
  if (!li) return;

  const audio = new AudioPlayer(
    `./assets/audio/${data[li.dataset.index - 1].name}.m4a`
  );
  audio.play();
}

navigation.addEventListener("click", (e) => {
  handleClick(e);
  setBgColor(e);
  setImage(e);
  setNameText(e);
  setAudio(e);
});
