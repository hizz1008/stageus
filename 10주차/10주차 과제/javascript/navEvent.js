const navMouseOverEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  console.log(targetId);
  switch (targetId) {
    case "home":
      target.style.backgroundColor = "var(--color-f2f2f2)";
      break;
    case "shorts":
      target.style.backgroundColor = "var(--color-f2f2f2)";
      break;
    case "subscription":
      target.style.backgroundColor = "var(--color-f2f2f2)";
      break;
    case "locker":
      target.style.backgroundColor = "var(--color-f2f2f2)";
      break;
  }
};
const navMouseOutEvent = (e) => {
  const target = e.target;
  const targetId = e.target.id;
  console.log(targetId);
  switch (targetId) {
    case "home":
      target.style.backgroundColor = "var(--color-white)";
      break;
    case "shorts":
      target.style.backgroundColor = "var(--color-white)";
      break;
    case "subscription":
      target.style.backgroundColor = "var(--color-white)";
      break;
    case "locker":
      target.style.backgroundColor = "var(--color-white)";
      break;
  }
};
