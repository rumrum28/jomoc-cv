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

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState<string>('')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const timeoutFocus = useRef<number>()
  const timeoutBlur = useRef<number>()
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
      from_name: `${form.firstName} ${form.lastName}`,
      to_name: 'John Eric',
      from_email: form.email,
      to_email: 'murrumrum@gmail.com',
      message: `${form.message}, sent from ${form.email}`,
    }
    const emailjsUserId =
      process.env.NEXT_PUBLIC_EMAILJS_ACCOUNT_PUBLIC_KEY || ''

    emailjs
      .send(emailjsServiceId, emailjsTemplateId, emailBody, emailjsUserId)
      .then((result) => {
        if (result) {
          console.log('Email sent successfully')
        }
      })
      .catch((error) => {
        console.error('Failed to send email. Error: ', error)
      })
      .finally(() => {
        setLoading(false)
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        })
      })
  }

  return (
    <div className="flex items-start justify-start md:flex-row flex-col mt-5 w-full h-[512px]">
      {/* <form
        className="w-full md:min-w-[50%] max-w-lg border-2 border-slate-900 rounded p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              type="text"
              placeholder="Jane"
              value={form.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="lastName"
              type="text"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            ></textarea>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form> */}

      <form
        className="relative w-full md:min-w-[50%] rounded-xl h-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Card className="border-slate-600 h-full">
          <CardHeader className="h-auto">
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-4 h-full">
            <div className="w-full flex flex-col">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  ></Textarea>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mt-6">
              <div className="md:w-1/3">
                <Button disabled={loading} variant="ghost">
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span></span>
            <Button disabled={loading} variant="outline">
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        className="w-full h-auto border-2 border-slate-900 md:min-w-[50%] md:h-full rounded bg-slate-900"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 0, 1]} intensity={3} />
          <ambientLight intensity={3.5} />

          <Beetle
            position={[0, -1, 0]}
            rotation={[6, 4, 0]}
            scale={[0.5, 0.5, 0.5]}
            currentAnimation={currentAnimation}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Contact
