const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

// Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


const sendResetEmail = async (email, resetLink) => {
    try {
        const mailOptions = {
            from: `"Support Team" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Password Reset Request",
            html: `
        <p>Hello,</p>
        <p>You requested to reset your password. Click the link below:</p>
        <a href="${resetLink}" style="background:#007bff;color:#fff;padding:10px 20px;text-decoration:none;border-radius:5px;">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
      `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Reset email sent to ${email}`);
    } catch (error) {
        console.error(" Error sending email:", error);
    }
};

module.exports = sendResetEmail;
