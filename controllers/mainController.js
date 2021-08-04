const fs = require('fs');
const path = require('path');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));

module.exports = {
    index : (req,res) => {
        productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));
        return res.render('index',{
            title : "Craftsy",
            productos,
        })
    },
    search : (req,res) => {
        if(req.query.busqueda){
            let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(req.query.busqueda.toLowerCase()))
            return res.render('index',{
                title : "Resultado de la búsqueda",
                productos : resultado,
                busqueda : req.query.busqueda
            })
        }
        return res.redirect('/')
       
    }
}