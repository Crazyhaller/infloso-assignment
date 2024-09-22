const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rateLimiter = require('./middlewares/rateLimiter')
dotenv.config()

const app = express()

// Cors
app.use(cors())

// Middleware
app.use(express.json())
app.use(cookieParser())

// Apply rate limiting to all requests
app.use(rateLimiter)

// Routes
app.use('/api/auth', authRoutes, rateLimiter)

// Database connection
connectDB()

module.exports = app
