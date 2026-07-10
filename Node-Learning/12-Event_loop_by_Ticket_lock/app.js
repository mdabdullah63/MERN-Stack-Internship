const express = require('express');
const connectDB = require('./config/db.js');
const router=require('./routes/ticket.route.js')

const app = express();

app.use(express.json());
connectDB();

app.use('/api/tickets', router)



const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
