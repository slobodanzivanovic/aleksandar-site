import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email and message",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "mailcluster.loopia.se",
      port: 587,
      secure: false,
      auth: {
        user: process.env.LOOPIA_EMAIL,
        pass: process.env.LOOPIA_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: `"${name}" <${process.env.LOOPIA_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Subject: ${subject || "Not provided"}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(adminMailOptions);

    const userMailOptions = {
      from: `"Your Company Name" <${process.env.LOOPIA_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting us",
      text: `
        Dear ${name},
        
        Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
        
        Here's a copy of your message:
        ${message}
        
        Best regards,
        Your Company Name
      `,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p>Best regards,<br>Your Company Name</p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
}
