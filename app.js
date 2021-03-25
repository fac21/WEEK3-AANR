if ("content" in document.createElement("template")) {
  function addTask(input) {
    let template = document.getElementById("task_item_template");
    let clone = template.content.cloneNode(true);

    let ul = document.getElementById("ul");
    ul.appendChild(clone);

    console.log(input);

    let templateListItems = document.querySelectorAll("li");
    console.log(templateListItems);
    templateListItems[
      templateListItems.length - 1
    ].childNodes[2].textContent = input;

    document.getElementById("task").value = "";

    //console.log(document.querySelectorAll("li"))
    return document.querySelectorAll("li");
  }

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let formData = document.querySelector("#task").value;
      addTask(formData);
    });
}
