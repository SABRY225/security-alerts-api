const { body, validationResult } = require('express-validator');

// قواعد التحقق من المدخلات للـ Payload
const validateAlert = [
  body('threat_info.event_type').isString().notEmpty().withMessage('event_type مطلوب ويجب أن يكون نصاً'),
  body('threat_info.description').isString().notEmpty().withMessage('description مطلوب'),
  body('threat_info.source_ip').isIP().withMessage('source_ip يجب أن يكون عنوان IP صحيحاً'),
  body('threat_info.timestamp').isISO8601().withMessage('timestamp يجب أن يكون بصيغة تاريخ ISO8601 صحيحة'),
  
  body('classification.final_severity').isIn(['Low', 'Medium', 'High', 'Critical']).withMessage('الدرجة غير صحيحة (Low, Medium, High, Critical)'),
  body('classification.priority_score').isInt({ min: 1, max: 5 }).withMessage('priority_score يجب أن يكون رقماً من 1 إلى 5'),
  body('classification.was_escalated').isBoolean().withMessage('was_escalated يجب أن يكون قيمة منطقية (true/false)'),
  body('classification.escalation_note').optional().isString(),
  
  body('mitre_attck.technique_id').isString().notEmpty().withMessage('technique_id مطلوب'),
  body('mitre_attck.technique_name').isString().notEmpty().withMessage('technique_name مطلوب'),
  body('mitre_attck.tactic').isString().notEmpty().withMessage('tactic مطلوب'),
  
  body('ioc_details.is_malicious').isBoolean().withMessage('is_malicious يجب أن يكون true أو false'),
  body('ioc_details.reputation').isString().notEmpty().withMessage('reputation مطلوب'),
  body('ioc_details.provider').isString().notEmpty().withMessage('provider مطلوب'),
];

// دالة فحص نتائج التحقق وإرجاع الأخطاء إن وجدت
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = {
  validateAlert,
  handleValidationErrors
};