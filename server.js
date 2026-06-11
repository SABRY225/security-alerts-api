const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const connectDB = require('./config/db');
const alertRoutes = require('./routes/alertRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// الاتصال بقاعدة البيانات
connectDB();

// Middleware لمعالجة بيانات الـ JSON
app.use(express.json());


// --- ربط المسارات (ROUTES LINKING) ---
app.use('/api/alerts', alertRoutes);

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 The server is working successfully on port: ${PORT}`);
});