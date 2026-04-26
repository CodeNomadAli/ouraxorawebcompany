const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  console.log("🔥 REQUEST RECEIVED:", req.body);

  const { name, email, phone, service, budget, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Form Message",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget}
Message: ${message}
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);
    return res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});