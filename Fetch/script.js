
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const STORAGE_KEY = 'apiTodos';
const MAX_TODOS = 20;


const todoListContainer = document.getElementById('todo-list-container');
const fetchButton = document.getElementById('fetch-button');


async function fetchAndStoreInitialTodos() {
    try {
        
        fetchButton.textContent = 'Fetching...';
        fetchButton.disabled = true;

        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allTodos = await response.json();
        
        
        const initialTodos = allTodos.slice(0, MAX_TODOS);
        
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTodos));
        
        console.log(`Successfully fetched and stored the first ${MAX_TODOS} todos.`);

    } catch (error) {
        console.error('Failed to fetch initial todos:', error);
        alert('Could not fetch todos. Check the console for details.');
    } finally {
        
        fetchButton.textContent = 'Fetch & Store Initial Todos (Refresh)';
        fetchButton.disabled = false;
        
       
        retrieveAndRenderTodos();
    }
}


function getStoredTodos() {
    const todosJson = localStorage.getItem(STORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
}



function renderTodos(todos) {
    todoListContainer.innerHTML = ''; 

   
    if (todos.length === 0) {
        const message = document.createElement('div');
        message.className = 'empty-message';
        message.textContent = 'No Todos Available. Fetch a new list to start!';
        todoListContainer.appendChild(message);
        return;
    }

   
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
      
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        
        const textElement = document.createElement('span');
        textElement.className = 'todo-item-text';
       
        const statusText = todo.completed ? '[COMPLETED] ' : '[PENDING] ';
        textElement.textContent = statusText + todo.title;

        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-btn';
        toggleButton.textContent = todo.completed ? 'Mark Pending' : 'Mark Complete';
        toggleButton.onclick = () => toggleTodoStatus(todo.id); 

       
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTodo(todo.id); 

        actionsDiv.appendChild(toggleButton);
        actionsDiv.appendChild(deleteButton);

        todoItem.appendChild(textElement);
        todoItem.appendChild(actionsDiv);
        
        todoListContainer.appendChild(todoItem);
    });
}


function retrieveAndRenderTodos() {
    const currentTodos = getStoredTodos();
    renderTodos(currentTodos);
}



function deleteTodo(todoId) {
    
    const currentTodos = getStoredTodos();
    
   
    const updatedTodos = currentTodos.filter(todo => todo.id !== todoId);
    
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    
    console.log(`Todo with ID ${todoId} deleted.`);

    
    renderTodos(updatedTodos); 
}



function toggleTodoStatus(todoId) {
    
    const currentTodos = getStoredTodos();

    
    const updatedTodos = currentTodos.map(todo => {
        if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed }; 
        }
        return todo;
    });

   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
    
    console.log(`Todo with ID ${todoId} status toggled.`);

    
    renderTodos(updatedTodos); 
}



fetchButton.addEventListener('click', fetchAndStoreInitialTodos);


document.addEventListener('DOMContentLoaded', retrieveAndRenderTodos);