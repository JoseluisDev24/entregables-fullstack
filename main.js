const date = document.getElementById("span-date");
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString("en", {
  // weekday: "short",
  month: "short",
  day: "numeric",
});

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id = 0

function addTask(task,id,done,removed) {

  if(removed){
    return
  }

  const DONE = done ? check : uncheck;
  const line = done ? lineThrough : '';
  
  const element = `<li id="element">
                <i class="ico far ${DONE} co" data="done" id='${id}'></i>
                <p class="${line}text">${task}</p>
                <i class="ico fas fa-trash de" data="removed" id='${id}'></i>
              </li>`;
  list.insertAdjacentHTML("beforeend", element);
}

button.addEventListener("click", () => {
  const task = input.value;
  if (task) {
    addTask(task,id,false,false);
  }
  input.value = "";
  id++
});

document.addEventListener("keyup",function (event) {
  if (event.key === "Enter") {
    const task = input.value
    if (task) {
      addTask(task);
    }
    input.value = "";
  }
});

// list.addEventListener('click', function (event){
//   const element = event.target
//   const elementData = element.attributes.data.value
//   if(elementData === "done"){
//     taskDone();
//     else if(elementData==='removed'){
// taskRemoved();
//     }
//   }
// })