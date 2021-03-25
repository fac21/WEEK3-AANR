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

    document.getElementById("task__input").value = "";

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
