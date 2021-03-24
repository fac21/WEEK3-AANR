

function addTask(){
let template = document.getElementById("task_item_template");
let input =

let templateContent = template.content;
document.getElementById("ul").appendChild(templateContent);

let templateListItems = document.querySelectorAll("li");
templateListItems[templateListItems.length - 1].textContent = input;

}

document.querySelector("input[type='submit']").addEventListener("click", addTask())



