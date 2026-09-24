import { date, object, string } from 'zod'

export const blogFormSchema = object({
  tag: string().nonempty('Tag is required'),
  img_url: string().url('Image is required'),
  date: date().max(new Date(), 'Blog date cannot be in the future'),
  read_time: string().nonempty('Read time is required'),
  title: string().nonempty('Title is required'),
  desc: string().nonempty('Description is required'),
  link: string().url('Invalid URL'),
})

export const contactFormSchema = object({
  name: string().nonempty('Please provide your name.'),
  phone: string().optional(),
  email: string().email('Please provide your email.'),
  subject: string().nonempty('Please give a subject.'),
  message: string().min(30, 'Please provide your message with minimum 30 characters.'),
})
