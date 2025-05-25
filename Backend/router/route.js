import express from 'express';
import { sendEmail } from '../emailSent.js';

const router = express.Router();

router.post('/route', async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fields"
    });
  }

  try {
    await sendEmail({
      email: 'muhammad.64173@iqra.edu.pk',
      subject: 'GYM INFO',
      message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      userEmail: email,
    });

    return res.status(200).json({
      message: "Email sent successfully",
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
});

export default router;
