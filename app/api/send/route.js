import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${body.name} <jaylen@moonraydevelopment.com>`,
      to: ["jaylen@moonraydevelopment.com"],
      subject: `${body.subject}`,
      react: EmailTemplate({ body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
