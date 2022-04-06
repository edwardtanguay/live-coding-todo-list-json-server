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

const getTasks = () => {
  return [
    {
      text: "task 1"
    },
    {
      text: "task 2"
    }
  ]
};

const renderList = () => {
  const tasks = getTasks();
  tasks.forEach(task => {
    const taskElem = document.createElement('div');
    taskElem.innerHTML = task.text;
    taskElem.classList.add('task');
    tasksElem.appendChild(taskElem);

  });
}


renderList();

