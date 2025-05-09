const express = require('express');
const router = express.Router();
const {
  getAllRides,
  createRide,
  updateRide,
  deleteRide
} = require('../controllers/rideControllers');

// GET /rides
router.get('/', getAllRides);

// POST /rides
router.post('/', createRide);

// PATCH /rides/:id
router.patch('/:id', updateRide);

// DELETE /rides/:id
router.delete('/:id', deleteRide);

module.exports = router;
