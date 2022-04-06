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
  console.log(data);
  return data;
};

const renderList = async () => {
  const tasks = await getTasks();
  tasks.forEach(task => {
    const taskElem = document.createElement('div');
    taskElem.innerHTML = task.text;
    taskElem.classList.add('task');
    tasksElem.appendChild(taskElem);
  });
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
  return await response.json();
});
