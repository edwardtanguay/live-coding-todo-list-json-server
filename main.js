import './style.css'

const textElem = document.querySelector('.text');
const btnAddElem = document.querySelector('.btnAdd');
const tasksElem = document.querySelector('.tasks');

const renderList = () => {
  
}

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


