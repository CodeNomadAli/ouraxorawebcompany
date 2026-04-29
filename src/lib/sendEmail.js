import nodemailer from "nodemailer";

export async function sendEmail(data) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔥 Dynamic fields convert to text
    const formattedText = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    await transporter.sendMail({
      from: `"Website Form" <${data.email}>`,
      to: process.env.EMAIL_USER,
      replyTo: process.env.EMAIL_USER,
      subject: "New Form Submission",
      text: formattedText,
    });

    return { success: true };
  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);
    return { success: false, error };
  }
}