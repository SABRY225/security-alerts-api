const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ahmedsabrymahmoud225_db_user:HRXSYsvwCgun8Svy@cluster0.p3ncc7n.mongodb.net/?appName=Cluster0');
    console.log(`🔌 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database connection error: ${error.message}`);
    process.exit(1); // إيقاف السيرفر في حال فشل الاتصال
  }
};

module.exports = connectDB;