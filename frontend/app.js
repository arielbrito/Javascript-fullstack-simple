require('./styles/app.css');

import UI from './UI';


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

    const ui= new UI();

    ui.addNewBook(formData);
    ui.renderMessage('Libro añadido correctamente','success',2000 );


    e.preventDefault();
});

