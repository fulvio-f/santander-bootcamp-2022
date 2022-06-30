var taskButton = document.getElementById('task-button');

if (taskButton) {
    taskButton.addEventListener("click", addTask);
}

function addTask() {

    var taskField = document.getElementById('task-field').value;
    var taskList = document.getElementById('task-list');
    var checkBox = document.createElement('div');

    taskBox = document.createElement('span');
    taskBox.innerHTML = taskField;
    taskBox.className = 'task-box';

    taskCheck = document.createElement('button');
    taskCheck.innerHTML = 'X';
    taskCheck.className = 'task-check';

    checkBox.appendChild(taskBox);
    checkBox.appendChild(taskCheck);
    checkBox.className = 'task';

    taskList.appendChild(checkBox);
}