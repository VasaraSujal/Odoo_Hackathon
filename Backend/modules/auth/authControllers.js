const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './auth.env' });
const { getDB } = require('../../config/db');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

const login = async (req, res) => {
  const db = getDB();
  const { username, password, id } = req.body;
console.log('Login attempt:', { username, id,password });
  if (!username || !password || !id)
    return res.status(400).json({ message: 'All fields required' });
 
  const user = await db.collection('users').findOne({ username });
  console.log('User found:', user);
  console.log('user password is',user.password)
  console.log('Password we get is',password)
  const isMatch = password ? password==user.password: false;
  console.log('Password match:', isMatch);
  if (!user || !isMatch || user.user_id !== id)
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      username: user.username,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({
    message: '✅ Login successful',
    token,
    user: {
      id: user.user_id,
      username: user.username,
      email: user.email,
      role: user.role.toLowerCase(),
    },
  });
};

module.exports = { login };
