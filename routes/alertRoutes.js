const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');
const { validateAlert, handleValidationErrors } = require('../middlewares/validator');
router.route('/')
  .get(alertController.getAllAlerts)
  .post(validateAlert, handleValidationErrors, alertController.createAlert)
  .delete(alertController.deleteAllAlerts);

module.exports = router;