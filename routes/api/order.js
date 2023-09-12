const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/api/order');

router.get('/cart', orderCtrl.cart);
router.get('/user', orderCtrl.forUser);
router.post('/cart/items/:id', orderCtrl.addCart);
router.post('/cart/checkout', orderCtrl.checkout);
router.put('/cart/quantity', orderCtrl.setShoeQuantity);

module.exports = router;