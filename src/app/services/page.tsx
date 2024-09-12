"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import useHomeVariants from "../hooks/useHomeVariants";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function page() {
  const { aboutUsVariants, aboutUsHeaderVariants } = useHomeVariants();

  const services = [
    { label: "Individual counseling", image: "/individual.jpg" },
    { label: "Relationships Therapy", image: "/relationship.jpg" },
    { label: "Consultations", image: "/consultations.webp" },
    { label: "Educational seminars and webinars", image: "/seminars.webp" },
  ];

  const [clicked, setClicked] = useState("");

  return (
    <div className="lg:p-20 lg:pt-[50px] min-h-screen">
      <section
        // viewport={{ once: true, amount: 0.8 }}
        className="flex gap-6 w-full flex-wrap  lg:gap-3 bg-white min-h-[60vh] px-5 lg:py-20 p-10"
      >
        <div
          // variants={aboutUsVariants}
          className="flex flex-col gap-10 lg:max-w-[90vw] lg:px-10 mx-auto"
        >
          {/* <h2 className="text-4xl font-semibold gradientText">About Us</h2> */}
          <div
            // variants={aboutUsHeaderVariants}
            className="flex flex-col gap-3 "
          >
            <h2
              style={lora.style}
              className="text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
            >
              Your Journey to wellness begins here.
            </h2>
          </div>
          <p className=" text-primary-900 text-center ">
            We have a dedicated team of counselling professionals who are highly
            skilled and experienced in providing quality mental health support
            to our clients
          </p>

          <div className="card w-40">
            <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
              <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pink-600 flex items-center justify-center">
                <h2>Front</h2>
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
                <h2>Back</h2>
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-wrap justify-between mx-auto">
            {services.map((service) => {
              return (
                <Link
                  href={"/services"}
                  className={`w-full lg:w-[400px] h-[360px] `}
                >
                  <div
                    className="card w-full h-full"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "200%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-gray-700/70  flex-col justify-end card__front absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center">
                      <p className="text-white text-2xl" style={lora.style}>
                        {service.label}
                      </p>
                    </div>

                    <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
                      <h2>Back</h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <div className="flex flex-wrap gap-10 justify-center ">
        <div className="flex flex-col gap-5">
          <h2
            style={lora.style}
            className="text-2xl font-semibold text-primary-900"
          >
            Individual Counseling:
          </h2>
          <ul className="text-primary-900">
            <li>Adolescent and adults</li>
            <li>Mental health support</li>
            <li>Trauma counseling</li>
            <li>Bereavement counseling</li>
            <li>Anger management</li>
            <li>Employee Assistant Programs (EAP)</li>
            <li>Health and wellness coaching</li>
            <li>Referrals</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2
            style={lora.style}
            className="text-2xl font-semibold text-primary-900"
          >
            Relationships Therapy:
          </h2>

          <ul className="text-primary-900">
            <li>Family counseling</li>
            <li>Pre-marital counseling</li>
            <li>Couple/Marriage counseling</li>
            <li>Parental guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
