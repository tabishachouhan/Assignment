import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';


const nav = createNavbar();
const foot = createFooter();


document.getElementById('nav-placeholder').appendChild(nav);
document.getElementById('footer-placeholder').appendChild(foot);


const form = document.getElementById('signup-form');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


if(!name || !email || !password){alert('Please fill all fields'); return}


const users = JSON.parse(localStorage.getItem('users')||'[]');
if(users.some(u=>u.email===email)){alert('User already exists. Please login.'); location.href='login.html'; return}


users.push({name,email,password});
localStorage.setItem('users', JSON.stringify(users));
alert('Signup successful! Please login.');
location.href = 'login.html';
});