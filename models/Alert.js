const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  threat_info: {
    event_type: { type: String, required: true },
    description: { type: String, required: true },
    source_ip: { type: String, required: true },
    timestamp: { type: Date, required: true }
  },
  classification: {
    final_severity: { type: String, required: true, enum: ['Low', 'Medium', 'High', 'Critical'] },
    priority_score: { type: Number, required: true, min: 1, max: 5 },
    was_escalated: { type: Boolean, required: true },
    escalation_note: { type: String }
  },
  mitre_attck: {
    technique_id: { type: String, required: true },
    technique_name: { type: String, required: true },
    tactic: { type: String, required: true }
  },
  ioc_details: {
    is_malicious: { type: Boolean, required: true },
    reputation: { type: String, required: true },
    provider: { type: String, required: true }
  }
}, { 
  timestamps: true // لإنشاء حقول createdAt و updatedAt تلقائياً
});

module.exports = mongoose.model('Alert', AlertSchema);