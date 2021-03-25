if ("content" in document.createElement("template")) {
  function addTask(event) {
    event.preventDefault();

    let template = document.getElementById("task_item_template");
    let clone = template.content.cloneNode(true);

    let ul = document.getElementById("ul");
    ul.appendChild(clone);

    let formData = document.querySelector("#task").value;
    console.log(formData);

    let templateListItems = document.querySelectorAll("li");
    console.log(templateListItems);
    templateListItems[
      templateListItems.length - 1
    ].childNodes[2].textContent = formData;

    document.getElementById("task").value = "";
  }

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", addTask);
}
