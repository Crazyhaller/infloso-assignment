const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('../utils/jwtUtils')

// @desc Register new user
// @route POST /signup
exports.signup = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    const token = jwt.generateToken(user._id)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    res.status(201).json({
      message: 'User registered successfully',
      token,
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Authenticate user
// @route POST /login
exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.generateToken(user._id)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    res.json({ message: 'Login successful', token })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

// @desc Refresh token
// @route POST /refresh-token
exports.refreshToken = async (req, res) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      ignoreExpiration: true,
    })
    const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.cookie('token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    res.json({ message: 'Token refreshed', token: newToken })
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' })
  }
}
