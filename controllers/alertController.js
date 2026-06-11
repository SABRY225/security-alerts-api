const Alert = require('../models/Alert');

/**
 * @desc    جلب جميع التنبيهات الأمنية
 * @route   GET /api/alerts
 */
exports.getAllAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * @desc    إنشاء تنبيه أمني جديد
 * @route   POST /api/alerts
 */
exports.createAlert = async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    const savedAlert = await newAlert.save();
    
    res.status(201).json({
      success: true,
      message:"The security alert has been successfully saved to the database.",
      data: savedAlert
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * @desc    حذف جميع التنبيهات الأمنية نهائياً
 * @route   DELETE /api/alerts
 */
exports.deleteAllAlerts = async (req, res) => {
  try {
    const result = await Alert.deleteMany({});
    res.status(200).json({
      success: true,
      message: "The security alerts have been successfully deleted from the database.",
      count: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};