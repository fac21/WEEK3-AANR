if ("content" in document.createElement("template")) {
  function addTask(input) {
    let template = document.getElementById("task_item_template");
    let clone = template.content.cloneNode(true);

    let ul = document.getElementById("ul");
    ul.appendChild(clone);

    let templateListItems = document.querySelectorAll("li");

    templateListItems[
      templateListItems.length - 1
    ].childNodes[3].textContent = input;
    console.log(templateListItems)

    document.getElementById("task__input").value = "";

    templateListItems[
      templateListItems.length - 1
    ].childNodes[1].id = genID();

    templateListItems[
      templateListItems.length - 1
    ].childNodes[3].htmlFor = genID();
    
    return document.querySelectorAll("li");
  }

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let formData = document.querySelector("#task__input").value;
      if (formData !== "") addTask(formData);
    });
}

const deleteButtons = document.querySelectorAll(".task__delete-Btn");
const ul = document.querySelector("ul");

function check(item) {
  item.parentElement.classList.toggle("completed");

  return item;
}

function removeToDoItem(parent) {
  ul.removeChild(parent);
  return ul;
}

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

function genID(){
  let templateListItems = document.querySelectorAll("li");
  if (templateListItems.length == 1)return 'task-1';
  else if (templateListItems.length > 1){
    let base = templateListItems[templateListItems.length - 2].childNodes[1].id;
    let taskNum = parseInt(base.slice(-1)) + 1;
    let id = base.slice(0, -1) + taskNum;
    return id;
  }
}