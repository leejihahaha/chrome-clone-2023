const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  //console.log(event);  function에 대한 argument로 방금 실행된 event에 대한 여러 정보를 준다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

//반복되는 건 paintGreetings라는 함수로 만들어준다. username을 인자로 받는 함수를 만들었고
//그에 맞는 변수명을 넣어주면 적용됨.
//함수를 호출하는 위치에 따라 유저정보는 다른곳에서 옴
function paintGreetings(username) {
  greeting.innerText = `hello! ${username} 🐣`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//onLoginSubmit() : 이런 식으로 호출하지 않는 이유는 submit이벤트가 발생했을 때만 함수를 실행시키길 원할때 이렇게 호출은 따로 하지 않는다!!!
const savedUsername = localStorage.getItem(USERNAME_KEY);
//로컬스토리지에 저장된 유저의 정보가 없다면?? form을 보여준다.새로고침을 막는다.
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 유저의 정보가 있다면?? hello 텍스트와 로컬스토리지에 저장된 유저네임을 보여주고 hidden을 제거해 h1을 보여준다
  paintGreetings(savedUsername);
}
