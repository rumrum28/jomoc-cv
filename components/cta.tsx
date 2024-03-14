'use client'

import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function CTA() {
  const router = useRouter()

  return (
    <div className="my-12 flex items-center justify-center flex-col md:flex-row text-primaryBrown dark:text-lightBrown">
      <p className="text-2xl">Have a project in mind?</p>

      <Button
        className="mt-4 md:mt-0 md:ml-4 bg-lightBrown hover:bg-primaryBrown text-primaryBrown dark:hover:text-lightBrown px-8 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-md"
        onClick={() => router.push('/contact')}
      >
        Let's talk
      </Button>
    </div>
  )
}

export default CTA
