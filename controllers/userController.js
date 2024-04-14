const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.register(username, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.login(username, password);
    const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
};
