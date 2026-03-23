const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const addTaskBtn = document.querySelector('#add-task-btn');

function addTask(taskText) {
  let li = document.createElement('li');
  li.classList.add('todo-item');


  const taskSpan = document.createElement('span');
  taskSpan.classList.add('task-text');
  taskSpan.textContent = taskText;

  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  
  let buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('task-buttons');

  
  let completeBtn = document.createElement('button');
  completeBtn.classList.add('complete-btn');
  completeBtn.innerHTML = '✓';
  completeBtn.title = 'Complete task';
  completeBtn.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });


  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = '✗';
  deleteBtn.title = 'Delete task';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(buttonsDiv);

  todoList.appendChild(li);
}
function handleFormSubmit() {
  let task = todoInput.value.trim();
  if (task.length > 0) {
    addTask(task);
    todoInput.value = '';
    todoInput.focus();
  }
}

addTaskBtn.addEventListener('click', handleFormSubmit);
