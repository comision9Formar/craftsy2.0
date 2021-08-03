const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* manejo de formularios */

app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* routing */
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
app.use('/',mainRouter);
app.use('/products',productsRouter);
app.use('/users',usersRouter);

/* view engine */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



/* settings */
app.use(express.static('public'));



app.listen(port,()=> console.log('Servidor corriendo en el puerto ' + port))