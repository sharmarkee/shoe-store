const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart);
router.get('/', ordersCtrl.getAllForUser);
router.post('/cart/shoes/:id', ordersCtrl.addCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/shoes/:id', ordersCtrl.setShoeQuantity);

module.exports = router;