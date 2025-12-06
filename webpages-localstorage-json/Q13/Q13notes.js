
const STORAGE_KEY = 'userNotes'; 

const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');
const clearBtn = document.getElementById('clearBtn');
const messageDisplay = document.getElementById('message');

function showMessage(msg, color = 'green') {
    messageDisplay.textContent = msg;
    messageDisplay.style.color = color;
    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 3000); 
}


function saveNotes() {
    const notes = noteInput.value.trim(); 
    
    if (notes === "") {
        showMessage("Cannot save an empty note!", 'red');
        return;
    }

   
    localStorage.setItem(STORAGE_KEY, notes);
    showMessage("Notes saved successfully!");
}


function loadNotes() {
    
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    
    if (savedNotes !== null) {
        
        noteInput.value = savedNotes;
        showMessage("Notes loaded from local storage.");
    } else {
        noteInput.value = ""; 
        showMessage("No saved notes found.", 'orange');
    }
}


function clearNotes() {
    
    localStorage.removeItem(STORAGE_KEY);
    noteInput.value = ""; 
    showMessage("Notes cleared from local storage.");
}

saveBtn.addEventListener('click', saveNotes);
loadBtn.addEventListener('click', loadNotes);
clearBtn.addEventListener('click', clearNotes);


document.addEventListener('DOMContentLoaded', loadNotes);