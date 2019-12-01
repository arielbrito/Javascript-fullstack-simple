const {Schema, model}=require('mongoose'); // Instanciamos el metodo para crear el esquema y el modelo

 const BookSchema=new Schema({// aqui creamos el modelo de datos 
    title: {type:String, required: true},
    autor: {type: String, required: true},
    isbn: {type:String, required: true},
   imagePath: {type:String, required:true},
    created_at: {type: Date, default: Date.now}
});

module.exports= model('Book', BookSchema);// aqui exportamos dicho modelo 