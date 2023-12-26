const mainMouseOverEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  switch (targetId) {
    case "videoImg":
      target.style.borderRadius = "0px";
      target.style.filter = "brightness(80%)";
      const videoImgRunningTime = target.nextElementSibling;
      runningTime(videoImgRunningTime);
      break;
  }
};
const mainMouseOutEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  switch (targetId) {
    case "videoImg":
      target.style.borderRadius = "10px";
      target.style.filter = "brightness(100%)";
      const videoImgRunningTime = target.nextElementSibling;
      runningTimeOut(videoImgRunningTime);
      break;
  }
};
let intervalId;
let min = 0;
let sec = 1;

const runningTime = (target) => {
  intervalId = setInterval(function () {
    const videoImgRunningTime = target;
    videoImgRunningTime.style.display = "block";
    videoImgRunningTime.textContent = `${min}:${String(sec).padStart(
      2,
      "0"
    )} / 30:50`;
    if (sec >= 60) {
      min++;
      sec = 1;
    } else if (min > 31) {
      clearInterval(intervalId);
    } else {
      sec++;
    }
  }, 1000);
};

const runningTimeOut = (target) => {
  const videoImgRunningTime = target;
  videoImgRunningTime.style.display = "none";
  clearInterval(intervalId);
  min = 0;
  sec = 1;
};
