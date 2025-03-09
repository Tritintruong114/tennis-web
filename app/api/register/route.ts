import { NextResponse } from "next/server";
import { sendNodeMail } from "@/lib/send-email";

export async function POST(req: Request) {
  const { email } = await req.json();

  const notifyOwner = sendNodeMail({
    email: "Tín Trương <truongtritinbee@gmail.com>",
    sendTo: "tintruong.product@gmail.com",
    subject: "New Follower!",
    html: `
    <p><strong>You have received a new message follower from website.</strong></p>
    <p><strong>From:</strong> ${email}</p>
    <hr>
    <p>This is an automated notification. Please do not reply to this email.</p>
  `,
  });

  try {
    await Promise.all([notifyOwner]);

    return NextResponse.json(
      { message: "Email đã được gửi thành công!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra khi gửi email!" },
      { status: 500 }
    );
  }
}
