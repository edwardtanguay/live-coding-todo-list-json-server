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

const renderList = () => {
  const taskElem = document.createElement('div');
  console.log(taskElem);
  taskElem.innerHTML = 'this is a task';
  taskElem.classList.add('task');
  tasksElem.appendChild(taskElem);
}


renderList();

