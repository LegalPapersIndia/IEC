const router = require('express').Router();
const IecLead = require('../models/IecLead');
const adminAuth = require('../middleware/adminAuth');

// ✅ SAVE FORM
router.post('/iec', async (req, res) => {
  try {
    const payload = req.body;

    await IecLead.create({
      rawPayload: payload,
      application_type: payload.ddlApplicationType,
      business_entity: payload.txtBusinesEntity,
      constitution: payload.ddlConstitution,
      description_business: payload.txtdescriptionbusiness,
      business_activity: payload.ddlBsinessActivity,
      date_of_incorporation: payload.txtDate,
      address_line1: payload.txtpaddress,
      address_line2: payload.txtpaddress2,
      city: payload.txtpcity,
      state: payload.txtpstate,
      pincode: payload.txtppincode,
      pan_no: payload.txtPanNo,
      email: payload.txtemail,
      contact_no: payload.txtphone,
      has_branch: payload.ddlEntityBranch,
      sez: payload.firm,
    });

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "error" });
  }
});

// ✅ GET LEADS (ADMIN)
router.get('/iec-leads', adminAuth, async (req, res) => {
  const data = await IecLead.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;