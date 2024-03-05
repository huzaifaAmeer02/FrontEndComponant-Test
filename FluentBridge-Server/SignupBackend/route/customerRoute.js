const express = require('express');
const CustomerController = require('../controller/customerController');
const verifyToken = require('../middleware/AuthMiddleware');

const router = express.Router();
router.post('/save-customer',verifyToken,CustomerController.saveCustomer);
router.put('/update-customer',verifyToken,CustomerController.updateCustomer);
router.delete('/delete-customer',verifyToken,CustomerController.deleteCustomer);
router.get('/get-customer',verifyToken,CustomerController.findCustomer);
router.get('/get-all-customer',verifyToken,CustomerController.findallCustomer);

module.exports = router;