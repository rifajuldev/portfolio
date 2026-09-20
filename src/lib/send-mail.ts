'use server'
import nodemailer from 'nodemailer'
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD
const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
})

export async function sendMail({
  name,
  email,
  phone,
  message,
  subject,
}: {
  name: string
  email: string
  phone: string
  message: string
  subject: string
}) {
  try {
    await transporter.verify()
  } catch (error) {
    console.log('Something went wrong', error)
    return
  }
  const info = await transporter.sendMail({
    from: email,
    to: SITE_MAIL_RECEIVER,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
  })
  console.log('Message sent: %s', info.messageId)
  console.log('Mail sent to', SITE_MAIL_RECEIVER)
}
