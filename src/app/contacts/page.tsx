"use client";

import { Lora } from "next/font/google";
import React from "react";
import useHomeVariants from "../hooks/useHomeVariants";
import { motion } from "framer-motion";
import { Mail, Phone, PhoneIcon } from "lucide-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function page() {
  const { aboutUsVariants, aboutUsHeaderVariants } = useHomeVariants();

  const router = useRouter();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch("https://lutroo.co.za/api/form", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
          },
      });
      if (res.status == 200) {
        resetForm();
        router.push("/success")
      }
    },
  });
  return (
    <div className="lg:p-20 lg:pt-[50px] min-h-screen mt-34">
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex gap-6 w-full flex-wrap  lg:gap-3 bg-white min-h-[60vh] px-5 lg:py-20 p-10"
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
              Contact Us
            </h2>
          </motion.div>

          <div className="flex gap-10 flex-wrap justify-between mx-auto">
            <div className="flex flex-col gap-10 bg-primary-900 p-10">
              <h2
                style={lora.style}
                className="text-3xl text-center  font-semibold text-white"
              >
                Contact information
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex gap-10 text-white">
                  <Phone />
                  <p className="">+27 83 422 4366</p>
                </div>
                <div className="flex gap-10 text-white">
                  <Mail />
                  <p>info@lutroo.co.za</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-10  p-10">
                <h2
                  style={lora.style}
                  className=" text-3xl font-semibold text-primary-900"
                >
                 Get in Touch
                </h2>
                <p className="text-primary-900">Leave us a message we'll get back to you.</p>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-5">
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="" className="text-sm text-primary-900">
                        Name *
                      </label>
                      <input
                        placeholder="Enter name"
                        type="text"
                        className="border border-gray-200 p-2"
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-sm text-primary-900">
                      Email Address *
                    </label>
                    <input
                      placeholder="Enter email"
                      type="email"
                      className="border border-gray-200 p-2"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  </div>
                 
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-sm text-primary-900">
                      Message
                    </label>
                    <textarea
                      placeholder="message"
                      className="border border-gray-200 p-2"
                      name="message"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  className="bg-secondary-900 text-primary-900 items-center justify-center p-3 flex gap-2 mx-auto lg:mx-0"
                  type="submit"
                >
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
