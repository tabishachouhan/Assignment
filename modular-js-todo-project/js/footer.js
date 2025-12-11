export function createFooter() {
const footer = document.createElement('div');
footer.className = 'footer';
footer.innerHTML = `&copy; ${new Date().getFullYear()} Todo Modular App`;
return footer;
}