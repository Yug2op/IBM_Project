// //constants declared for input button and task list area
// const taskInput = document.querySelector('#newtask input');
// const taskSelection = document.querySelector('.tasks');
// //listner for the Enter key. Used to add a new task.
// taskInput.addEventListener("keyup", (e) => {
//     if (e.key == "Enter") { createTask(); }
// });
// //the onClick event for the "Add" button
// document.querySelector("#push").addEventListener("click", function () {
//     createTask();
// });
// //the function to create a task
// function createTask() {
//     if (taskInput.value.length == 0) {
//         alert("The task field is blank.Enter a task name and try again.");
//     }
//     else {
//         taskSelection.innerHTML += `
//         <div class="task">
//        <label id="taskname">
//     <input onclick="updateTask(this)" type="checkbox" id="check-task">
//     <p>${document.querySelector('#newtask input').value}</p>
// </label>
// <div class="delete">
//     <i class="uil uil-trash"></i>
// </div>
//         </div>
//         `
//     }
// }
// var current_task = document.querySelectorAll(".delete");
// for (var i = 0; i < current_task.length; i++) {
//     current_task[i].addEventListener('click', function () {
//         this.parentNode.remove();
//     })

// }
// function updateTask(task) {
//     let taskItem = task.parentElement.lastElementChild;
//     if (task.checked) {
//         taskItem.classList.add("checked");
//     }
// }
// Constants declared for input button and task list area
const taskInput = document.querySelector('#newtask input');
const taskSelection = document.querySelector('.tasks');

// Listener for the Enter key. Used to add a new task.
taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") { createTask(); }
});

// The onClick event for the "Add" button
document.querySelector("#push").addEventListener("click", function () {
    createTask();
});

// The function to create a task
function createTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText.length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // Create the task element with checkbox and delete icon
        taskSelection.innerHTML += `
        <div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskText}</p>
            </label>
            <div class="delete">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
        `;
        // Clear the input field after adding the task
        taskInput.value = '';
    }
}

// Event delegation for delete button clicks
taskSelection.addEventListener('click', function (e) {
    if (e.target.closest('.delete')) {
        // Find the parent task element and remove it
        e.target.closest('.task').remove();
    }
});

// Update the task status when the checkbox is clicked
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}

