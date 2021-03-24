const toDoList = document.querySelectorAll('.task__delete-Btn')


function addTask(){

}

function check(){
    
}

function removeToDoItem(event){
 console.log(event.target)
}



Array.from(toDoList).forEach(toDo=>{
    toDo.addEventListener('click',removeToDoItem)
})