document.addEventListener("DOMContentLoaded", function() {
    addTask();

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

   function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
    
    } else{
    let list = document.createElement("li");
        list.textContent = taskText;
    
     let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add = ("remove-btn");
        btn.onclick = function () {
          list.remove();
   };

   list.appendChild(btn);
    taskList.appendChild(list);
        taskInput.value = "";
}
   
 addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    } 
  
 });
  }
});


document.addEventListener('DOMContentLoaded', function() {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
 
    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}


function createTask(taskText, save = true) {
     if (taskText === "") {
        alert("Please enter a task");
        return;
     }
     let list = document.createElement("li");
        list.textContent = taskText;
    
     let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add = ("remove-btn");
        btn.onclick = function () {
          list.remove();
   };

        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});