const express = require('express');
const router = express.Router();
const {
  lockTicket,
  confirmPayment,
  ShowAllTicket,
  getTicketWithUser,
  getTicketStats,
  getSoldTickets
} = require('../controllers/ticket.controller');

router.post('/lock', lockTicket);

router.post('/payment', confirmPayment);

router.get('/show', ShowAllTicket);
router.get('/stats', getTicketStats);
router.get('/ticket/:id', getTicketWithUser);
router.get('/sold', getSoldTickets);

module.exports = router;
