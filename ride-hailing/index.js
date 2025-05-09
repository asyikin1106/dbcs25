require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const rideRoutes = require('./routes/rideRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/rides', rideRoutes);

app.get('/', (req, res) => {
  res.send('Ride-Hailing API is running');
});

app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler - catches server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
