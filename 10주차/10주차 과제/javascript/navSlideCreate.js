const backgroundDivCreate = () => {
  const backgroundDiv = document.createElement("div");

  backgroundDiv.className = "backgroundDiv";

  return backgroundDiv;
};

const navSlideHeaderCreate = () => {
  const navSlideHeader = document.createElement("div");

  const navSlideBtn = document.createElement("i");

  const navSlideAnchorIcon = document.createElement("a");
  const mainLogo = document.createElement("img");

  navSlideHeader.className = "navSlideHeader";

  navSlideBtn.id = "navSlideBtn";
  navSlideBtn.className = "fa-solid fa-bars";

  navSlideAnchorIcon.className = "navSlideAnchorIcon";

  mainLogo.id = "navSlideLogo";
  mainLogo.src = "./week2Img/mainLogo.jpg";
  mainLogo.alt = "유튜브 메인로고";

  navSlideAnchorIcon.appendChild(mainLogo);

  navSlideHeader.appendChild(navSlideBtn);
  navSlideHeader.appendChild(navSlideAnchorIcon);

  return navSlideHeader;
};
const navSlideAnchorIconCreate = (anchorName, icon, anchorText) => {
  const anchor = document.createElement("a");

  const navSlideIcon = document.createElement("i");
  const navSlideText = document.createElement("p");

  anchor.id = "navSlideSectionLogo";
  anchor.className = anchorName;
  anchor.className = "navSlideSectionLogo";

  navSlideIcon.id = "navSlideIcon";
  navSlideIcon.className = icon;

  navSlideText.className = "navSlideSectionText";
  navSlideText.textContent = anchorText;

  anchor.appendChild(navSlideIcon);
  anchor.appendChild(navSlideText);

  return anchor;
};
const navSlideCreate = () => {
  const navSlide = document.createElement("nav");

  const backgroundDiv = backgroundDivCreate();
  const navSlideHeader = navSlideHeaderCreate();

  const navSlideHomeIconAnchorCreate = navSlideAnchorIconCreate(
    "home",
    "fa-solid fa-house",
    "홈"
  );
  const navSlideShortsIconAnchorCreate = navSlideAnchorIconCreate(
    "shorts",
    "fa-solid fa-fire-flame-simple",
    "shorts"
  );
  const navSlideSubScriptionIconAnchorCreate = navSlideAnchorIconCreate(
    "SubScription",
    "fa-solid fa-subscript",
    "구독"
  );
  const navSlideLockerIconAnchorCreate = navSlideAnchorIconCreate(
    "locker",
    "fa-solid fa-photo-film",
    "보관함"
  );

  navSlide.className = "navSlide";
  navSlide.onclick = navSlideClickEvent;
  navSlide.onmouseover = navSlideMouseOverEvent;
  navSlide.onmouseout = navSlideMouseOutEvent;

  navSlide.appendChild(navSlideHeader);
  navSlide.appendChild(navSlideHomeIconAnchorCreate);
  navSlide.appendChild(navSlideShortsIconAnchorCreate);
  navSlide.appendChild(navSlideSubScriptionIconAnchorCreate);
  navSlide.appendChild(navSlideLockerIconAnchorCreate);

  document.body.appendChild(backgroundDiv);
  document.body.appendChild(navSlide);
};
