import AWS from "aws-sdk";
import { NextResponse } from "next/server";

AWS.config.update({
  region: "us-east-2",
  accessKeyId: process.env.AWS_SES_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const sendEmail = async (body) => {
  const params = {
    Source: "jaylen@moonraydevelopment.com",
    Destination: { ToAddresses: ["jaylen@moonraydevelopment.com"] },
    Message: {
      Subject: { Data: body.subject },
      Body: { Text: { Data: body.message } },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log("Email sent:", result.MessageId);
    return result.MessageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export const POST = async (req) => {
  const body = await req.json();
  console.log(
    process.env.AWS_SES_ACCESS_KEY,
    process.env.AWS_SES_SECRET_ACCESS_KEY
  );
  try {
    // const data = await resend.emails.send({
    //   from: `${body.name} <jaylen@moonraydevelopment.com>`,
    //   to: ["jaylen@moonraydevelopment.com"],
    //   subject: `${body.subject}`,
    //   react: EmailTemplate({ body }),
    // });

    const response = await sendEmail(body);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
