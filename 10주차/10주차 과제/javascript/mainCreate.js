const videoImgCreate = () => {
  const videoImgDiv = document.createElement("div");

  const videoImg = document.createElement("img");

  videoImgDiv.className = "videoImgDiv";

  videoImg.id = "videoImg";
  videoImg.className = "videoImg";
  videoImg.src = "./week2Img/stageus.jpeg";
  videoImg.alt = "스테이지어스";

  const videoRunningTime = document.createElement("p");

  videoRunningTime.id = "videoRunningTime";
  videoRunningTime.className = "videoRunningTime";

  videoImgDiv.appendChild(videoImg);
  videoImgDiv.appendChild(videoRunningTime);

  return videoImgDiv;
};

const videoInfoCreate = () => {
  const videoInfo = document.createElement("div");

  const dot = document.createElement("i");
  const videoUserImg = document.createElement("img");

  const videoInfoText = document.createElement("div");
  const videoTitle = document.createElement("h1");

  const videoData = document.createElement("div");
  const videoUserName = document.createElement("p");
  const videoMetaData = document.createElement("span");

  videoInfo.className = "videoInfo";

  dot.id = "dot";
  dot.className = "fa-solid fa-ellipsis-vertical";

  videoUserImg.id = "videoUserImg";
  videoUserImg.src = "./week2Img/stageus.jpeg";
  videoUserImg.alt = "사용자 프로필";

  videoInfoText.className = "videoInfoText";

  videoTitle.className = "videoTitle";
  videoTitle.textContent = "인정받는 개발자를 만듭니다.";

  videoData.className = "videoData";

  videoUserName.className = "videoUserName";
  videoUserName.textContent = "스테이지어스";

  videoMetaData.className = "videoMetaData";
  videoMetaData.textContent = "조회수 13만회 • 1개월 전";

  videoData.appendChild(videoUserName);
  videoData.appendChild(videoMetaData);

  videoInfoText.appendChild(videoTitle);
  videoInfoText.appendChild(videoData);

  videoInfo.appendChild(dot);
  videoInfo.appendChild(videoUserImg);
  videoInfo.appendChild(videoInfoText);

  return videoInfo;
};

const mainCreate = () => {
  const main = document.createElement("main");

  main.className = "videoMain";
  main.onmouseover = mainMouseOverEvent;
  main.onmouseout = mainMouseOutEvent;

  for (let i = 0; i < 12; i++) {
    const article = document.createElement("article");
    const videoImgDiv = videoImgCreate();
    const videoInfo = videoInfoCreate();

    article.id = "videoArticle";
    article.className = "videoArticle";
    article.appendChild(videoImgDiv);
    article.appendChild(videoInfo);

    main.appendChild(article);
  }

  document.body.appendChild(main);

  //배열로 데이터도 구현
};
