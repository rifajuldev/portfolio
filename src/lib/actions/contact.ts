'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['rifajul.dev@gmail.com'],
      subject: `[Portfolio] ${data.subject}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            New Message from Your Portfolio
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 12px; color: #222;">${data.name}</td>
            </tr>
            <tr style="background-color: #f0f0f0;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 12px; color: #222;">
                <a href="mailto:${data.email}" style="color: #22c55e;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 12px; color: #222;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr style="background-color: #f0f0f0;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Subject:</td>
              <td style="padding: 8px 12px; color: #222;">${data.subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #fff; border-left: 4px solid #22c55e; padding: 16px; border-radius: 4px; color: #333; white-space: pre-wrap;">${data.message}</div>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
            This email was sent from the contact form on your portfolio website.<br/>
            Reply directly to this email to respond to ${data.name}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Failed to send email:', err)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
