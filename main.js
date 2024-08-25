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
const pCheck = "p";
const uncheck = "btn-delete far fa-check-circle";

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
    ul.prepend(li);
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

    if (window.innerWidth < 450) {
      p.classList.toggle(pCheck);
      checkBtn.classList = uncheck;

      return;
    }

    const done = e.target.parentElement;
    done.remove();

    tasksContainer.appendChild(done);

    checkBtn.className = "btn-delete far fa-check-circle";

    p.className = "p";

    done.className = "new-li";

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

// text-decoration: line-through
// // ul.appendChild(li);
//     ul.prepend(li);
// // ul.removeChild(item);
//     item.remove();
// Víctor Rosano
// 10:34 p.m.
// addCheckBtn()

// console.log(window.innerWidth);
//     if (window.innerWidth < 450) {
//       // Cambiar estilo a completado

//       return;
//     }
// despues del const p = document....
// Víctor Rosano
// 10:37 p.m.
// position: fixed
// right: 0
// position: fixed
// left: 0
