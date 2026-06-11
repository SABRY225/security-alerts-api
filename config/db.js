const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/security_alerts');
    console.log(`🔌 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`);
    process.exit(1); // إيقاف السيرفر في حال فشل الاتصال
  }
};

module.exports = connectDB;