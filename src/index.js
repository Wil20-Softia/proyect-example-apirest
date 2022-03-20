const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleweares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //PARA QUE EL SERVIDOR ENTIENDA LOS DATOS BASICOS DE UN FORMULARIO, NO IMAGENES, VIDEOS U ARCHIVOS.
app.use(express.json()); //PARA QUE EL SERVIDOR ENTIENDA EL FORMATO JSON

//routes
app.use(require('./routes/index'));
app.use("/api/movies",require('./routes/movies'));
app.use("/api/users",require('./routes/users'));
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
})