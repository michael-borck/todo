// Step 1 find the element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML

// Step 2 Write the behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

<<<<<<< HEAD
function onTodoListContainerClicked(event){
   var targetElement = event.toElement;
=======
function onTodoListContainerClicked(event){
   while (!targetElement.classList.contains("task")){
    targetElement = targetElement.parentElement;
   } 
   var checkbox = targetElement.querySelector(".checkbox");
   if (checkbox.checked){
    targetElement.classList.add("completed")
   } else {
    targetElement.classList.remove("completed")
   }
}
>>>>>>> 08a6a5d72041ca182dafd0e6141d5bdbf3e82826

<<<<<<< HEAD
   while (!targetElement.classList.contains("task")){
    targetElement = targetElement.parentElement;
   } 

   var checkbox = targetElement.querySelector(".checkbox");
   if (checkbox.checked){
    targetElement.classList.add("completed")
   } else {
    targetElement.classList.remove("completed")
   }
   
}


=======

>>>>>>> 08a6a5d72041ca182dafd0e6141d5bdbf3e82826
// Step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
<<<<<<< HEAD
todoListContainer.addEventListener('click', onTodoListContainerClicked);
=======
todoListContainer.addEventListener('click', onTodoListContainerClicked);

>>>>>>> 08a6a5d72041ca182dafd0e6141d5bdbf3e82826