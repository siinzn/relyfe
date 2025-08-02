import EmailTemplate from "@/app/components/EmailTemplate";
import { prisma } from "@/app/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);


export async function POST() {
    try { 
      const emailDetails = await prisma.email.findMany({
        where: {
          status: "scheduled",
          sendTime: {
            lte : new Date()
          },
        },
      });
        const results = [];
        
        for (const email of emailDetails) {
          const { data, error } = await resend.emails.send({
            from : 'Message@relyfee.me',
            to : email.recipientEmail,
            subject : email.subject,
            react : EmailTemplate({
                recipientEmail : email.recipientEmail,
                subject : email.subject,
                message : email.message,
                status : email.status,
                sendTime : email.sendTime
            })
        });
      await prisma.email.update({
        where: {id: email.id},
        data: {status : "Sent"}
      });

      if (error) {
        results.push({ id: email.id, status: "failed", error });
      } else {
        results.push({ id: email.id, status: "sent", data });
      }
    }

    return Response.json({ success: true, results });

  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}