"use client"
import React, { ChangeEvent, ReactNode, useState } from 'react'

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

    const handleSubmit  = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            recipientEmail : email,
            subject : subject,
            message : message,
            status : option === "Schedule" ?  "scheduled" : "send now",
            sendTime : option === "Schedule" ? new Date(schedule) : new Date(),
        };

        try {
            const res  = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const result = await res.json();
            console.log('Sucess: ', result);

            setEmail("");
            setSubject("");
            setMessage("");
            setOption("")
            setSchedule("")
        } catch(error) {
            console.log('Error: ', error); 
        }
    }

  return (
    <div className='mt-[200px]'>
        <form 
            action="" 
            className='flex flex-col text-red-800 bg-amber-100'
            onSubmit={handleSubmit}>
            <div>
                <label htmlFor="to">Recipient Email: </label>
                <input 
                    type="text"
                    name='recipientEmail'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label htmlFor="subject">Subject: </label>
                <input 
                    type="text"
                    name='subject'
                    value={subject}
                    onChange={handleSubjectChange}
                />
            </div>
            
            <div>
                <label htmlFor="message">Message: </label>
                <textarea 
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    />
            </div>
            
            <div>
                <label htmlFor="status">Choose when to send: </label>
                <select name="status" value={option} onChange={handleOptionChange}>
                    <option value="Send now">Send now</option>
                    <option value="Schedule">Schedule</option>
                </select>
                {option === "Schedule" && (
                    <input type="datetime-local" value={schedule} onChange={handleScheduleChange} />
                )}
            </div>
            <button type="submit">Send Mail</button>
        </form>
    </div>
  )
}

export default DraftForm