const Ride = require('../models/ride');

const getAllRides = async (req, res) => {
  const rides = await Ride.find();
  res.json(rides);
};

const createRide = async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).json(newRide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ride) return res.status(404).json({ error: 'Ride not found' });
    res.json(ride);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteRide = async (req, res) => {
  const ride = await Ride.findByIdAndDelete(req.params.id);
  if (!ride) return res.status(404).json({ error: 'Ride not found' });
  res.json({ message: 'Ride deleted' });
};

module.exports = {
  getAllRides,
  createRide,
  updateRide,
  deleteRide
};

