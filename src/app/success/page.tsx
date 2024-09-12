'use client'

import { motion } from 'framer-motion';
import { Lora } from 'next/font/google';
import React from 'react'
import useHomeVariants from '../hooks/useHomeVariants';
import Link from 'next/link';

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

export default function page() {
    const { aboutUsVariants, aboutUsHeaderVariants } = useHomeVariants();
  return (
    <div className="lg:p-20 lg:pt-[50px] min-h-screen mt-34">
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex gap-6 mt-36 w-full flex-wrap  lg:gap-3 bg-white min-h-[60vh] px-5 lg:py-20 p-10"
      >
        <motion.div
          variants={aboutUsVariants}
          className="flex flex-col gap-10 lg:max-w-[90vw] lg:px-10 mx-auto"
        >
          {/* <h2 className="text-4xl font-semibold gradientText">About Us</h2> */}
          <motion.div
            variants={aboutUsHeaderVariants}
            className="flex flex-col gap-3 "
          >
            <h2
              style={lora.style}
              className="text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
            >
              Form Submitted Successfully!
            </h2>

            <p className='text-primary-900 text-center'>Thank you for submitting the form</p>
          </motion.div>
            <Link className='mx-auto underline text-primary-900' href="/">Go back home</Link>
          
          
        </motion.div>
      </motion.section>
    </div>
  )
}
