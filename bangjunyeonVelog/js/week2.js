var videoImgs = document.querySelectorAll(".vImg");
var videoDots = document.querySelectorAll("#dot");
// getId
// qureySelect 기능적인 차이 검색
// 비디오 필터 효과
function videoMouseOver(event) {
  var videoImg = event.target;
  videoImg.style.filter = "brightness(50%)";
  videoImg.style.borderRadius = "0";
}

function videoMouseOut(event) {
  var videoImg = event.target;
  videoImg.style.borderRadius = "0.6rem";
  videoImg.style.filter = "brightness(100%)";
}
// /비디오 필터 효과

// 상세설명 점 메뉴
function videoInfoMouseOver(event) {
  var videoDot = event.target.querySelector("#dot");
  if (videoDot) {
    videoDot.style.display = "block";
  } else {
    return;
  }
}
// event단어 명시
function videoInfoMouseOut(event) {
  var videoDot = event.target.querySelector("#dot");
  if (videoDot) {
    videoDot.style.display = "none";
  } else {
    return;
  }
}
// 이벤트.(매개변수).target = 태그를 가져올 수 있음 qureySelect = 자식을 찾을 수 있음 get은 자식요소에 접근 불가
// /상세설명 점 메뉴

// 비디오 러닝타임
var min = 0;
var sec = 1;

var vImgRunningTimes = document.querySelectorAll(".vImgRunningTime");

// 이벤트 함수 명시
function runningTime(event) {
  intervalId = setInterval(function () {
    var vImgRunningTime = event.target.nextElementSibling;
    vImgRunningTime.style.display = "block";
    vImgRunningTime.innerHTML = `${min}:${String(sec).padStart(
      2,
      "0"
    )} / 30:58`;

    if (sec >= 60) {
      min++;
      sec = 1;
    } else if (min > 31) {
      clearInterval(intervalId);
    } else {
      sec++;
    }
  }, 1000);
}
// /비디오 러닝타임

function runningTimeOut(event) {
  var vImgRunningTime = event.target.nextElementSibling;
  vImgRunningTime.style.display = "none";
  clearInterval(intervalId);
  min = 0;
  sec = 1;
}

// 아이콘 설명
function altMouseOver(event) {
  var alt = event.target.nextElementSibling;
  alt.style.display = "flex";
}
function altMouseOut(event) {
  var alt = event.target.nextElementSibling;
  alt.style.display = "none";
}
// /아이콘 설명

// 메뉴바 전환
function toggleFadeMenu() {
  var fadeSection = document.querySelector(".fadeSection");
  var fadeNav = document.querySelector(".fadeNav");
  if (fadeSection.style.display === "block") {
    fadeSection.style.display = "none";
    fadeNav.style.left = "-240px";
  } else {
    fadeSection.style.display = "block";
    fadeNav.style.left = "0";
  }
}
// /메뉴바 전환
