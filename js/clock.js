const clock = document.querySelector("h2#clock");
//getElementByid("clock")
//internal은 '매번' 일어나야하는 무언가. 예) '매2초'
//첫번째 인자는 내가 실행하고자 하는 function
//두번째 인자는 호출되는 function간격을 몇 ms로 할지

//setTimeout은 setInterval이랑 비슷.
//다만 간격이 아닌 '몇 초 뒤' 실행

function getClock() {
  const date = new Date();
  //date.getHours엔 padStart()를 쓸 수 없다.getHours()는 number이기때문이다.
  //number-> string으로 만들려면 String으로 감싸면 된다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 즉시 호출
setInterval(getClock, 1000);
//매 초마다 새로운 Date object를 만들고 있음.
