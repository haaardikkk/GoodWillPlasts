import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const {
      companyName = "",
      contactPerson = "",
      email = "",
      phone = "",
      productInterest = "",
      message = "",
    } = body || {};

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Quote / Contact Request</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product Interest:</strong> ${productInterest}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hardikprivate28@Gmail.com",
      subject: `New Quote Request: ${companyName || contactPerson || "GoodWill Plast"}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(500).json({ error: "Email send failed" });
      return;
    }

    res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Handler error:", err);
    res.status(500).json({ error: "Unexpected error" });
  }
}