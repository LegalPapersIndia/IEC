const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  rawPayload: Object,
  application_type: String,
  business_entity: String,
  constitution: String,
  description_business: String,
  business_activity: String,
  date_of_incorporation: String,
  address_line1: String,
  address_line2: String,
  city: String,
  state: String,
  pincode: String,
  pan_no: String,
  email: String,
  contact_no: String,
  has_branch: String,
  sez: String,
  status: { type: String, default: "new" },
}, { timestamps: true });

module.exports = mongoose.model("IecLead", schema);