let taskArray=[];
const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    taskArray = JSON.parse(savedTasks);
}
taskArray.forEach(task => {
    createTaskElement(task);
});
function getTask(){
    const task= document.getElementById("taskInput").value;
    if (task.trim()===""){
        alert("Please enter a task!");
        return;
    }
    const id=Date.now();
    const taskObj={
        id: id,
        text: task,
        completed: false
    };

    taskArray.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    document.getElementById("taskInput").value="";
    const li=document.createElement("li");
    li.className="task-item";
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    li.appendChild(checkbox);
    const text=document.createElement("span");
    text.className="task-text";
    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
           const donelist=document.getElementById("doneList");
              donelist.appendChild(li);
              text.style.textDecoration="line-through";
              const task=taskArray.find(t=>t.id===id);
              if (task){
                  task.completed=true;
              }
              localStorage.setItem("tasks", JSON.stringify(taskArray));
        } else {
            const todolist=document.getElementById("todoList");
            todolist.appendChild(li);
            text.style.textDecoration="none";
            const task=taskArray.find(t=>t.id===id);
            if (task){
                task.completed=false;
            }
            localStorage.setItem("tasks", JSON.stringify(taskArray));
        }
    });
    text.innerText=task;
    li.appendChild(text);
    const deleteBtn=document.createElement("button");
    deleteBtn.innerText="X";
    deleteBtn.className="delete-btn";
    deleteBtn.addEventListener("click", function(){
        li.remove();
        taskArray=taskArray.filter(t=>t.id!==id);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    });
    const list=document.getElementById("todoList");
    li.appendChild(deleteBtn);
    list.appendChild(li);
    console.log(taskArray);
}


const addBtn = document.getElementById("addTaskButton");

addBtn.addEventListener("click", getTask);

function createTaskElement(taskObj) {
    const li = document.createElement("li");
    li.className = "task-item";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskObj.completed;
    const text = document.createElement("span");
    text.className = "task-text";
    text.innerText = taskObj.text;
    if (taskObj.completed) {
        text.style.textDecoration = "line-through";
    }
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            document.getElementById("doneList").appendChild(li);
            text.style.textDecoration = "line-through";
            taskObj.completed = true;
        } else {
            document.getElementById("todoList").appendChild(li);
            text.style.textDecoration = "none";
            taskObj.completed = false;
        }
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
        li.remove();
        taskArray = taskArray.filter(t => t.id !== taskObj.id);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    });
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    if (taskObj.completed) {
        document.getElementById("doneList").appendChild(li);
    } else {
        document.getElementById("todoList").appendChild(li);
    }
}