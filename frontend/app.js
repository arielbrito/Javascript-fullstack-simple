import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI.js';


document.addEventListener('DOMContentLoaded', ()=>{
    const ui= new UI();
    ui.renderBooks();
})

document.getElementById('books-cards').addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
     
     const ui= new UI();
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Libro eliminado', 'danger', 2000);
    }
    e.preventDefault();

});


document.getElementById('book-form').addEventListener('submit', e=>{
    
    const title= document.getElementById('title').value;
    const autor =document.getElementById('autor').value;
    const isbn=document.getElementById('isbn').value;
    const image= document.getElementById('image').files;

    const formData= new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('autor', autor);
    formData.append('isbn', isbn);   

    // const ui= new UI();

    // ui.addNewBook(formData);
    // ui.renderMessage('Libro añadido correctamente','success',2000 );

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const book = new Book(title, autor, isbn);

    // Validating User Input
    if (title === '' || autor === '' || isbn === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addNewBook(formData);
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }



    e.preventDefault();
});

