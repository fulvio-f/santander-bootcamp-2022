var taskButton = document.getElementById('task-button');

if (taskButton) {
    taskButton.addEventListener("click", addTask);
}

function addTask() {

    let taskField = document.getElementById('task-field').value;
    let taskList = document.getElementById('task-list');
    let checkBox = document.createElement('div');

    taskBox = document.createElement('span');
    taskBox.innerHTML = taskField;
    taskBox.classList.add('task-box');

    taskCheck = document.createElement('button');
    taskCheck.innerHTML = '✓';
    taskCheck.classList.add('task-check');

    checkBox.appendChild(taskBox);
    checkBox.appendChild(taskCheck);
    checkBox.classList.add('task');

    taskList.appendChild(checkBox);
}