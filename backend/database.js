//Congirar conexion a la base de datos
const mongoose = require('mongoose');// Modulo para manejar la conexion a la base de datos 



mongoose.connect('mongodb://localhost/javascriptdb', { //Conectar a la base de datos con el metodo connect
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(db=>console.log('Base de datos conectada exitosamente'))
    .catch(err=>console.log(err));