const navSlideClickEvent = (e) => {
  const targetId = e.target.id;
  switch (targetId) {
    case "navSlideBtn":
      const navSlide = document.querySelector(".navSlide");
      navSlide.style.left = "-100%";
      const backgroundDiv = document.querySelector(".backgroundDiv");
      backgroundDiv.style.display = "none";
      break;
  }
};
const navSlideMouseOverEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  switch (targetId) {
    case "navSlideBtn":
      target.style.backgroundColor = "var(--color-cccccc)";
      target.style.borderRadius = "50%";
      break;
    case "navSlideSectionLogo":
      const navSlideSectionLogo = target;
      navSlideSectionLogo.style.backgroundColor = "var(--color-f2f2f2)";
      break;
  }
};
const navSlideMouseOutEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  console.log(targetId);
  switch (targetId) {
    case "navSlideBtn":
      target.style.backgroundColor = "inherit";
      target.style.borderRadius = "0%";
      break;
    case "navSlideSectionLogo":
      const navSlideSectionLogo = target;
      navSlideSectionLogo.style.backgroundColor = "inherit";
      break;
  }
};
