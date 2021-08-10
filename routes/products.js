const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {add,store,detail,edit,update,destroy} = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'./public/images')
    },
    filename: (req,file,callback) => {
        callback(null,'img-phone-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage
})

/* products */
router.get('/add',add);
router.post('/add', upload.single('imagen') ,store);

router.get('/detail/:id',detail)

router.get('/edit/:id',edit);
router.put('/edit/:id',update);

router.delete('/delete/:id',destroy);




module.exports =router;