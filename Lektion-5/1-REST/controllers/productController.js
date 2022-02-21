const router = require('express').Router();
const productModel = require('../models/products/productModel');

// Get all products
// router.get('/',)

//Get one product by id
// router.get('/:id')

//create new product
router.post('/', productModel.createProduct);

// Update product
// router.patch('/:id')

//Delete product
// router.delete('/:id')



module.exports = router;