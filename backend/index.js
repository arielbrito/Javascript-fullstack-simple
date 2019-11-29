//
const express = require('express');
const morgan = require('morgan');
const multer= require('multer');
const path =require('path');

//Inicializaciones:
const app= express();

//Setting/Configuraciones:

app.set('port', 3000);

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

// Iniciar el servidor:
app.listen(app.get('port'),()=>{

    console.log('Servidor corriendo en ', app.get('port'));


});