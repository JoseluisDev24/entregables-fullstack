// icono de Pestaña

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
const tasksContainer = document.querySelector(".tasks-container");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = input.value;
  if (task === "") {
    alert("Please add task");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = task;

    li.appendChild(addCheckBtn());
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    li.className = "list-delete";

    input.value = "";
    noTask.style.display = "none";
  }
});

function addCheckBtn() {
  const checkBtn = document.createElement("button");
  checkBtn.classList = "btn-delete far fa-circle co";

  checkBtn.addEventListener("click", (e) => {
    const p = document.querySelector("p");

    const done = e.target.parentElement;
    ul.removeChild(done);
    tasksContainer.appendChild(done);
    checkBtn.className = "btn-delete far fa-check-circle";
    p.className = "p";

    done.className = "new-li";

    const del = document.querySelector(".btn-del");
    del.addEventListener("click", (e) => {
      const borrar = e.target.parentElement;
      tasksContainer.removeChild(borrar);
    });
  });
  return checkBtn;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete fas fa-trash de btn-del";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("#ul-form li");

    if (items.length === 0) {
      noTask.style.display = "block";
    }
  });
  return deleteBtn;
}
