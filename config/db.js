const mongoose = require('mongoose');

// connection to the database
const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    })
  .then(() => {
    console.log('DB connected successfully');
  })
  .catch((err) => {
    console.log('DB connection failed', err);
  });

}

module.exports = connectDB;

