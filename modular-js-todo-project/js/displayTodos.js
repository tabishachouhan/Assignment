export function displayTodos(containerEl, todos) {
containerEl.innerHTML = '';
if (!Array.isArray(todos) || todos.length === 0) {
containerEl.innerHTML = '<li class="todo-item">No todos found</li>';
return;
}
todos.forEach(todo => {
const li = document.createElement('li');
li.className = 'todo-item';
li.innerHTML = `
<div>
<strong>#${todo.id}</strong> ${escapeHtml(todo.title)}
</div>
<div>${todo.completed ? '✅' : '⬜'}</div>
`;
containerEl.appendChild(li);
});
}


function escapeHtml(str){
return String(str).replace(/[&<>"']/g, function(s){
const map = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
return map[s];
});
}