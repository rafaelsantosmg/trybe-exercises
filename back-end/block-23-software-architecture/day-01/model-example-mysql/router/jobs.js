const express = require('express');
const Jobs = require('../models/Jobs');

const router = express.Router();

router.get('/', async (_req, res) => {
  const jobs = await Jobs.getAll();
  if (!jobs) return res.status(404).json({ message: 'Jobs not exist'});
  return res.status(200).json(jobs);
})

router.get('/search', async (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ message: 'Jobs not exist'});
  const jobs = await Jobs.getById(id);
  if (!jobs || jobs.length === 0) return res.status(404).json({ message: 'job not found' });
  return res.status(200).json(jobs);
})

module.exports = router;