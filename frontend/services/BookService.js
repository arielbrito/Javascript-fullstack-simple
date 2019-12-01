class BookService {

    constructor(){
        this.URI='/api/books';
    }

    async getBooks (){
     const response=  await fetch(this.URI);
     const books= await response.json();

     return books;

    }
    async saveBooks(book){
    const response=    await fetch(this.URI,{
            method: 'POST',
            body: book
        });
       const data=  await response.json();

       console.log(data);
    }

    async deleteBook(id){

    const response=  await  fetch(`${this.URI}/${id}`,{
            headers:{
                'Content-Type': 'application/json'

            },
            method:'DELETE',


        });
     const data=  await response.json()
     return data

    }

}
module.exports= BookService;