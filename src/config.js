const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/RPL");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        require: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;