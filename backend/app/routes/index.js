const express = require('express');
const employeesController = require('../controllers/employees');

const router = express.Router();

router.get('/company/:company_id', employeesController.getCompany);
router.get('/company/:company_id/employees', employeesController.getEmployees);
router.get('/company/:company_id/transactions', employeesController.getTransactions);

module.exports = router;