const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Modules import
const connectDB = require('./config.js');
const userRoutes = require('./routes/user.route.js');

dotenv.config();

const app = express();

// middleware setup
app.use(cors());
app.use(express.json());

// connecting to database
connectDB();

// Paths
app.use('/api/v1/auth',userRoutes);

app.listen(
    process.env.PORT || 5000,
    () => console.log(`Server running on port ${process.env.PORT}`)
);

