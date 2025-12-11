import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { displayTodos } from './displayTodos.js';

const nav = createNavbar();
const foot = createFooter();

document.getElementById('nav-placeholder').appendChild(nav);
document.getElementById('footer-placeholder').appendChild(foot);

// check login
const logged = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
if (!logged) {
  alert('Please login to view todos');
  location.href = 'login.html';
}

const todosEl = document.getElementById('todos');
const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  location.href = 'login.html';
});


// ⭐⭐⭐ THIS IS WHERE YOU WRITE THE FETCH CODE ⭐⭐⭐
// Fetch todos from the given API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    displayTodos(todosEl, data.slice(0, 20));  // show first 20
  })
  .catch(error => {
    console.error(error);
    todosEl.innerHTML = '<li>Failed to load todos</li>';
  });
