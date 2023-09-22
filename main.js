function addTodo() {
    let todoInput = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');
    
    if (todoInput.value === '') return; 
    
    let li = document.createElement('li');
    li.textContent = todoInput.value;
  
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      todoList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    
    todoInput.value = ''; 
  }
  