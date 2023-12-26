const InputArea = () => {
  //내가 만들려고 하는 컴포넌트 구조
  // const div = document.createElement("div");
  // const div = React.createElement("div", {});

  // // const p = document.createElement("p");
  // // p.innerHTML = "아이디";
  // const p = React.createElement("p", {}, "아이디");

  // div.appendChild(p);

  // // const input = document.createElement("input");
  // // input.type = "text";
  // const input = React.createElement("input", { type: "text" });
  // div.appendChild(input);

  // return div;
  return (
    <div>
      <p>아이디</p>
      <input type="text" />
    </div>
  );
};

const App = () => {
  // const root = document.getElementById("root");
  // root.appendChild(inputArea());

  ReactDOM.createRoot(document.getElementById("root").render(<InputArea />));
};

window.onload = () => {
  App();
};
