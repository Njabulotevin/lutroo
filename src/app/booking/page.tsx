"use client";

import { useFormik } from "formik";
import { Lora } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function page() {

  const router = useRouter();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch("https://lutroo.co.za/api/booking", {
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
    <div className="mt-32">
      <div className="flex flex-wrap gap-2 justify-between">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10  p-10">
            <h2
              style={lora.style}
              className=" text-3xl lg:text-5xl font-semibold text-primary-900"
            >
              Book an appointment
            </h2>

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
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="" className="text-sm text-primary-900">
                    Phone Number *
                  </label>
                  <input
                    placeholder="Enter phone number"
                    type="text"
                    className="border border-gray-200 p-2"
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </div>
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
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-primary-900">
                  Subject *
                </label>
                <input
                  placeholder="Enter subject"
                  type="text"
                  className="border border-gray-200 p-2"
                  name="subject"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm text-primary-900">
                  Message (optional)
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
        <div className="lg:w-[50vw] w-full">
          <img src="/session.webp" />
        </div>
      </div>
    </div>
  );
}
