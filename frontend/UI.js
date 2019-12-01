import BookService from './services/BookService';

const _bookService= new BookService;

import {format} from 'timeago.js'


class  UI {

    

   async renderBooks(){
     const books =await _bookService.getBooks();
     const booksCardContainer= document.getElementById('books-cards');
     booksCardContainer.innerHTML=``;

     books.forEach(book =>{
       const div=  document.createElement('div');

       div.className='';

       div.innerHTML=`
          <div class="card m-2">
              <div class="row">
                  <div class="col-md-4">
                      <img src="http://localhost:3000${book.imagePath}" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-8">
                      <div class="card-block px-2">
                          <h1 class="card-title">${book.title}</h1>
                          <p  class="card-text">${book.autor}</p>
                          <a href="#" class="btn btn-danger delete" _id=" ${book._id}">x</a>
                      </div>
                  </div>
                  <div class="card-footer">
                      <p> ${ format(book.created_at)} </p>
                  </div>
              </div>

          </div>
       
       `;
       booksCardContainer.appendChild(div);

     });
   

    }

   async addNewBook(book){
      await  _bookService.saveBooks(book);
      this.clearBookForm();
      this.renderBooks();

    }
    clearBookForm(){
        document.getElementById('book-form').reset();

    }

    renderMessage(){

    }

    deleteBook(){

    }

}
export default UI;