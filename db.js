require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://localhost:27017/Mydatabase"
if (!MONGODB_URI) {
    throw new Error('MONGODB_URI not found');
}

let cached = global.mongoose || { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

module.exports = connectDB;
