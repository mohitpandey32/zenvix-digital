// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// type ContactBody = {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// };

// type SuccessResponse = {
//   ok: true;
//   message: string;
// };

// type ErrorResponse = {
//   ok: false;
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<SuccessResponse | ErrorResponse>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ ok: false, message: "Method not allowed" });
//   }

//   const body = req.body as ContactBody;
//   const { name, email, subject, message } = body;

//   if (!name || !email || !message) {
//     return res.status(400).json({
//       ok: false,
//       message: "Name, email and message are required.",
//     });
//   }

//   // Log to backend (basic "save to backend" behavior)
//   // In a real app you would write this to a database here.
//   console.log("New contact form submission:", {
//     name,
//     email,
//     subject,
//     message,
//     createdAt: new Date().toISOString(),
//   });

//   try {
//     if (
//       !process.env.SMTP_HOST ||
//       !process.env.SMTP_PORT ||
//       !process.env.SMTP_USER ||
//       !process.env.SMTP_PASS ||
//       !process.env.CONTACT_RECEIVER
//     ) {
//       console.warn(
//         "SMTP env vars not fully configured. Skipping email send, only logging."
//       );
//       return res.status(200).json({
//         ok: true,
//         message:
//           "Message received. Email sending is not configured on the server.",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: Number(process.env.SMTP_PORT) === 465,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     const mailSubject = subject || "New contact form message";

//     await transporter.sendMail({
//       from: `"${name}" <${process.env.SMTP_USER}>`,
//       replyTo: email,
//       to: process.env.CONTACT_RECEIVER,
//       subject: mailSubject,
//       text: `
// New contact form submission

// Name: ${name}
// Email: ${email}
// Subject: ${mailSubject}
// Message:
// ${message}
//       `.trim(),
//       html: `
//         <h2>New contact form submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${mailSubject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${(message || "").replace(/\n/g, "<br/>")}</p>
//       `,
//     });

//     return res
//       .status(200)
//       .json({ ok: true, message: "Message sent successfully." });
//   } catch (error) {
//     console.error("Error sending contact email:", error);
//     return res.status(500).json({
//       ok: false,
//       message: "Failed to send message. Please try again later.",
//     });
//   }
// }

