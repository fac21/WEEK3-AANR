const deleteButtons = document.querySelectorAll('.task__delete-Btn')
const ul= document.querySelector("ul")
console.log(ul)
function addTask(){

}

function check(item){
item.classList.toggle("completed")
console.log(item.checked)
console.log(item.classList)
return item
}


function removeToDoItem(parent){
    ul.removeChild(parent)
}
 
ul.addEventListener("click", (event) => {
    const item = event.target
    if (item.classList.contains("task__delete-Btn")){
        const parent = item.parentElement
        removeToDoItem(parent) 
        }
    if (item.classList.contains("checkbox")) {
       check(item)
    }
})
