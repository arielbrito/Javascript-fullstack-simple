if (process.env.NODE_ENV=='development'){
    require('dotenv').config();

}

//Instanciar los objetos y librerias 
const express = require('express');
const morgan = require('morgan');
const multer= require('multer');
const path =require('path'); // modulo para manejar directorios y archivos 

const cors=require('cors');


//Inicializaciones:
const app= express();
require('./database');

//Setting/Configuraciones:

app.set('port',process.env.PORT || 3000);

//Middlewares:
app.use(morgan('dev'));

//Esta libreria es para el manejo de la subida de imagenes 
const storage= multer.diskStorage({
    destination: path.join(__dirname,'./public/upload'), // aqui se define la ubicación en donde se va a guardar la imagen 
    //Aqui definimos el nombre del archivo y extraemos la extension del mismo 
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));}
});
app.use(multer({storage}).single('image'));

//******************************** */

// Convertir los datos recibidos del frontend en un JSON
app.use(express.urlencoded({extendedÇ:false}));
app.use(express.json());

//CORS
app.use(cors());


//Routes
 app.use('/api/books',require('./routes/book')); // Aqui enviamos las rutas

 //Static files
 app.use(express.static(path.join(__dirname,'public')));

// Iniciar el servidor:
app.listen(app.get('port'),()=>{

    console.log('Servidor corriendo en ', app.get('port'));


});