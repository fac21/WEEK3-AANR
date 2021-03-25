// Add tasks to a list so that I can keep track of them
// test("Submitting a new task adds it to the list", () => {
//   let input = "ham"
//   let taskNumExp = document.getElementsByClassName("tasks").length + 1;
//   let actual = addTask(input);
//   console.log(actual)
//   equal(actual.length, taskNumExp);
//   equal(actual[actual.length - 1].childNodes[2].textContent, input);
// });

//Check things off my list so that I can see what I’ve done
// test("Checking an entry marks it as complete", () => {
//   //tick = (document.getElementById("myCheck"));
//   let checkboxInput = document.querySelector("input[type='checkbox']")
//   checkboxInput.checked = true;
//   let checkedFn = check(checkboxInput);
//   console.log(checkedFn);
//   equal(checkedFn.checked, true);
//   equal(checkedFn.parentElement.classList.contains("completed"), true);
// });


// test("Deleting an entry removes it from the list", () => {
//   let expected = true;
//   let listItemId = document.querySelector("li")
//   removeToDoItem(listItemId);
//   let ul = Array.from(document.querySelector("ul"));
//   let actual = ul.every((e) => e.id != ListItemId);
//   equal(actual, expected);
// });

test("Deleting an entry removes it from the list", () => {
  let expected = Array.from(document.querySelectorAll("li")).length -1;
  let listItemId = document.querySelector("li")
  removeToDoItem(listItemId);
  console.log(expected)
  let actual =Array.from(document.querySelectorAll("li")).length 
  
  equal(actual, expected);
});

// // Filter out completed to-dos from my list so that I can focus on what’s left to do
// test("Toggling the filter hides completed tasks from the list", () => {


  
//  });

//   // test goes here

// test("Integration test", () => {
//   const taskInput = document.getElementById("task__input");
//   const submitBtn = document.querySelector('input[type="submit"]');
//   const testText = "New task to do added";

//   taskInput.value = testText;
//   submitBtn.click();

//   const toDoList = Array.from(document.querySelector("ul"));

//   let expected = true;
//   let actual = toDoList.some((todo) => todo.textContent === testText);
//   equal(actual, expected);


// });

