import { ArrowLeft, User } from "lucide-react";
import { Lora } from "next/font/google";
import Link from "next/link";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function page() {
  return (
    <div className="flex flex-col gap-20 mt-36  justify-center">
      <div className="flex flex-wrap gap-10 justify-center p-10">
        <div className="w-[500px] lg:h-[500px]">
          <img
            src="/wellness.webp"
            className="w-[500px] h-[300px] lg:h-[500px] rounded object-contain lg:object-cover "
          />
        </div>
        <div className="flex flex-col gap-10 w-[600px]">
          <h2
            style={lora.style}
            className=" text-3xl text-center lg:text-start  lg:text-5xl font-semibold text-primary-900"
          >
            About Us
          </h2>
          <div className="flex flex-col gap-10 ">
            <p className=" text-primary-900 text-center lg:text-start">
              Lutroo health and wellness, is an organization offering a range of
              services to carter to the mental health and holistic health needs
              of our clients. With a focus of providing personalized support and
              guidance, we aim to help individuals achieve their mental health
              goals through a holistic approach. Our holistic approach focuses
              on healing body, mind, soul and restoring relationships. Lutroo
              provides faith based counseling, seminars, workshops, health and
              wellness coaching and Employee health and wellness services. Our
              services will be available online ensuring accessibility to all
              our clients. We carter for individuals, families and couples.
            </p>
            <p className=" text-primary-900 text-center lg:text-start">
              Our online distribution channels make our services easily
              accessible to our target market, increasing our reach and
              convenience for customers. Furthermore, we have a dedicated team
              of counselling professionals who are highly skilled and
              experienced in providing quality mental health support to our
              clients. In addition, we offer flexible pricing options to cater
              for unique needs of our clientele.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center p-10">
        <div className="flex  flex-col gap-10 w-[600px]">
          <h2
            style={lora.style}
            className=" text-3xl text-center lg:text-start  lg:text-5xl font-semibold text-primary-900"
          >
            Our Mission
          </h2>
          <div className="flex flex-col gap-10 ">
            <p className=" text-primary-900 text-center lg:text-start">
              To encourage personal responsibility in achieving and maintaining
              health and wellness. Our approach focuses on healing and restoring
              body, mind and soul through professional counseling and natural
              remedies. We are committed to being confidential, empathetic and
              educational in our approach as we offer affordable and accessible
              professional services
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[500px]">
          <img
            src="/individual.jpg"
            className="w-[500px] h-[500px] rounded object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <h2
          style={lora.style}
          className=" text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
        >
          Our Team
        </h2>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col justify-between bg-gray-200 w-[300px] h-[350px] rounded p-2">
            <div className="flex justify-center items-center text-gray-400 w-full h-[300px]">
              <User size={100} />
            </div>
            <div className="flex flex-col gap-2 bg-white p-2 rounded">
              <h2
                style={lora.style}
                className=" text-lg  font-semibold text-primary-900 "
              >
                Patience Lethokuhle Ncube
              </h2>
              <p className="text-primary-900 text-sm">
                Registered Social Worker in Private Practice
              </p>
              <p className="text-primary-900 text-sm">Reg No: 10-53868</p>
              <p className="text-primary-900 text-sm">Pr No: 1191291</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <h2
          style={lora.style}
          className=" text-3xl text-center  lg:text-5xl font-semibold text-primary-900"
        >
          Affiliated Bodies
        </h2>

        <div className="flex flex-wrap justify-center">
          <img
            src="/SACSSP.webp"
            className="w-[300px] h-[200px] object-contain"
          />
          <img src="/bhf.png" className="w-[300px] h-[200px] object-contain" />
        </div>
      </div>

      <footer className="bg-primary-900">
        <p className="text-white text-sm text-center py-10">
          All copyright reserved © Lutroo 2024
        </p>
      </footer>
    </div>
  );
}
