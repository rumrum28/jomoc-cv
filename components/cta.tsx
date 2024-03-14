'use client'

import { Button } from './ui/button'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <motion.div
      className="my-12 flex items-center justify-center flex-col md:flex-row"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
    >
      <p className="text-2xl">Have a project in mind?</p>

      <Button className="mt-4 md:mt-0 md:ml-4 text-primaryBrown dark:text-lightBrown bg-lightBrown hover:bg-primaryBrown hover:text-lightBrown px-8 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-md">
        Let's talk
      </Button>
    </motion.div>
  )
}

export default CTA
