import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Todo App</h1>
<form>
  <div class="row">
    <input class="text" type="text" /> 
    <button class="btnAdd">Add Item</button>
  </div>
  <div class="tasks"></div>
</form>
`;

const textElem = document.querySelector('.text');
const btnAddElem = document.querySelector('.btnAdd');
const tasksElem = document.querySelector('.tasks');

const getTasks = async () => {
  const response = await fetch('http://localhost:5011/todos');
  const data = await response.json();
  return data;
};

const renderList = async () => {
  tasksElem.innerHTML = '';
  const tasks = await getTasks();
  tasks.forEach(task => {

    const taskElem = document.createElement('div');
    taskElem.setAttribute('data-id', task.id);
    taskElem.setAttribute('data-finished', task.finished);
    taskElem.innerHTML = `
   <input type="checkbox" class="toggleFinished"/> 
   <div>${task.text}</div>
   <button class="btnDelete">delete</button>
    `;
    taskElem.classList.add('task');
    tasksElem.appendChild(taskElem);
  });
  textElem.value = '';
  textElem.focus();

  // delete button events
  const deleteButtonElems = document.querySelectorAll('.btnDelete');
  deleteButtonElems.forEach(m => m.addEventListener('click', async (e) => {
    e.preventDefault();
    const currentTaskElem = m.parentElement;
    const currentId = currentTaskElem.dataset.id;
    const requestOptions = {
      method: 'DELETE'
    };
    const response = await fetch(`http://localhost:5011/todos/${currentId}`, requestOptions);
    renderList();
  }));

  // checkbox events
  const checkboxElems = document.querySelectorAll('.toggleFinished');
  checkboxElems.forEach(m => m.addEventListener('change', async () => {
    const currentTaskElem = m.parentElement;
    const currentId = currentTaskElem.dataset.id;
    const currentFinished = currentTaskElem.dataset.finished === 'true' ? true : false;
    const requestOptions = {
      method: 'PATCH',
      body: JSON.stringify({ finished: !currentFinished}),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    const response = await fetch(`http://localhost:5011/todos/${currentId}`, requestOptions);
    renderList();
  }));



};

renderList();

btnAddElem.addEventListener('click', async (e) => {
  e.preventDefault();

  const newTodo = {
    "text": textElem.value,
    "finished": false
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  };
  const response = await fetch('http://localhost:5011/todos', requestOptions);
  renderList();
});
