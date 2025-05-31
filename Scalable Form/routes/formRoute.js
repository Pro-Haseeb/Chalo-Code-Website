const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, message, captcha } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email required' });
  }

  try {
const user = new User({ name, email, message, captcha });
    await user.save();
    res.status(201).json({ message: 'Form submitted successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err });
  }
});

module.exports = router;
