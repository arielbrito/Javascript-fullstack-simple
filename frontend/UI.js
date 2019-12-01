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
       div.className='animated fadeInRight';
       div.innerHTML=`
          <div class="card m-2">
              <div class="row no-gutters">
                  <div class="col-md-4">
                      <img src="${book.imagePath}" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-8">
                      <div class="card-block px-2">
                          <h1 class="card-title">${book.title}</h1>
                          <p  class="card-text">${book.autor}</p>
                          <a href="#" class="btn btn-danger delete" _id="${book._id}">x</a>
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
      this.renderBooks();
      this.clearBookForm();

    }
    clearBookForm(){
        document.getElementById('book-form').reset();
        document.getElementById('title').focus();

    }

    renderMessage(message, colorMessage, secondsToRemove){
      const div=  document.createElement('div');

        div.className=`alert alert-${colorMessage} message `;

        const container= document.querySelector('.col-md-4');
        const bookForm= document.querySelector('#book-form');
        div.appendChild(document.createTextNode(message));

        container.insertBefore(div, bookForm);
        setTimeout(()=>{
            document.querySelector('.message').remove();

        }, secondsToRemove);



    }

    async deleteBook(id){
        await _bookService.deleteBook(id);
        this.renderBooks();


    }

}
export default UI;