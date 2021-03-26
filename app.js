const submitBtn = document.querySelector("input[type='submit']");
const filterBtn = document.getElementById("tasks__filter");

const ul = document.querySelector("ul");

function addTask(input) {
  if (input == "") return document.querySelectorAll("li");
  const template = document.getElementById("task_item_template");
  let clone = template.content.cloneNode(true);

  ul.appendChild(clone);

  let templateListItems = document.querySelectorAll(".task");

  let lastElement = templateListItems[
    templateListItems.length - 1];

  let checkbox = lastElement.querySelector(".checkbox");

  let label = lastElement.querySelector(".task__title");
  
    label.textContent = input;

    checkbox.id = genID();

    label.htmlFor = genID();
    
  document.getElementById("task__input").value = "";

  return document.querySelectorAll("li");
}

function check(item) {
  item.parentElement.classList.toggle("completed");
  if (isFiltered()) item.parentElement.classList.toggle("hidden");
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
  const currentTodos = document.querySelectorAll(".task");

  filterBtn.classList.toggle("filtered");
  currentTodos.forEach((todo) => {
    if (todo.classList.contains("completed")) todo.classList.toggle("hidden");
  });
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if ("content" in document.createElement("template")) {
    let formData = document.querySelector("#task__input").value;
   addTask(formData);
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

function genID() {
  let templateListItems = document.querySelectorAll(".task");
  if (templateListItems.length == 1) return "task-1";
  else if (templateListItems.length > 1) {
    let base = templateListItems[templateListItems.length - 2].childNodes[1].id;
    let taskNum = parseInt(base.slice(-1)) + 1;
    let id = base.slice(0, -1) + taskNum;
    return id;
  }
}
