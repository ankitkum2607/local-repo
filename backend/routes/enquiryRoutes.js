const express = require('express');
const Enquiry = require('../models/Enquiry');

const router = express.Router();

const validateEnquiryPayload = ({ name, email, contactNumber, message }) => {
  const errors = [];

  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.');
  if (!/^\S+@\S+\.\S+$/.test(email || '')) errors.push('A valid email is required.');
  if (!/^\+?[0-9\-\s]{7,15}$/.test(contactNumber || '')) errors.push('A valid contact number is required.');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters.');

  return errors;
};

// POST /api/enquiries - save enquiry details.
router.post('/enquiries', async (req, res) => {
  const errors = validateEnquiryPayload(req.body);

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed', errors });
  }

  try {
    const enquiry = await Enquiry.create(req.body);
    return res.status(201).json({ message: 'Enquiry submitted successfully', enquiry });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save enquiry', error: error.message });
  }
});

// GET /api/enquiries - fetch all enquiries for admin view.
router.get('/enquiries', async (_req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.status(200).json(enquiries);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch enquiries', error: error.message });
  }
});

module.exports = router;
