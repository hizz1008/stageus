headerMake();
function headerMake() {
  var header = document.querySelector(".header");
  var headerLeft = document.createElement("a");
  headerLeft.className = "headerLeft";
  headerLeft.href = "./index.html";
  var headerLeftImg = document.createElement("img");
  headerLeftImg.className = "headerLeftImg";
  headerLeftImg.src = "./image/userIcon.png";
  headerLeftImg.alt = "사용자 이미지";
  var headerLeftText = document.createElement("h1");
  headerLeftText.className = "headerLeftText";
  headerLeftText.innerHTML = "Velog";
  var headerRight = document.createElement("div");
  headerRight.className = "headerRight";
  var icon = document.createElement("i");
  icon.className = "fa-regular fa-lightbulb";

  headerLeft.appendChild(headerLeftImg);
  headerLeft.appendChild(headerLeftText);

  headerRight.append(icon);

  header.appendChild(headerLeft);
  header.appendChild(headerRight);
}
