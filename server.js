const express = require('express');
const connectDB = require('./db');
const app = express();

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
