const express = require('express')
const router = express.Router();
const {getProducts, updateProduct,creatProduct, deleteProduct} = require('../controllers/prodectController')


router.get('/product',getProducts)
router.post('/products/', creatProduct);

router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)



module.exports = router