const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))

router.post('/products', controllers.createProduct)
router.get('/products', controllers.getAllproduct)
router.get('/products/:sku', controllers.getProductById)
module.exports = router