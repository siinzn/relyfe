import { prisma } from '@/app/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req : NextRequest) {

    try {
        const body = await req.json();
        const { recipientEmail, subject, message, status, sendTime} = body;

    if (!recipientEmail || !subject || !message || !status || !sendTime) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

    const userInputs = await prisma.email.create({
        data : {
            recipientEmail,
            subject,
            message,
            sendTime : new Date(sendTime),
            status
            }
        })
        return NextResponse.json({ success: true, email: userInputs })
    } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

