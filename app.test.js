// Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  let input = "ham"
  let taskNumExp = document.getElementsByClassName("tasks").length + 1;
  equal(addTask(input).length, taskNumExp);
  equal(addTask(input)[addTask(input).length - 1].innerHTML, input);
});

// Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  //tick = (document.getElementById("myCheck"));
  equal(check("alistitem").checked, true);
  equal(check("alistitem").parentElement.classList.contains("completed"), true);
});

// Delete things from the list if I don’t need to do them anymore

test("Deleting an entry removes it from the list", () => {
  // test goes here
});

// Filter out completed to-dos from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
  
});