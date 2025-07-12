import * as React from 'react'

type EmailTemplateProps = {
    recipientEmail : string;
    subject : string;
    message : string;
    status : string;
    sendTime : Date;
}


const EmailTemplate = ({recipientEmail, subject, message, status, sendTime} : EmailTemplateProps) => {
  return (
    <div>
      <h1>{subject}</h1>
      <p>{message}</p>
      <p>To: {recipientEmail}</p>
      <p>Status: {status}</p>
      <p>Scheduled for: {sendTime.toString()}</p>
    </div>
  )
}

export default EmailTemplate