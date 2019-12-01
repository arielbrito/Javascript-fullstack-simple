require('./styles/app.css');

import BookService from './services/BookService';

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

    console.log(title, autor, isbn, image)

    const _bookService= new BookService()
    _bookService.saveBooks(formData);

    


    e.preventDefault();
});
import { format } from 'path';
