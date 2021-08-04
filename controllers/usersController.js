const path = require('path');
const fs = require('fs');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));

module.exports = {
    register : (req,res) => {
        return res.render('register',{
            title : 'Registro',
            productos
        })
    },
    login : (req,res) => {
        return res.render('login',{
            title : 'Login',
            productos
        })
    }
}