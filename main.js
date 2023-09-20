function addTodo() {
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
    
    if (todoInput.value === '') return; // Don't add empty todos
    
    var li = document.createElement('li');
    li.textContent = todoInput.value;
  
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      todoList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
    todoList.appendChild(li);
    
    todoInput.value = ''; 
  }
  