// Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  let input = "ham";
  let taskNumExp = document.getElementsByClassName("tasks").length + 1;
  let actual = addTask(input);
  equal(actual.length, taskNumExp);
  equal(actual[actual.length - 1].childNodes[3].textContent, input);
});

//Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  let checkboxInput = document.querySelector("input[type='checkbox']");
  checkboxInput.checked = true;
  let checkedFn = check(checkboxInput);
  equal(checkedFn.checked, true);
  equal(checkedFn.parentElement.classList.contains("completed"), true);
});

test("Deleting an entry removes it from the list", () => {
  let expected = true;
  let listItemId = document.querySelector("li");
  removeToDoItem(listItemId);
  let ul = Array.from(document.querySelector("ul"));
  let actual = ul.every((e) => e.id != ListItemId);
  equal(actual, expected);
});

test("Deleting an entry removes it from the list", () => {
  let expected = Array.from(document.querySelectorAll("li")).length - 1;
  let listItemId = document.querySelector("li");
  removeToDoItem(listItemId);
  let actual = Array.from(document.querySelectorAll("li")).length;

  equal(actual, expected);
});

test("Integration test", () => {
  const taskInput = document.getElementById("task__input");
  const submitBtn = document.querySelector('input[type="submit"]');
  const testText = "New task to do added";

  taskInput.value = testText;
  submitBtn.click();

  const toDoList = Array.from(document.querySelectorAll(".task"));

  let expected = true;
  let actual = toDoList.some(
    (todo) => todo.childNodes[3].textContent === testText
  );

  // Delete part for next time
  equal(actual, expected);
});
