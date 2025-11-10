// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, subject, message } = body;

//     // ✅ (optional) Basic validation
//     if (!name || !email || !subject || !message) {
//       return new Response(JSON.stringify({ error: "All fields are required." }), {
//         status: 400,
//       });
//     }

//     // ✅ Setup email transporter (use your own credentials)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // e.g. your Gmail
//         pass: process.env.EMAIL_PASS, // App password, not your Gmail password
//       },
//     });

//     // ✅ Send the email
//     await transporter.sendMail({
//       from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER, // receive in your own inbox
//       subject: `New Contact Form: ${subject}`,
//       html: `
//         <h3>You have a new contact message!</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Contact form error:", error);
//     return new Response(JSON.stringify({ error: "Something went wrong." }), {
//       status: 500,
//     });
//   }
// }



// import connectDB from "@/lib/connectDB";
// import Contact from "@/models/Contact";

// export async function POST(req) {
//   try {
//     await connectDB();
//     const { name, email, message } = await req.json();

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     return Response.json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ success: false, message: "Something went wrong." });
//   }
// }



import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Contact from "@/models/Contact";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // ✅ Email bhejna
    await sendEmail({ name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, message: "Error sending message" }, { status: 500 });
  }
}
