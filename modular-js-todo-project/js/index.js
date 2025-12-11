import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';


const nav = createNavbar();
const foot = createFooter();


document.getElementById('nav-placeholder').appendChild(nav);
document.getElementById('footer-placeholder').appendChild(foot);