const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const filterSelect = document.getElementById('filter');
const deleteCompletedButton = document.getElementById('delete-completed');

let tasks = [];

function addTask() {
  const title = newTaskInput.value;
  if (title !== '') {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    tasks.push(newTask);
    displayTasks();
    newTaskInput.value = '';
  }
}

function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    if (filterSelect.value === 'all' ||
        (filterSelect.value === 'completed' && task.completed) ||
        (filterSelect.value === 'incompleted' && !task.completed)) {
      const taskElement = document.createElement('li');
      taskElement.className = 'task';
      if (task.completed) {
        taskElement.classList.add('is-completed');
      }
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        toggleTaskCompletion(task.id);
      });
      const title = document.createElement('span');
      title.innerText = task.title;
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Eliminar';
      deleteButton.addEventListener('click', () => {
        deleteTask(task.id);
      });
      taskElement.appendChild(checkbox);
      taskElement.appendChild(title);
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);
    }
  });
}

function toggleTaskCompletion(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    displayTasks();
  }
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  displayTasks();
}

function deleteCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  displayTasks();
  displayTasks(); // llamar dos veces para actualizar el filtro
}

addTaskButton.addEventListener('click', addTask);
filterSelect.addEventListener('change', displayTasks);
deleteCompletedButton.addEventListener('click', deleteCompletedTasks);