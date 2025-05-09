const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  riderName: { type: String, required: true },

  // This is useful for tracking ride status more clearly
  status: {
    type: String,
    enum: ['requested', 'accepted', 'in_progress', 'completed', 'cancelled'],
    default: 'requested'
  },

  // Optional: associate the ride with a rider/user (if you add a User model later)
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }

}, { timestamps: true });

module.exports = mongoose.model('Ride', rideSchema);
