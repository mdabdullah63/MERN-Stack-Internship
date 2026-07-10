const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ticket_lock_system');
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.error(`Error: ${error.message}`);

    }
};

module.exports = connectDB;
