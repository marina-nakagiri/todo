import "./styles.css";

//onClickAddという箱で何かアクションすると、アラートを出します。
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化します。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ
  const p = document.createElement("p");
  p.innerText = inputText;

  div.appendChild(p);
  console.log(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
