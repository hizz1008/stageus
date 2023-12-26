var currentValue = [];
var answer = [];
var strike = 0;
var ball = 0;
randomNum();
// 무작위 배열 생성
function randomNum() {
  var i = 0;
  while (i < 3) {
    var answerNum = Math.floor(Math.random() * 8 + 1);

    if (!sameNumCkeck(answerNum)) {
      answer.push(answerNum);
      i++;
    }
  }
}
// /무작위 배열 생성

// 중복값 제거
function sameNumCkeck(Num) {
  var i = answer.length - 1;
  while (i >= 0) {
    if (Num === answer[i]) {
      return true;
    }
    i--;
  }
  return false;
}
// /중복값 제거

// 입력값 받기 및 ui구현
// 이벤트 함수 명시
function onClickEvent(e) {
  var valueBox = document.getElementById("valueBox");
  var btnValue = Number(e.target.value);
  currentValue.push(btnValue);

  valueBox.innerHTML = currentValue;
}
// /입력값 받기 및 ui구현

// 정답 체크
function answerCheck() {
  var i = answer.length - 1;
  while (i >= 0) {
    if (currentValue[i] == answer[i]) {
      strike++;
    } else if (answer.includes(currentValue[i])) {
      ball++;
    }
    i--;
  }
}
// /정답 체크

// 유효성 검사
function resetEvent() {
  currentValue = [];
  valueBox.innerHTML = "";
}
function saveNoti() {
  alert("3개의 숫자를 입력해주세요.");
}
function saveEvent() {
  // 함수 안에 함수를 사용 closure 자바스크립트 문법 심화

  if (currentValue.length !== 3) {
    resetEvent();
    saveNoti();
    return;
  } else {
    var i = answer.length;
    while (i > 0) {
      console.log(currentValue);
      if (currentValue[i] == currentValue[i - 1]) {
        resetEvent();
        alert("중복된 숫자는 입력이 불가합니다");
        return;
      }
      i--;
    }
    answerCheck();
    var saveValue = document.getElementById("saveValue");
    var answerQuestion = document.createElement("li");

    if (strike == 3) {
      answerQuestion.innerHTML = `${currentValue} ${strike} strike ${ball} ball 정답!`;
      document.getElementById("resetPage").style.display = "flex";
    } else {
      answerQuestion.innerHTML = `${currentValue} ${strike}strike ${ball} ball`;
    }
    saveValue.appendChild(answerQuestion);
    valueBox.innerHTML = "";
  }
  strike = 0;
  ball = 0;
  currentValue = [];
}
console.log(currentValue);
// /유효성 검사

// 새로고침
function reload() {
  window.location.reload();
}
// /새로고침

console.log(answer);
