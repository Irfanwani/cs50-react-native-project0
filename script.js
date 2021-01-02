const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let id = 0;

// Adding new todo
function newTodo() {
  const text = prompt('TODO text please!');
  if(text) {

    let li = document.createElement('li');
    li.classList.add('todo-list-item');
    li.id = id;
    li.innerHTML = `<input onClick='toggleTodo()' type="checkbox" class='check'><span> ${text} </span> <button id=${id} class='delete-btn' onClick='removeTodo(${id})'>Delete</button>`;
    list.appendChild(li);
    id++;
  }

  updateCount();
  toggleTodo();
}

// Updating different counts
function updateCount() {
  itemCountSpan.innerHTML = list.children.length;  
}

//Updating the checked-todos count
function toggleTodo() {
  let ls = [];
 document.querySelectorAll('.check').forEach(check => {
   if(!check.checked) {
      ls.push(check);
   }
 })
 uncheckedCountSpan.innerHTML = ls.length;
}

// Deleting todos
function removeTodo(todo_id) {
  document.querySelectorAll('.todo-list-item').forEach(item => {
    if(item.id == todo_id) {
      list.removeChild(item);
    }
  })
  updateCount();
  toggleTodo();
}
