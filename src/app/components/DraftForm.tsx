"use client"
import React, { ChangeEvent, useState } from 'react'

const DraftForm = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [option, setOption] = useState("");
    const [schedule, setSchedule] = useState("")

    const handleEmailChange = (e : ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }
    const handleSubjectChange = (e : ChangeEvent<HTMLInputElement>) => { setSubject(e.target.value); }
    const handleMessageChange = (e : ChangeEvent<HTMLTextAreaElement>) => { setMessage(e.target.value); }
    const handleOptionChange = (e : ChangeEvent<HTMLSelectElement>) => { 
        const selected = e.target.value;
        setOption(selected);
        if(selected === "Send now") setSchedule("");
    }
    const handleScheduleChange = (e : ChangeEvent<HTMLInputElement>) => { setSchedule(e.target.value); }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
        recipientEmail: email,
        subject: subject,
        message: message,
        status: option === "Schedule" ? "scheduled" : "send now",
        sendTime: option === "Schedule" ? new Date(schedule) : new Date(),
    };

    try {
        // 1. Save to DB
        const res = await fetch("/api/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        console.log("Success: ", result);

        // 2. If "Send now", trigger the email sending
        if (payload.status === "send now") {
            const sendNowRes = await fetch("/api/send-now", {
                method: "POST",
            });
            if (!sendNowRes.ok) throw new Error("Failed to send email immediately.");
            console.log("Sent immediately via /api/send-now");
        }

        // 3. Reset form
        setEmail("");
        setSubject("");
        setMessage("");
        setOption("");
        setSchedule("");
    } catch (error) {
        console.error("Error: ", error);
    }
};


  return (
<div className='mt-8 px-4'>
    <form 
        action=""
        className='flex flex-col bg-gray-600/10 py-8 px-8 rounded-2xl shadow-2xl border border-gray-200 max-w-4xl mx-auto backdrop-blur-2xl'
        onSubmit={handleSubmit}
    >
        {/* Top part*/}
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Compose Email</h2>
            <p className="text-[#6B7280] text-sm">Send your message anonymously</p>
        </div>

        {/* Email */}
        <div className="mb-6">
            <label 
                htmlFor="recipientEmail" 
                className="block text-sm font-semibold text-white mb-2"
            >
                Recipient Email
            </label>
            <input
                type="email"
                name='recipientEmail'
                id="recipientEmail"
                value={email}
                onChange={handleEmailChange}
                placeholder="recipient@example.com"
                className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 bg-white focus:border-[#0085ff] focus:ring-2 focus:ring-[#0085ff]/20 focus:outline-none transition-all duration-200 placeholder-gray-400'
                required
            />
        </div>

        {/* Subject */}
        <div className="mb-6">
            <label 
                htmlFor="subject" 
                className="block text-sm font-semibold text-white mb-2"
            >
                Subject
            </label>
            <input
                type="text"
                name='subject'
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Enter your subject line"
                className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 bg-white focus:border-[#0085ff] focus:ring-2 focus:ring-[#0085ff]/20 focus:outline-none transition-all duration-200 placeholder-gray-400'
                required
            />
        </div>

        {/* Message */}
        <div className="mb-6">
            <label 
                htmlFor="message" 
                className="block text-sm font-semibold text-white mb-2"
            >
                Message
            </label>
            <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your message here..."
                rows={6}
                className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 bg-white focus:border-[#0085ff] focus:ring-2 focus:ring-[#0085ff]/20 focus:outline-none transition-all duration-200 placeholder-gray-400 resize-vertical min-h-[120px]'
                required
            />
        </div>

        {/* Send Options */}
        <div className="mb-8">
            <label 
                htmlFor="status" 
                className="block text-sm font-semibold text-white mb-3"
            >
                When to send
            </label>
            <select 
                name="status" 
                id="status"
                value={option} 
                onChange={handleOptionChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-whi te bg-white focus:border-[#0085ff] focus:ring-2 focus:ring-[#0085ff]/20 focus:outline-none transition-all duration-200 cursor-pointer"
            >
                <option value="Send now">📤 Send now</option>
                <option value="Schedule">⏰ Schedule for later</option>
            </select>

            {/* Schedule DateTime */}
            {option === "Schedule" && (
                <div className="mt-4 p-4 bg-[#0085ff]/5 rounded-lg border border-[#0085ff]/20">
                    <label 
                        htmlFor="schedule" 
                        className="block text-sm font-medium text-white mb-2"
                    >
                        Choose date and time
                    </label>
                    <input 
                        type="datetime-local" 
                        id="schedule"
                        value={schedule} 
                        onChange={handleScheduleChange}
                        className="w-full px-4 py-3 border-2 border-[#0085ff]/30 rounded-lg text-whi te bg-white focus:border-[#0085ff] focus:ring-2 focus:ring-[#0085ff]/20 focus:outline-none transition-all duration-200"
                        required
                    />
                </div>
            )}
        </div>

        {/* Button */}
        <button 
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8500] text-white font-bold text-lg rounded-lg hover:from-[#FF5722] hover:to-[#FF6B35] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/30"
        >
            <span className="flex items-center justify-center gap-2">
                {option === "Schedule" ? "📅 Schedule Email" : "🚀 Send Email Now"}
            </span>
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-[#9e9e9e] mt-6">
            Your email will be sent completely anonymously
        </p>
    </form>
</div>
  )
}

export default DraftForm