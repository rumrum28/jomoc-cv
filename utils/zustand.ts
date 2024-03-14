import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ContactForm = {
  firstName: string
  lastName: string
  email: string
  message: string
}

type Props = {
  tab: string | null
  setTab: (t: boolean) => void
  contactForm: ContactForm
  setContactForm: (cf: ContactForm) => void
}

const pucspispfjsf = (set: any) =>
  ({
    tab: '',
    setTab: (t) => {
      set(() => ({
        setTab: t,
      }))
    },
    contactForm: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    setContactForm: (cf) => {
      set(() => ({
        contactForm: cf,
      }))
    },
  } as Props)

const useZustand = create(
  persist(pucspispfjsf, {
    name: 'lgs10',
  })
)

export default useZustand
