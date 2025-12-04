let books = [];

const IMAGE_URL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const category = document.getElementById("category").value;

    if (!title || !author) {
        alert("Please fill all fields");
        return;
    }

    const book = {
        title,
        author,
        category,
        imageUrl: IMAGE_URL
    };

    books.push(book);
    renderBooks();
}

function renderBooks(list = books) {
    const container = document.getElementById("booksContainer");
    container.innerHTML = "";

    list.forEach((book, index) => {
        container.innerHTML += `
        <div class="card">
            <img src="${book.imageUrl}" alt="Book">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <button onclick="deleteBook(${index})" style="background:red">Delete</button>
        </div>`;
    });
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

function sortAZ() {
    books.sort((a, b) => a.title.localeCompare(b.title));
    renderBooks();
}

function sortZA() {
    books.sort((a, b) => b.title.localeCompare(a.title));
    renderBooks();
}

function filterBooks() {
    const cat = document.getElementById("filterCategory").value;

    if (cat === "All") {
        renderBooks(books);
        return;
    }

    const filtered = books.filter(book => book.category === cat);
    renderBooks(filtered);
}
