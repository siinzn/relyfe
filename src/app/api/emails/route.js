import { prisma } from '@/app/lib/db'

export async function POST(req) {
    const newEmail = await prisma.email.create({
        data : {
            recipientEmail: "msinannoufal@gmail.com",
            subject: "Apology",
            message: "Hi this is to say sorry to you",
            sendTime: new Date()
        }
    })
    return Response.json(newEmail)
}

