export function createNavbar() {
const nav = document.createElement('nav');
nav.innerHTML = `
<div class="header-title"><a href="index.html">TodoApp</a></div>
<div class="nav-links">
<a href="index.html">Home</a>
<a href="signup.html">Signup</a>
<a href="login.html">Login</a>
<a href="todos.html">Todos</a>
</div>
`;
return nav;
}