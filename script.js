document.addEventListener("DOMContentLoaded", function() {
    addTask();

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

   function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Please enter a task.");
    
    } else{
    let li = document.createElement("li");
        li.textContent = taskText;
    
     let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.className = "remove-btn";
        btn.onclick = function () {
          li.remove();
   };

   li.appendChild(btn);
    taskList.appendChild(li);
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
