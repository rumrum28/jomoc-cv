'use server'

import emailjs from '@emailjs/browser'
import { revalidatePath } from 'next/cache'

export default async function sendEmail(form: {
  firstName: string
  lastName: string
  email: string
  message: string
}) {
  const emailjsServiceId = process.env.EMAILJS_SERVICE_ID || ''
  const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID || ''
  const emailBody = {
    from_name: `${form.firstName} ${form.lastName}`,
    to_name: 'John Eric',
    from_email: form.email,
    to_email: 'murrumrum@gmail.com',
    message: `${form.message}, sent from ${form.email}`,
  }
  const emailjsUserId = process.env.EMAILJS_ACCOUNT_PUBLIC_KEY || ''

  const dog = await emailjs
    .send(emailjsServiceId, emailjsTemplateId, emailBody, emailjsUserId)
    .then((result) => {
      console.log(result)

      if (result) {
        revalidatePath('/contact')
        return {
          status: 'success',
          message: 'Email sent successfully',
        }
      }
    })
    .catch((error) => {
      revalidatePath('/contact')
      return {
        status: 'error',
        message: error,
      }
    })
}
