import EmailTemplate from "@/app/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST() {
    try { 
        const { data, error } = await resend.emails.send({
            from : 'onboarding@resend.dev',
            to : 'msinannoufal@gmail.com',
            subject : 'Hello from Relyfe',
            react : EmailTemplate({
                recipientEmail : 'msinannoufal@gmail.com',
                subject : 'Hello from Relyfe',
                message : 'i dont know rbo',
                status : 'send now',
                sendTime : new Date()
            })
        });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
    } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}