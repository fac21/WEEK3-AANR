// Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
  // test goes here
});

// Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
  // test goes here
});

// Delete things from the list if I don’t need to do them anymore

test("Deleting an entry removes it from the list", () => {
  let expected = true;
  let listItemId = "task1"; 
  removeToDoItem(listItemId);
  let ul = Array.from(document.querySelector("ul"));
  let actual = ul.every((e) => e.id != ListItemId);
  equal(actual, expected)
});

test("Deleting an entry removes it from the list", () => {
  let expected = 2; 
  let listItemId = "task1";
  removeToDoItem(listItemId);
  let actual = document.querySelector("ul").length;
  equal(actual, expected)
});

// Filter out completed to-dos from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
  // test goes here
});

