//사용자가 todo를 입력해야하고 list도 필요하기 때문에
//form, list가 필요하다.

//form과ul을 HTML에서 js로 가져오기.
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
let toDos = []; //paintToDo가 그려질때마다 텍스트를 array에 push.
const TODOS_KEY = "todos";

//toDos array의 내용을 로컬스토리지에 넣는 것.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//button.addEventListener에 실행될 함수
function deleteToDo(event) {
  //   console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//paintToDo는 todo를 그리는 역할을 담당
//텍스트가 될 인자에 newTodo를 담아준다.
function paintToDo(newTodo) {
  //console.log("i will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // handleToDoSubmit에서 온 입력된 text
  const button = document.createElement("button");
  button.innerText = "❌"; //윈도우키+. : 이모지
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 갖게 됨.
  li.appendChild(button);

  //새로운 li를 todolist(ul)에 추가하기
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //form은 submit이벤트를 가지고 있고 새로고침이 기본동작이기 때문에 이를 막아줘야 한다.
  event.preventDefault();
  //input의 value를 얻어야한다.
  //input value를 비우기전에 그 값을 저장해야한다. 현재 value를 새로운 변수에 복사.
  const newTodo = toDoInput.value;
  //enter를 누를때마다 입력한것을 비워야함. 비웠다고해서 newTodo가 비워지는것을 의미하는게 아니다. newTodo 변수에 담았기때문에 아무런 영향이 없다
  toDoInput.value = "";

  const newTodoObj = {
    //text가 아닌 object 저장
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //text를 array에 담는다.
  //handleToDoSubmit함수가 paintToDo를 사용(호출)하게 된다.
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //그냥 stirng
//console.log(savedToDos);
if (savedToDos !== null) {
  //로컬스토리지에서 온 string을 살아있는 js object로 변환.
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  //로컬 스토리지에서 발견되는 이전의 todo .
  toDos = parsedToDos;
  //paintToDo는 텍스트를 받는데 js는 paintToDo에게 "a",..."d"전달해준다.
  parsedToDos.forEach(paintToDo);
  //array라서 forEach라는 걸 갖고 있다. forEach는 array에 있는 각각의 item에 대해서 실행해줌.
}

function sexyFilter() {
  //반드시 true를 리턴!
}
[1, 2, 3, 4].filter(sexyFilter);
