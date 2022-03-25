const express = require('express');
const Employees = require('../models/Employees');

const router = express.Router();

router.get('/', async (req, res) => {
  const employees = await Employees.getAll();
  return res.status(200).json(employees);
})

module.exports = router;