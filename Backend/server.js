// server.js - Complete IEC Backend (Express + Node.js)
require('dotenv').config(); // Load .env variables
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 10000;
const CRM_URL = process.env.CRM_URL || 'https://legalpapers.konceptsoftwaresolutions.com/leadRoutes';

// Middleware
app.use(helmet()); // Security headers
app.use(cors({ origin: '*' })); // Allow all origins (React से requests) - production में specific domain set करो
app.use(bodyParser.json()); // Parse JSON from React
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded if needed

// Health check endpoint (Render deployment के लिए useful)
app.get('/', (req, res) => {
  res.json({ 
    message: 'IEC Backend Running!', 
    timestamp: new Date().toISOString(),
    crmUrl: CRM_URL // Debug के लिए, production में हटा दो
  });
});

// Main endpoint: React form submits here
app.post('/api/submit-iec', async (req, res) => {
  try {
    console.log('Received form data from React:', JSON.stringify(req.body, null, 2)); // Debug log

    const formData = req.body; // Raw data from React

    // Build CRM payload EXACTLY like PHP (field mappings)
    const crmPayload = {
      'ctl00$ContentPlaceHolder1$ddlApplicationType': formData.application_type || '',
      'ctl00$ContentPlaceHolder1$txtBusinesEntity': formData.business_entity || '',
      'ctl00$ContentPlaceHolder1$ddlConstitution': formData.constitution || '',
      'ctl00$ContentPlaceHolder1$txtdescriptionbusiness': formData.description_business || '',
      'ctl00$ContentPlaceHolder1$ddlBsinessActivity': formData.business_activity || '', // Typo matches PHP
      'ctl00$ContentPlaceHolder1$txtDate': formData.date_of_incorporation || '', // DD-MM-YYYY from React

      // Address fields (no prefix, like PHP)
      'txtpaddress': formData.address_line1 || '',
      'txtpaddress2': formData.address_line2 || '',
      'txtpcity': formData.city || '',
      'txtpstate': formData.state || '',
      'txtppincode': formData.pincode || '',

      'ctl00$ContentPlaceHolder1$txtPanNo': formData.pan_no || '',
      'ctl00$ContentPlaceHolder1$txtemail': formData.email || '',
      'ctl00$ContentPlaceHolder1$txtphone': formData.contact_no || '',

      // Extra fields (if needed)
      'hasBranch': formData.has_branch || '',
      'sez': formData.sez || 'No',

      'serviceCategory': 'iecReg',
      'leadSource': 'iecregistration-india.org'
    };

    // Convert to x-www-form-urlencoded (PHP http_build_query equivalent)
    const formBody = new URLSearchParams();
    Object.entries(crmPayload).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    console.log('Forwarding payload to CRM:', formBody.toString().substring(0, 300) + '...'); // Debug log

    // Forward to CRM (mimic PHP cURL: POST, 10s timeout, minimal headers)
    const crmResponse = await fetch(CRM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // No Referer/Origin/User-Agent — server-to-server request
      },
      body: formBody.toString(),
      timeout: 10000 // 10s like PHP
    });

    const crmText = await crmResponse.text();
    console.log('CRM Response Status:', crmResponse.status);
    console.log('CRM Response Body (first 300 chars):', crmText.substring(0, 300)); // Debug log

    // Success check (like PHP/React: ok status or keywords)
    const isSuccess = crmResponse.ok ||
      crmText.toLowerCase().includes('success') ||
      crmText.includes('thank') ||
      crmText.includes('submitted') ||
      crmText.includes('application received');

    if (isSuccess) {
      res.json({ 
        success: true, 
        message: 'Submitted to CRM successfully!', 
        crmStatus: crmResponse.status,
        crmResponse: crmText 
      });
    } else {
      res.status(400).json({ 
        success: false, 
        message: 'CRM submission failed', 
        crmStatus: crmResponse.status,
        crmResponse: crmText 
      });
    }

  } catch (error) {
    console.error('Backend Error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during CRM submission', 
      error: error.message 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`IEC Backend running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/`);
});