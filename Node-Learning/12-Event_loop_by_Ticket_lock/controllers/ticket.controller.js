const Ticket = require('../model/ticketSchema');
const User = require("../model/userSchema")
async function lockTicket(req, res) {
  console.log("Lock ticket is executed: ");
  try {
    // console.log("enter seatNumber and ID ")// humara form me aajayega
    const { seatNumber, userId } = req.body;
    console.log(`Request received in Call Stack: User ${userId} wants to lock ${seatNumber}`);
    const lockedTicket = await Ticket.findOneAndUpdate(
      { seatNumber: seatNumber, status: 'AVAILABLE' },
      {
        status: 'LOCKED',
        lockedBy: userId,
        lockedAt: new Date()
      },
      //{ new: true } same meaning iske baad wala doc retun karta hai
      { returnDocument: "after" }
    );

    if (!lockedTicket) {
      console.log("Microtask executed ")
      console.log("Task 2 ");
      console.log(`Booking Failed: ${seatNumber} is already locked `);
      return res.status(400).json({ message: "Sorry, this seat is no longer available" });
    }

    res.status(200).json({
      message: `Seat temporary locked. You have 30 seconds to pay ${lockedTicket.price}`,
      ticket: lockedTicket

    });
    console.log("Microtask executed ")
    console.log(`Success: ${seatNumber} locked for user ${userId} Response sent`);

    setTimeout(async () => {
      console.log("Macrotask executed ")
      console.log(` Timer finished for ${seatNumber}. Verification starts.`);
      try {
        const currentTicket = await Ticket.findOne({ seatNumber: seatNumber });
        if (currentTicket && currentTicket.status === 'LOCKED') {
          currentTicket.status = 'AVAILABLE';
          currentTicket.lockedBy = null;
          currentTicket.lockedAt = null;
          await currentTicket.save();
          console.log(`Macrotask Session Expired for: ${seatNumber} is now AVAILABLE again`);
        } else {
          console.log(`Macrotask No Action:
             ${seatNumber} status is
              ${currentTicket ? currentTicket.status :
             'UNKNOWN'}. Keeping state.`);
        }
      } catch (timeoutError) {
        console.error(`Macrotask Error Background release failed for ${seatNumber}:`, timeoutError.message);
      }
    }, 30000);

  } catch (error) {
    console.error("Error in lockTicket:", error.message);
    res.status(500).json({ error: error.message });
  }
}

async function confirmPayment(req, res) {
  try {
    const { seatNumber, userId } = req.body;

    const soldTicket = await Ticket.findOneAndUpdate(
      { seatNumber: seatNumber, lockedBy: userId, status: 'LOCKED' },
      { status: 'SOLD' },
      { new: true }
    );

    if (!soldTicket) {
      console.log(`Payment Failed session expired or wrong details for ${seatNumber} by user ${userId}`);
      return res.status(400).json({ message: "Payment Failed session expired or wrong details" });
    }

    res.status(200).json({ message: " Payment Successful! Your ticket is confirmed.", ticket: soldTicket });
    console.log(`Ticket ${seatNumber} permanently SOLD to ${userId}.`);

  } catch (error) {
    console.error("Error in confirmPayment:", error.message);
    res.status(500).json({ error: error.message });
  }
}

async function ShowAllTicket(req, res) {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
}

async function getTicketWithUser(req, res) {
  try {
    const { id } = req.params;
    // console.log("ID: ",id);
    const ticket = await Ticket.findById(id)
      .populate("lockedBy", "name email");
      console.log("ticket: ", ticket);
    res.status(200).json(ticket);
    // const ticket = await User.findById(id);
    // res.status(200).json({
    //   ticket
    // })


  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function getTicketStats(req, res) {
  try {
    const stats = await Ticket.aggregate([
      {
        $match: {
          status: { $in: ['SOLD', 'LOCKED'] }
        }
      },
      {
        $group: {
          _id: "$status",
          totalTickets: { $sum: 1 },
          totalRevenue: { $sum: "$price" }
        }
      },
      {
        $project: {
          _id: 0,
          status: "$_id",
          totalTickets: 1,
          totalRevenue: 1
        }
      }
    ]);
    // console.log(stats)

    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getSoldTickets(req, res) {
  try {
  const tickets = await Ticket.aggregate([
  {
    // match ka use hum data ko filter karne ke liye karte hain
    // Pura database me se sirf wahi tickets aage jayenge jinka status  sold  hai
    $match: { status: 'SOLD' }
  },
  {
    //lookup ka use hum do collections tables ke beech me JOIN karne ke liye karte hain
    $lookup: {
      from: 'users',
      localField: 'lockedBy',
      foreignField: '_id',
      as: 'buyerDetails'
    }
  },
  {
    $unwind: '$buyerDetails'
  },
  {
    // unwind lookup se mile array ke brackets ko tod kar use ek normal object bana deta hai.
    // project: Client ko sirf selected fields 1 ka matlab dikhao bhejta hai aur baaki sab hide kar deta hai.
    $project: {
      seatNumber: 1,
      price: 1,
      'buyerDetails.name': 1,
      'buyerDetails.email': 1
    }
  }
]);
    res.status(200).json(tickets);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  lockTicket,
  confirmPayment,
  ShowAllTicket,
  getTicketWithUser,
  getTicketStats,
  getSoldTickets
};
