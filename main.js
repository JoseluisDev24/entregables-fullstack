const date = document.getElementById("span-date");
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString("en", {
  month: "short",
  day: "numeric",
});

const ul = document.getElementById("ul-form");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#button");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = input.value;
  if (task !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = task;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    li.className = "list-delete";

    input.value = "";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
  });
  return deleteBtn;
}

