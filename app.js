const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* routing */
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
app.use('/',mainRouter);
app.use('/products',productsRouter);
app.use('/users',usersRouter);


/* settings */
app.use(express.static('public'));



app.listen(port,()=> console.log('Servidor corriendo en el puerto ' + port))