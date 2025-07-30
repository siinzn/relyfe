import * as React from 'react'

type EmailTemplateProps = {
    recipientEmail: string;
    subject: string;
    message: string;
    status: string;
    sendTime: Date;
}

const EmailTemplate = ({ recipientEmail, subject, message, status, sendTime }: EmailTemplateProps) => {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      margin: 0,
      padding: '40px 20px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0085ff 0%, #69b4ff 100%)',
          padding: '30px',
          textAlign: 'center' as const
        }}>
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            📧 Relyfe
          </div>
          <div style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Anonymous Email Service
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          padding: '40px 30px'
        }}>
          
          {/* Subject */}
          <div style={{
            marginBottom: '30px'
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 8px 0',
              lineHeight: '1.3'
            }}>
              {subject}
            </h1>
          </div>

          {/* Message */}
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #e9ecef',
            borderRadius: '12px',
            padding: '25px',
            marginBottom: '30px'
          }}>
            <div style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333333',
              whiteSpace: 'pre-wrap' as const
            }}>
              {message}
            </div>
          </div>

          {/* Metadata */}
          <div style={{
            borderTop: '1px solid #e9ecef',
            paddingTop: '25px',
            marginTop: '30px'
          }}>
            <div style={{
              display: 'grid',
              gap: '12px'
            }}>
              
              {/* Recipient */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                color: '#6c757d'
              }}>
                <span style={{
                  fontWeight: '600',
                  marginRight: '8px',
                  minWidth: '80px'
                }}>
                  📨 To:
                </span>
                <span style={{ color: '#0085ff', fontWeight: '500' }}>
                  {recipientEmail}
                </span>
              </div>

              {/* Send Time */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                color: '#6c757d'
              }}>
                <span style={{
                  fontWeight: '600',
                  marginRight: '8px',
                  minWidth: '80px'
                }}>
                  ⏰ Sent:
                </span>
                <span>
                  {new Date(sendTime).toLocaleString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </span>
              </div>

              {/* Status Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                color: '#6c757d'
              }}>
                <span style={{
                  fontWeight: '600',
                  marginRight: '8px',
                  minWidth: '80px'
                }}>
                  📊 Status:
                </span>
                <span style={{
                  backgroundColor: status === 'scheduled' ? '#fff3cd' : '#d1ecf1',
                  color: status === 'scheduled' ? '#856404' : '#0c5460',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'capitalize' as const
                }}>
                  {status === 'send now' ? '🚀 Sent Instantly' : '📅 Was Scheduled'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '25px 30px',
          borderTop: '1px solid #e9ecef',
          textAlign: 'center' as const
        }}>
          <div style={{
            fontSize: '13px',
            color: '#6c757d',
            marginBottom: '12px'
          }}>
            This email was sent anonymously via
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#0085ff'
          }}>
            🔒 Relyfe.me
          </div>
          <div style={{
            fontSize: '12px',
            color: '#9ca3af',
            marginTop: '8px'
          }}>
            Complete privacy • No tracking • Anonymous delivery
          </div>
        </div>

        {/* Privacy Notice */}
        <div style={{
          backgroundColor: '#0085ff',
          padding: '20px',
          textAlign: 'center' as const
        }}>
          <div style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.4'
          }}>
            🛡️ Your identity remains completely anonymous. The sender's information is not tracked or stored.
          </div>
        </div>

      </div>

      {/* Mobile Responsiveness Note */}
      <div style={{
        textAlign: 'center' as const,
        marginTop: '30px',
        fontSize: '12px',
        color: '#9ca3af'
      }}>
        Relyfe - Anonymous Email Service
      </div>
    </div>
  )
}

export default EmailTemplate