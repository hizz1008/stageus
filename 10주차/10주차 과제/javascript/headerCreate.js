// left
const leftCreate = () => {
  const left = document.createElement("section");

  left.className = "left";

  //디자인 패턴 코드 순서 수정
  const menuBar = document.createElement("i");
  const mainLogo = document.createElement("a");
  const logoImg = document.createElement("img");

  //left

  //menuBar
  menuBar.id = "menuBar";
  menuBar.className = "fa-solid fa-bars";

  //mainLogo
  mainLogo.className = "mainLogo";
  mainLogo.href = "index.html";

  //logoImg
  logoImg.id = "logoImg";
  logoImg.src = "./week2Img/mainLogo.jpg";
  logoImg.alt = "메인로고";

  //생성
  mainLogo.appendChild(logoImg);
  left.appendChild(menuBar);
  left.appendChild(mainLogo);

  return left;
};
// /left

//center
//searchBarContainer
const searchBarContainerCreate = () => {
  const searchBarContainer = document.createElement("div");

  const searchInput = document.createElement("input");
  const keybordImg = document.createElement("i");

  //searchBarContainer
  searchBarContainer.className = "searchBarContainer";

  //searchInput
  searchInput.id = "searchInput";
  searchInput.className = "searchInput";
  searchInput.type = "text";
  searchInput.placeholder = "검색";

  //keybordImg
  keybordImg.id = "keybordImg";
  keybordImg.className = "fa-solid fa-keyboard";

  //생성
  searchBarContainer.appendChild(searchInput);
  searchBarContainer.appendChild(keybordImg);

  return searchBarContainer;
};

//searchBtnContainer
const searchBtnContainerCreate = () => {
  const searchBtnContainer = document.createElement("div");

  const searchGlass = document.createElement("i");

  //searchBtnContainer
  searchBtnContainer.className = "searchBtnContainer";

  //serchBtn

  //searchGlass
  searchGlass.className = "fa-solid fa-magnifying-glass";
  searchGlass.id = "searchGlass";

  //생성
  searchBtnContainer.appendChild(searchGlass);

  return searchBtnContainer;
};

//voiceBtnContainer
const voiceBtnContainerCreate = () => {
  const voiceBtnContainer = document.createElement("div");

  const voiceIcon = document.createElement("i");
  const voiceBtnAlt = document.createElement("p");

  //voiceBtnContainer
  voiceBtnContainer.className = "voiceBtnContainer";

  //voiceIcon
  voiceIcon.id = "voiceIcon";
  voiceIcon.className = "fa-solid fa-microphone";

  voiceBtnAlt.className = "voiceBtnAlt Alt";
  voiceBtnAlt.textContent = "음성으로 검색";

  //생성
  voiceBtnContainer.appendChild(voiceIcon);
  voiceBtnContainer.appendChild(voiceBtnAlt);

  return voiceBtnContainer;
};

const centerCreate = () => {
  const center = document.createElement("section");

  const searchBarContainer = searchBarContainerCreate();
  const searchBtnContainer = searchBtnContainerCreate();
  const voiceBtnContainer = voiceBtnContainerCreate();

  center.className = "center";

  center.appendChild(searchBarContainer);
  center.appendChild(searchBtnContainer);
  center.appendChild(voiceBtnContainer);

  return center;
};
// /center

//right
const mediaSearchBarContainerCreate = () => {
  const mediaSearchBarContainer = document.createElement("div");

  const mediaGlassIcon = document.createElement("i");
  const mediaGlassIconAlt = document.createElement("p");

  mediaSearchBarContainer.className = "mediaSearchBarContainer";

  mediaGlassIcon.id = "mediaGlassIcon";
  mediaGlassIcon.className = "fa-solid fa-magnifying-glass";

  mediaGlassIconAlt.className = "mediaGlassIconAlt Alt";
  mediaGlassIconAlt.textContent = "검색";

  mediaSearchBarContainer.appendChild(mediaGlassIcon);
  mediaSearchBarContainer.appendChild(mediaGlassIconAlt);

  return mediaSearchBarContainer;
};
const plusContainerCreate = () => {
  const plusContainer = document.createElement("div");

  const plusIcon = document.createElement("i");
  const plusBtnAlt = document.createElement("p");

  plusContainer.className = "plusContainer";

  plusIcon.id = "plusIcon";
  plusIcon.className = "fa-regular fa-square-plus";

  plusBtnAlt.className = "plusBtnAlt Alt";
  plusBtnAlt.textContent = "만들기";

  plusContainer.appendChild(plusIcon);
  plusContainer.appendChild(plusBtnAlt);

  return plusContainer;
};

const bellContainerCreate = () => {
  const bellContainer = document.createElement("div");

  const bellIcon = document.createElement("i");
  const bellBtnAlt = document.createElement("p");

  bellContainer.className = "bellContainer";

  bellIcon.id = "bellIcon";
  bellIcon.className = "fa-regular fa-bell";

  bellBtnAlt.className = "bellBtnAlt Alt";
  bellBtnAlt.textContent = "알림";

  bellContainer.appendChild(bellIcon);
  bellContainer.appendChild(bellBtnAlt);

  return bellContainer;
};

const userIconContainerCreate = () => {
  const userIcon = document.createElement("i");

  userIcon.id = "userIcon";
  userIcon.className = "fa-regular fa-circle-user";

  return userIcon;
};

const rightCreate = () => {
  const right = document.createElement("section");

  const mediaSearchBarContainer = mediaSearchBarContainerCreate();

  const plusContainer = plusContainerCreate();

  const bellContainer = bellContainerCreate();

  const userIconContainer = userIconContainerCreate();

  right.className = "right";

  right.appendChild(mediaSearchBarContainer);
  right.appendChild(plusContainer);
  right.appendChild(bellContainer);
  right.appendChild(userIconContainer);
  //클래스 이름을 배열로 생성 forEach로 만드는 것이 컴포넌트 제작에 적합

  return right;
};

// /right

const headerCreate = () => {
  const header = document.createElement("header");

  const leftSection = leftCreate();
  const centerSection = centerCreate();
  const rightSection = rightCreate();

  header.id = "header";
  header.className = "header";
  header.onclick = headerClickEvent;
  header.onmouseover = headerMouseOverEvent;
  header.onmouseout = headerMouseOutEvent;

  header.appendChild(leftSection);
  header.appendChild(centerSection);
  header.appendChild(rightSection);

  document.body.appendChild(header);
};
