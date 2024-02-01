const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "display:flex; width:960px;max-height:480px;flex-wrap:wrap"
);

let inp = prompt("Enter a number");
for (let i = 0; i < inp; i++) {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "flex:1 1 90px; height:90px; background:black; transition: background-color 1s ;"
  );
  container.appendChild(div);
}
const divs = document.querySelectorAll("#container div");
divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
    setTimeout(() => {
      e.target.style.backgroundColor = "black";
    }, 500);
  });
});
