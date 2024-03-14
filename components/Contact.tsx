'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import Loader from './Loader'
import { Beetle } from './models/beetle'
import emailjs from '@emailjs/browser'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { useToast } from './ui/use-toast'
import useZustand from '@/utils/zustand'

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState<string>('') //force useState for animation render

  const { contactForm, setContactForm } = useZustand((set) => ({
    contactForm: set.contactForm,
    setContactForm: set.setContactForm,
  }))

  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const timeoutFocus = useRef<number>()
  const timeoutBlur = useRef<number>()

  const handleChange = (e: any) => {
    let formValidation = { ...contactForm, [e.target.id]: e.target.value }
    setContactForm(formValidation)
  }

  const handleFocus = (e: any) => {
    clearTimeout(timeoutBlur.current)
    setCurrentAnimation('AS_BlackOxBeetle_Sleep_End_01_SK_BlackOxBeetle01')
    timeoutFocus.current = window.setTimeout(() => {
      setCurrentAnimation('AS_BlackOxBeetle_Attack_Basic_SK_BlackOxBeetle01')
    }, 2021)
  }

  const handleBlur = (e: any) => {
    clearTimeout(timeoutFocus.current)
    setCurrentAnimation('AS_BlackOxBeetle_Sleep_Start_01_SK_BlackOxBeetle01')
    timeoutBlur.current = window.setTimeout(() => {
      setCurrentAnimation('AS_BlackOxBeetle_Sleep_Loop_01_SK_BlackOxBeetle01')
    }, 2800)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    clearTimeout(timeoutFocus.current)
    clearTimeout(timeoutBlur.current)
    setCurrentAnimation('AS_BlackOxBeetle_Run_Backward_01_SK_BlackOxBeetle01')

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const emailBody = {
      from_name: `${contactForm.firstName} ${contactForm.lastName}`,
      to_name: 'John Eric',
      from_email: contactForm.email,
      to_email: 'murrumrum@gmail.com',
      message: `${contactForm.message}, sent from ${contactForm.email}`,
    }
    const emailjsUserId =
      process.env.NEXT_PUBLIC_EMAILJS_ACCOUNT_PUBLIC_KEY || ''

    emailjs
      .send(emailjsServiceId, emailjsTemplateId, emailBody, emailjsUserId)
      .then((result) => {
        console.log(result)
        if (result) {
          toast({
            title: 'Email sent successfully',
            description: 'I will get back to you as soon as possible.',
            duration: 5000,
          })
        }
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: error,
          duration: 5000,
          variant: 'destructive',
        })
      })
      .finally(() => {
        setLoading(false)
        setContactForm({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        })
      })
  }

  return (
    <div className="relative flex items-center justify-start md:flex-row flex-col w-full min-h-[calc(100vh-76px)] z-0 text-primaryBrown dark:text-lightBrown">
      <form
        className={`relative flex items-center justify-center w-full md:min-w-[50%] ml-[15%] z-20 max-w-[640px] h-full`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Card className="border-0">
          <CardHeader>
            <CardTitle className="text-3xl my-3">Get in touch</CardTitle>
            <CardDescription>
              Send me a message and I'll get back to you as soon as possible.
              <span>(Beware of the beetle!)</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-4">
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-wrap -mx-3">
                <div className="w-1/2 pr-1 pl-3 md:mb-0">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border mt-3 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    type="text"
                    placeholder="Firstname"
                    value={contactForm.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                <div className="w-1/2 pl-1 pr-3">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border mt-3 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="lastName"
                    type="text"
                    placeholder="Lastname"
                    value={contactForm.lastName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mt-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mt-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="message"
                    placeholder="Message"
                    value={contactForm.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  ></Textarea>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-5">
            <span></span>
            <Button disabled={loading} variant="outline">
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <div className="w-full max-w-[640px] h-full md:min-h-[426px] z-10 absolute right-7">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0, 0, 1]} intensity={8} />
            <ambientLight intensity={4.5} />

            <Beetle
              position={[0, -1, 0]}
              rotation={[6, 4, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Contact
