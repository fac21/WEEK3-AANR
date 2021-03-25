const submitBtn = document.querySelector("input[type='submit']");
const filterBtn = document.getElementById("tasks__filter");

const ul = document.querySelector("ul");

function addTask(input) {
  const template = document.getElementById("task_item_template");
  let clone = template.content.cloneNode(true);

  ul.appendChild(clone);

  let templateListItems = document.querySelectorAll("li");

  templateListItems[
    templateListItems.length - 1
  ].childNodes[3].textContent = input;

  document.getElementById("task__input").value = "";

  return document.querySelectorAll("li");
}

function check(item) {
  item.parentElement.classList.toggle("completed");
  if (isFiltered()) item.parentElement.classList.toggle("hide");
  return item;
}

function removeToDoItem(parent) {
  ul.removeChild(parent);
  return ul;
}

function isFiltered() {
  return filterBtn.classList.contains("filtered");
}

function filterTasks() {
  const currentTodos = document.querySelectorAll("li");

  filterBtn.classList.toggle("filtered");
  currentTodos.forEach((todo) => {
    if (todo.classList.contains("completed")) todo.classList.toggle("hide");
  });
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if ("content" in document.createElement("template")) {
    let formData = document.querySelector("#task__input").value;
    if (formData !== "") addTask(formData);
  }
});

filterBtn.addEventListener("click", filterTasks);

ul.addEventListener("click", (event) => {
  const item = event.target;
  if (item.classList.contains("task__delete-Btn")) {
    const parent = item.parentElement;
    removeToDoItem(parent);
  }
  if (item.classList.contains("checkbox")) {
    check(item);
  }
});
