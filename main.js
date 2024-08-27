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
const pCheck = "p-checked"; // Clase para marcar la tarea como completada
const uncheck = "btn-delete far fa-circle co"; // Clase para el ícono de tarea pendiente
const checkClass = "btn-delete far fa-check-circle co"; // Clase para el ícono de tarea completada

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = input.value;
  if (task === "") {
    alert("Please add a task");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = task;

    li.appendChild(addCheckBtn());
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.prepend(li);
    li.className = "list-delete";

    input.value = "";
    noTask.style.display = "none";
  }
});

function addCheckBtn() {
  const checkBtn = document.createElement("button");
  checkBtn.classList = uncheck;

  checkBtn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    const p = li.querySelector("p");

    if (window.innerWidth < 450) {
      p.classList.toggle(pCheck);
      if (checkBtn.classList.contains("fa-check-circle")) {
        checkBtn.classList = uncheck;
      } else {
        checkBtn.classList = checkClass;
      }
      return;
    }

    if (p.classList.contains(pCheck)) {
      // Si la tarea está completada, volverla a pendiente
      p.classList.remove(pCheck);
      checkBtn.classList = uncheck;
      ul.prepend(li); // Volver a colocar la tarea al inicio
    } else {
      // Si la tarea está pendiente, marcarla como completada
      p.classList.add(pCheck);
      checkBtn.classList = checkClass;
      tasksContainer.appendChild(li); // Mover la tarea al contenedor de completadas
    }

    const items = document.querySelectorAll("#ul-form li");
    if (items.length === 0) {
      noTask.style.display = "block";
    }
  });

  return checkBtn;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete fas fa-trash de btn-del";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    item.remove();

    const items = document.querySelectorAll("#ul-form li");

    if (items.length === 0) {
      noTask.style.display = "block";
    }
  });

  return deleteBtn;
}
