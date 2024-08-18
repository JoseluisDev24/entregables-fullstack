const date = document.getElementById("span-date");
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString("en", {
  month: "short",
  day: "numeric",
});

const ul = document.getElementById("ul-form");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#button");
const noTask = document.querySelector(".noTask");

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
    noTask.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete fas fa-trash de";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("#ul-form li");

    if (items.length === 0) {
      noTask.style.display = "block";
    }
    console.log(items)
  });
  return deleteBtn;
}
