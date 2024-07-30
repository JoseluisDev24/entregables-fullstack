const todos = [];

window.onload = () => {
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
      todoList.innerHTML +=
        "<div class='list-delete'><li class='padding-list'>" +
        todos[i] +
        "</li>" +
        "<a href='#'><img class='imagen' src='/img/delete.png' width='20px'/></a></div>";
    }
  };
};
