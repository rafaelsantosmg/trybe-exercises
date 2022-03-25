const express = require('express');
const User = require('../models/User');
const validUser = require('../middlewares/validUser');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.getAll(id);
    if (users.length === 0) return res.status(404).json({ error: true, message: 'Users not found'})
    return res.status(200).json(users);
  } catch (err) {
    console.error(err)
    return res.status(500).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getById(id);
    if (user.length === 0) return res.status(404).json({ error: true, message: 'User not found'})
    return res.status(200).json(user);
  } catch (err) {
    console.error(err)
    return res.status(500).end();
  }
});

router.post('/', validUser, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const [{ insertId }] = await User.createUser(firstName, lastName, email, password);
    return res.status(201).json({ id: insertId, firstName, lastName, email, password });
  } catch (err) {
    console.error(err)
    return res.status(500).end();
  }
});

router.put('/:id', validUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const [{ insertId }] = await User.updateUser(id, firstName, lastName, email, password);
    if (insertId === 0) return res.status(404).json({ error: true, message: 'User not found'})
    return res.status(200).json({ id, firstName, lastName, email, password });
  } catch (err) {
    console.error(err)
    return res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await User.deleteUser(id);
    if (user.length === 0) return res.status(404).json({ error: true, message: 'User not found'})
    return res.status(200).end();
  } catch (err) {
    console.error(err)
    return res.status(500).end();
  }
});

module.exports = router;