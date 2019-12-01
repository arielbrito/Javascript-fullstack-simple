//Importar el modulo Router de expres para manejar las rutas
const {Router}= require('express');
const Book = require('../models/Book');
const {unlink}= require('fs-extra');
const path =require('path');

const router= Router();

router.get('/',async (req, res)=> {// Esta ruta muestra todos los objetos
   const books= await Book.find();

   res.json(books);
     
});

router.post('/', async(req, res)=>{// En esta enviamos a la base de datos los objetos con los datos correspondientes
   const {title, autor, isbn}=req.body;
   const imagePath='/upload/'+req.file.filename;

  const newBook= new Book({title, autor, isbn, imagePath});
  await newBook.save();
  console.log(newBook);
    res.json({message:'libro guardado'});


});

router.delete('/:id', async(req, res)=>{// Eliminamos un objeto

   const book= await Book.findByIdAndDelete(req.params.id);
   unlink(path.resolve('./backend/public'+ book.imagePath) );

    //console.log(req.params.id)
    res.json({message:'Libro eliminado correctamente'});

});


module.exports = router;