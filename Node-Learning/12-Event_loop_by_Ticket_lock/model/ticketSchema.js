const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
  seatNumber: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['AVAILABLE', 'LOCKED', 'SOLD'],
    //enum ka use kisi field ki allowed values ko fix karne ke liye hota hai. Uske alawa koi value save nahi ho sakti
    default: 'AVAILABLE'
  },
  lockedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  lockedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

ticketSchema.index
  ({
    status: 1,
    lockedBy: 1
  });

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
