import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';


const nav = createNavbar();
const foot = createFooter();


document.getElementById('nav-placeholder').appendChild(nav);
document.getElementById('footer-placeholder').appendChild(foot);


const form = document.getElementById('login-form');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


const users = JSON.parse(localStorage.getItem('users')||'[]');
const user = users.find(u=>u.email===email && u.password===password);
if(!user){alert('Invalid credentials'); return}


localStorage.setItem('loggedInUser', JSON.stringify({email:user.email,name:user.name}));
// redirect to todos
location.href='todos.html';
});