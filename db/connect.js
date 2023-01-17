const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = (uri) => {
    console.log("Database connection start!!");
    return mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // autoReconnect: true,
            // reconnectTries: Number.MAX_VALUE,
            // reconnectInterval: 1000,
          
        }, console.log("Database connection sucessful!!"));

};

module.exports = connectDB;


