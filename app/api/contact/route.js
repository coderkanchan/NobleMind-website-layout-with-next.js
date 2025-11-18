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
