const { getDB } = require('../../config/db');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
  try {
    const db = getDB();
    const {
      name,
      id,
      address,
      bankAccount,
      mobile,
      email,
      password,
      role,
      salary,
      employmentType,
      attendanceType,
    } = req.body;

    // Basic validation
    if (!name || !id || !email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check for duplicate email or ID
    const existingUser = await db.collection('users').findOne({
      $or: [{ email }, { user_id: id }],
    });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.collection('users').insertOne({
      username: name,
      user_id: id,
      address,
      bankAccount,
      mobile,
      email,
      password: hashedPassword,
      employee_role: role,
      salary,
      employmentType,
      attendanceType,
      role: 'HR',
    });

    res.status(201).json({
      message: 'User added successfully',
      userId: result.insertedId,
    });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {addUser};