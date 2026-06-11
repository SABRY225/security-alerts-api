# Security Alerts API Documentation

## Base URL

```http
https://security-alerts-api.vercel.app/api
```

---

# GET All Security Alerts

Retrieve all security alerts stored in the database.

## Endpoint

```http
GET /alerts
```

## Full URL

```http
GET https://security-alerts-api.vercel.app/api/alerts
```

## Success Response

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "threat_info": {
        "event_type": "brute_force_login",
        "description": "Multiple failed SSH login attempts detected.",
        "source_ip": "192.168.1.105",
        "timestamp": "2026-06-11T14:23:01.000Z"
      },
      "classification": {
        "final_severity": "High",
        "priority_score": 3,
        "was_escalated": true,
        "escalation_note": "Auto-escalated from 'Low' to 'High' due to event_type keyword match: 'brute_force_login'."
      },
      "mitre_attck": {
        "technique_id": "T1110",
        "technique_name": "Brute Force",
        "tactic": "Credential Access"
      },
      "ioc_details": {
        "is_malicious": true,
        "reputation": "malicious",
        "provider": "VirusTotal"
      },
      "_id": "6a2abf3e8c728a5fab48bfc5",
      "createdAt": "2026-06-11T13:59:26.314Z",
      "updatedAt": "2026-06-11T13:59:26.314Z",
      "__v": 0
    }
  ]
}
```

---

# POST Create Security Alert

Create a new security alert.

## Endpoint

```http
POST /alerts
```

## Full URL

```http
POST https://security-alerts-api.vercel.app/api/alerts
```

## Request Body

```json
{
  "threat_info": {
    "event_type": "brute_force_login",
    "description": "Multiple failed SSH login attempts detected.",
    "source_ip": "192.168.1.105",
    "timestamp": "2026-06-11T14:23:01Z"
  },
  "classification": {
    "final_severity": "High",
    "priority_score": 3,
    "was_escalated": true,
    "escalation_note": "Auto-escalated from 'Low' to 'High' due to event_type keyword match: 'brute_force_login'."
  },
  "mitre_attck": {
    "technique_id": "T1110",
    "technique_name": "Brute Force",
    "tactic": "Credential Access"
  },
  "ioc_details": {
    "is_malicious": true,
    "reputation": "malicious",
    "provider": "VirusTotal"
  }
}
```

## Success Response

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "threat_info": {
        "event_type": "brute_force_login",
        "description": "Multiple failed SSH login attempts detected.",
        "source_ip": "192.168.1.105",
        "timestamp": "2026-06-11T14:23:01.000Z"
      },
      "classification": {
        "final_severity": "High",
        "priority_score": 3,
        "was_escalated": true,
        "escalation_note": "Auto-escalated from 'Low' to 'High' due to event_type keyword match: 'brute_force_login'."
      },
      "mitre_attck": {
        "technique_id": "T1110",
        "technique_name": "Brute Force",
        "tactic": "Credential Access"
      },
      "ioc_details": {
        "is_malicious": true,
        "reputation": "malicious",
        "provider": "VirusTotal"
      },
      "_id": "6a2abf3e8c728a5fab48bfc5",
      "createdAt": "2026-06-11T13:59:26.314Z",
      "updatedAt": "2026-06-11T13:59:26.314Z",
      "__v": 0
    }
  ]
}
```

---

# DELETE All Security Alerts

Delete all security alerts from the database.

## Endpoint

```http
DELETE /alerts
```

## Full URL

```http
DELETE https://security-alerts-api.vercel.app/api/alerts
```

## Success Response

```json
{
  "success": true,
  "message": "The security alerts have been successfully deleted from the database.",
  "count": 1
}
```

---

# Data Models

## threat_info

| Field | Type | Required | Description |
|---------|---------|---------|---------|
| event_type | string | Yes | Type of security event |
| description | string | Yes | Detailed threat description |
| source_ip | string | Yes | Source IP address |
| timestamp | datetime | Yes | Event occurrence timestamp |

### Example

```json
{
  "event_type": "brute_force_login",
  "description": "Multiple failed SSH login attempts detected.",
  "source_ip": "192.168.1.105",
  "timestamp": "2026-06-11T14:23:01Z"
}
```

---

## classification

| Field | Type | Required | Description |
|---------|---------|---------|---------|
| final_severity | string | Yes | Final severity level |
| priority_score | number | Yes | Priority score |
| was_escalated | boolean | Yes | Escalation status |
| escalation_note | string | No | Escalation details |

### Example

```json
{
  "final_severity": "High",
  "priority_score": 3,
  "was_escalated": true,
  "escalation_note": "Auto-escalated from 'Low' to 'High'."
}
```

---

## mitre_attck

| Field | Type | Required | Description |
|---------|---------|---------|---------|
| technique_id | string | Yes | MITRE ATT&CK Technique ID |
| technique_name | string | Yes | Technique Name |
| tactic | string | Yes | ATT&CK Tactic |

### Example

```json
{
  "technique_id": "T1110",
  "technique_name": "Brute Force",
  "tactic": "Credential Access"
}
```

---

## ioc_details

| Field | Type | Required | Description |
|---------|---------|---------|---------|
| is_malicious | boolean | Yes | Malicious indicator |
| reputation | string | Yes | Reputation result |
| provider | string | Yes | Intelligence provider |

### Example

```json
{
  "is_malicious": true,
  "reputation": "malicious",
  "provider": "VirusTotal"
}
```

---

# Error Responses

## 400 Bad Request

```json
{
  "success": false,
  "message": "Invalid request payload"
}
```

## 404 Not Found

```json
{
  "success": false,
  "message": "Resource not found"
}
```

## 500 Internal Server Error

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

# Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created Successfully |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Example cURL Requests

## Get Alerts

```bash
curl -X GET "https://security-alerts-api.vercel.app/api/alerts"
```

## Create Alert

```bash
curl -X POST "https://security-alerts-api.vercel.app/api/alerts" \
-H "Content-Type: application/json" \
-d '{
  "threat_info": {
    "event_type": "brute_force_login",
    "description": "Multiple failed SSH login attempts detected.",
    "source_ip": "192.168.1.105",
    "timestamp": "2026-06-11T14:23:01Z"
  },
  "classification": {
    "final_severity": "High",
    "priority_score": 3,
    "was_escalated": true,
    "escalation_note": "Auto-escalated from Low to High."
  },
  "mitre_attck": {
    "technique_id": "T1110",
    "technique_name": "Brute Force",
    "tactic": "Credential Access"
  },
  "ioc_details": {
    "is_malicious": true,
    "reputation": "malicious",
    "provider": "VirusTotal"
  }
}'
```

## Delete Alerts

```bash
curl -X DELETE "https://security-alerts-api.vercel.app/api/alerts"
```