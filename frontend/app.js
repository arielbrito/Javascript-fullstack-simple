require('./styles/app.css');

import UI from './UI';


document.addEventListener('DOMContentLoaded', ()=>{
    const ui= new UI();
    ui.renderBooks();
})


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


    e.preventDefault();
});

