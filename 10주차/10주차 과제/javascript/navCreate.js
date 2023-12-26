const navIconCreate = (anchor, i, text) => {
  const anchorClass = document.createElement("a");

  const iClass = document.createElement("i");
  const p = document.createElement("p");

  anchorClass.id = anchor;
  anchorClass.className = `${anchor} navSectionLogo`;

  iClass.className = `fa-solid ${i}`;

  p.className = "navSectionText";
  p.textContent = text;

  anchorClass.appendChild(iClass);
  anchorClass.appendChild(p);

  return anchorClass;
};

const navImgCreate = (anchor, img, text) => {
  const anchorClass = document.createElement("a");

  const imgClass = document.createElement("img");
  const p = document.createElement("p");

  anchorClass.id = anchor;
  anchorClass.className = `${anchor} navSectionLogo`;

  imgClass.id = "navImg";
  imgClass.src = `./week2Img/${img}.png`;
  imgClass.alt = "유튜브 쇼츠";

  p.className = "navSectionText";
  p.textContent = text;

  anchorClass.appendChild(imgClass);
  anchorClass.appendChild(p);

  return anchorClass;
};

const navCreate = () => {
  const nav = document.createElement("nav");

  const navHomeIcon = navIconCreate("home", "fa-house", "홈");
  const navShortsIcon = navImgCreate("shorts", "shortsLogo", "Shorts");
  const navSubscriptionIcon = navImgCreate(
    "subscription",
    "subscriptionLogo",
    "Subscription"
  );
  const navLockerIcon = navIconCreate("locker", "fa-photo-film", "보관함");

  nav.className = "nav";
  nav.onmouseover = navMouseOverEvent;
  nav.onmouseout = navMouseOutEvent;

  nav.appendChild(navHomeIcon);
  nav.appendChild(navShortsIcon);
  nav.appendChild(navSubscriptionIcon);
  nav.appendChild(navLockerIcon);

  document.body.appendChild(nav);
  //forEach
};
