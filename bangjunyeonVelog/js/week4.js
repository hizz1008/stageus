var pieces = document.querySelector(".pieces");
var currentValue = []; // 무작위 배열
var answer = [];
var userAnswer = [];

var level = 0;

// 시작 페이지
// getElementById, querySelector 혼용 X 하나만 사용
function startClickEvent(e) {
  var startLayout = document.getElementById("startLayout");
  var dest = document.querySelector(".dest");
  if (e.target.dataset.index == "1") {
    startLayout.style.display = "none";
    dest.style.gridTemplateColumns = "126px 126px 126px";
    level = 9;

    timer();
    answerNums(level);
    randomList(level);
    currentValueConntionHtml(currentValue);
  } else if (e.target.dataset.index == "2") {
    startLayout.style.display = "none";
    dest.style.gridTemplateColumns = "80px 80px 80px 80px";
    level = 16;
    timer();
    answerNums(level);
    randomList(level);
    currentValueConntionHtml(currentValue);
  } else {
    startLayout.style.display = "none";
    dest.style.gridTemplateColumns = "80px 80px 80px 80px 80px";
    level = 25;
    timer();
    answerNums(level);
    randomList(level);
    currentValueConntionHtml(currentValue);
  }
}
// 중복 코드 제거 객체 사용
// /시작 페이지

// 정답피스 배열 및 tag 생성
function answerNums(level) {
  for (var i = 1; i < level + 1; i++) {
    answer.push(i);
  }
  answer.forEach(() => {
    var dest = document.querySelector(".dest");
    var destPiece = document.createElement("article");
    var destPieceImg = document.createElement("img");

    destPieceImg.src = `../image/week4Img/newbie/nullImg.jpg`;
    destPieceImg.alt = `destPiece`;

    dest.appendChild(destPiece);
    destPiece.appendChild(destPieceImg);

    destPiece.classList = "destPiece";
    destPiece.draggable = "true";

    destPiece.ondragstart = dragStartEvent;
    destPiece.ondragover = dragOverEvent;
    destPiece.ondrop = dropEvent;

    destPiece.dataset.index = 0;
  });
}

// /정답피스 배열 및 tag 생성

// 무작위 배열 생성
function randomList(level) {
  for (var i = 0; i < level; ) {
    var randomNums = Math.floor(Math.random() * level + 1);
    if (!inludesNums(randomNums)) {
      currentValue.push(randomNums);
      i++;
    }
  }
}
// 중복 제거
function inludesNums(num) {
  for (var i = 0; i < currentValue.length; i++) {
    if (num === currentValue[i]) {
      return true;
    }
  }
  return false;
}
// /중복 제거

// /무작위 배열 생성

// currentValue 리스트 html에 연결
function currentValueConntionHtml(listValues) {
  listValues.forEach((listValue) => {
    var randomPiece = document.createElement("article");

    var piece = document.createElement("img");
    if (level == 9) {
      piece.src = `../image/week4Img/newbie/piece${listValue}.jpg`;
      piece.alt = `piece${listValue}`;
    } else if (level == 16) {
      piece.src = `../image/week4Img/junior/junior${listValue}.jpg`;
      piece.alt = `piece${listValue}`;
      piece.style.width = "80px";
      piece.style.height = "80px";
    } else {
      var piece = document.createElement("img");
      piece.src = `../image/week4Img/senior/senior${listValue}.jpg`;
      piece.alt = `piece${listValue}`;
      piece.style.width = "80px";
      piece.style.height = "80px";
    }

    pieces.appendChild(randomPiece);
    randomPiece.appendChild(piece);

    randomPiece.dataset.index = listValue;
    randomPiece.className = "piece";
    randomPiece.ondragstart = dragStartEvent;
    randomPiece.ondragover = dragOverEvent;
    randomPiece.ondrop = dropEvent;
    randomPiece.draggable = "true";
  });
}
// /currentValue 리스트 html에 연결

// 드래그 시작
var draggedPiece = null;

function dragStartEvent(e) {
  draggedPiece = e.target;
}
// /드래그 시작

// 드래그 중
function dragOverEvent(e) {
  e.preventDefault();
}
// /드래그 중

// 드롭
function dropEvent(e) {
  e.preventDefault();

  var changeDataSetIndex = draggedPiece.parentNode.dataset.index;
  var changeImgSrc = draggedPiece.src;

  draggedPiece.parentNode.dataset.index = e.target.parentNode.dataset.index;
  draggedPiece.src = e.target.src;
  e.target.parentNode.dataset.index = changeDataSetIndex;
  e.target.src = changeImgSrc;

  // 변수로 저장한 이유 -  이미지와 dataSetIndex를 교환한 다음
  // 해당 이미지와 dataSetIndex를 읽으려 하기 때문에 교환이 어려움
  // 1 - 2 이 둘을 교환할 때 1을 2 위치에 옮기면 2가 1이 되는데
  // 그럼 원래 있던 1이 교환되지 않고 현재 2자리에 1로 바뀐 데이터를
  // 옮기려 하기 때문

  //
  draggedPiece = null;
}
// /드롭

// 배열 초기화
function resetList(num) {
  num.length = 0;
}
// /배열 초기화

// 정답 확인
function correctAnswer() {
  var resetLayout = document.getElementById("resetLayout");
  var resetLayoutTitle = document.querySelector(".resetTitle");
  resetLayout.style.display = "flex";
  resetLayoutTitle.textContent = `${min}:${sec}초 성공하였습니다`;
  clearInterval(intervalId);
}
function reloadClickEvent() {
  window.location.reload();
}
function incorrectAnswer() {
  alert("정답이 아닙니다");
}

function checkAnserClickEvent() {
  var destPieces = document.querySelectorAll(".destPiece");
  destPieces.forEach((destPiece) => {
    userAnswer.push(parseInt(destPiece.dataset.index));
  });

  var correct = true;
  for (var i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== answer[i]) {
      correct = false;
      // resetList(userAnswer);
      // incorrectAnswer();
      break;
      //return break 적절하게 사용
    }
    // else {
    //   correct = true;
    // }
  }

  if (correct == true) {
    correctAnswer();
  } else {
    incorrectAnswer();
  }
  resetList(userAnswer);
}
// /정답 확인

// 중복코드
// 위치 힌트
var differentPositions = [];
function hintClickEvent() {
  var destPieces = document.querySelectorAll(".destPiece");
  destPieces.forEach((destPiece) => {
    userAnswer.push(parseInt(destPiece.dataset.index));
  });

  for (var i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== answer[i]) {
      differentPositions.push(i + 1);
    }
  }
  alert(`틀린 퍼즐 위치: ${differentPositions}`);
  resetList(differentPositions);
  resetList(userAnswer);
}
// /위치 힌트

// 미리보기 힌트
function hintImgClickEvent() {
  var hintImgSection = document.querySelector(".hintImgSection");
  hintImgSection.style.display = "block";
  var hintImg = document.querySelector(".hintImg");
  if (level == 9) {
    hintImg.src = "../image/week4Img/newbie/piece.png";
  } else if (level == 16) {
    hintImg.src = "../image/week4Img/junior/junior.jpeg";
  } else {
    hintImg.src = "../image/week4Img/senior/senior.jpeg";
  }
  hintImg.alt = "미리보기 힌트";
}
function closeClickEvent(e) {
  e.target.parentNode.style.display = "none";
}
// /미리보기 힌트

// 타이머
var min = 0;
var sec = 1;
function timer() {
  var timer = document.querySelector(".timer");
  intervalId = setInterval(function () {
    timer.textContent = `${min}:${String(sec).padStart(2, "0")}`;
    if (sec >= 59) {
      min++;
      sec = 0;
    } else {
      sec++;
    }
  }, 1000);
}
// /타이머

// 피드백
// setInterval 이슈 다른 방법 (1초가 정확하지 않음)
// 라이브러리를 가져와서 가져온 시간과 라이브러리 시간을 빼서 사용
// 중복 코드 제거가 가장 중요
// 중복은 리스트 혹은 객체로 사용
// ["80px", 19] 이런 식으로
// addEventLisner vs onclick
// 리액트에선 onclick 방식을 사용
// 정답체크를 드랍할 때 마다 실행하면 따로 클릭을 안 눌러도 됨
