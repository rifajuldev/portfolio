'use client'
import { sendMail } from '@/lib/send-mail'
import { contactFormSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { RiArrowRightUpLine } from 'react-icons/ri'
import { z } from 'zod'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await sendMail({
        ...values,
        phone: values.phone || '',
      })
      reset()
      toast.success('Message sent successfully!')
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <input {...register('name')} className="form-control" placeholder="Your name" />
          {errors.name && <p className="form-validation-error">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <input {...register('phone')} className="form-control" placeholder="Phone (optional)" />
          {errors.phone && <p className="form-validation-error">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input {...register('email')} className="form-control" placeholder="Email" />
          {errors.email && <p className="form-validation-error">{errors.email.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <input {...register('subject')} className="form-control" placeholder="Subject" />
          {errors.subject && <p className="form-validation-error">{errors.subject.message}</p>}
        </div>

        {/* Text area */}
        <div className="col-span-2">
          <textarea {...register('message')} className="form-control !min-h-[205px]" placeholder="Message" />
          {errors.message && <p className="form-validation-error">{errors.message.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group text-neutral-1000 bg-primary-2 font-secondary mt-4 flex items-center gap-2 overflow-hidden rounded-lg px-3 py-3 text-center text-[14px] leading-[14px] font-bold transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-4"
      >
        {isSubmitting ? 'Sending Message' : 'Send Message'}
        <span className="relative inline-block">
          <RiArrowRightUpLine
            size={24}
            className="group-hover:animate-hover-icon-exit absolute w-[20px] transition-transform duration-400 ease-in-out md:w-[24px]"
          />
          <RiArrowRightUpLine
            size={24}
            className="group-hover:animate-hover-icon-enter w-[20px] transition-transform duration-400 ease-in-out md:w-[24px]"
          />
        </span>
      </button>
    </form>
  )
}

export default ContactForm
