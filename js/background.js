const bg = document.getElementById("js-bg");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//이미지를 추가하기 위해선 jacascript에서 이미지를 만들고 html에 추가해야한다

//
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//마지막으로 bgImage를 body내부에 추가
//appendChild()는 body에 html을 추가

document.body.appendChild(bgImage);
