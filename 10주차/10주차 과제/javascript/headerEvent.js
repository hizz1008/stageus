const headerClickEvent = (e) => {
  const targetId = e.target.id;
  switch (targetId) {
    case "menuBar": {
      const navSlide = document.querySelector(".navSlide");
      navSlide.style.left = "0%";
      const backgroundDiv = document.querySelector(".backgroundDiv");
      backgroundDiv.style.display = "block";
      break;
    }
  }
};
const headerMouseOverEvent = (e) => {
  const targetId = e.target.id;
  switch (targetId) {
    case "plusIcon":
      const plusBtnAlt = document.querySelector(".plusBtnAlt");
      plusBtnAlt.style.opacity = "1";
      break;
    case "bellIcon":
      const bellBtnAlt = document.querySelector(".bellBtnAlt");
      bellBtnAlt.style.opacity = "1";
      break;
    case "voiceIcon":
      const voiceBtnAlt = document.querySelector(".voiceBtnAlt");
      voiceBtnAlt.style.opacity = "1";
      break;
    case "menuBar":
      const menuBar = document.querySelector("#menuBar");
      menuBar.style.backgroundColor = "var(--color-cccccc)";
      break;
  }
};
const headerMouseOutEvent = (e) => {
  const targetId = e.target.id;
  switch (targetId) {
    case "plusIcon":
      const plusBtnAlt = document.querySelector(".plusBtnAlt");
      plusBtnAlt.style.opacity = "0";
      break;
    case "bellIcon":
      const bellBtnAlt = document.querySelector(".bellBtnAlt");
      bellBtnAlt.style.opacity = "0";
      break;
    case "voiceIcon":
      const voiceBtnAlt = document.querySelector(".voiceBtnAlt");
      voiceBtnAlt.style.opacity = "0";
      break;
    case "menuBar":
      const menuBar = document.querySelector("#menuBar");
      menuBar.style.backgroundColor = "var(--color-white)";
      break;
  }
};
