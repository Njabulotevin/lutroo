"use client";
import { ArrowLeft, Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import useHomeVariants from "./hooks/useHomeVariants";
import { Lora } from "next/font/google";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const services = [
    { label: "Individual counseling", image: "/individual.jpg" },
    { label: "Relationships Therapy", image: "/relationship.jpg" },
    { label: "Consultations", image: "/consultations.webp" },
    { label: "Educational seminars and webinars", image: "/seminars.webp" },
  ];

  const {
    imageVariants,
    titleVariants,
    aboutUsVariants,
    aboutUsHeaderVariants,
  } = useHomeVariants();

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
      console.log(res);
      if (res.status == 200) {
        resetForm();
        router.push("/success")
      }
    },
  });

  return (
    <div className="overflow-x-hidden w-full ">
      <motion.main
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ amount: 0.8 }}
        className="bg-white lg:p-20 pt-32 lg:pt-[50px] w-full  "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <section className=" flex flex-col w-full  px-10 lg:pt-20 py-6">
          <div className="flex gap-20 lg:gap-24 items-center flex-wrap justify-between text-primary-900 ">
            <motion.div
              variants={titleVariants}
              className="flex flex-col gap-4 lg:justify-start w-[650px]"
            >
              <h1
                className="text-6xl text-center lg:text-start lg:text-8xl  lg:flex flex-col  font-semibold"
                style={lora.style}
              >
                <span>Your Path To Holistic Wellness</span>{" "}
                {/* <span>
                  of <span className="gradientText">Storytelling</span>
                </span> */}
              </h1>

              <div className="w-full text-center lg:text-start mt-6 flex flex-col gap-4">
                <p>
                  {/* <span className="lg:hidden flex text-center justify-center font-medium">
                    Illuminating the Future of Storytelling.
                  </span> */}
                  Personalized Mental Health Support and Faith-Based
                  Counseling—Accessible Anytime, Anywhere for Individuals,
                  Families, and Couples.
                </p>
              </div>
              <div className="flex ">
                <Link
                  href="/booking"
                  className="bg-secondary-900 p-3 flex gap-2 mx-auto lg:mx-0"
                >
                  <ArrowLeft />
                  <span>Book A Session</span>
                </Link>
              </div>
            </motion.div>
            <div className="w-[250px] mx-auto h-[250px] flex items-center justify-center  lg:w-[500px] lg:h-[600px] ">
              <motion.img
                variants={imageVariants}
                src="/illustration.svg"
                alt=""
              />
            </div>
          </div>
        </section>
      </motion.main>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex flex-wrap gap-10 w-full justify-center  bg-primary-900  px-10 lg:py-20 py-10"
      >
        <motion.div
          variants={aboutUsVariants}
          className="flex flex-col gap-4 w-[600px]"
        >
          <h2
            style={lora.style}
            className="text-3xl text-center lg:text-start  lg:text-5xl font-semibold text-secondary-900"
          >
            About Us
          </h2>
          <div className="flex flex-col gap-10 ">
            <p className=" text-white text-center lg:text-start">
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
            <p className=" text-white text-center lg:text-start">
              Our online distribution channels make our services easily
              accessible to our target market, increasing our reach and
              convenience for customers. Furthermore, we have a dedicated team
              of counselling professionals who are highly skilled and
              experienced in providing quality mental health support to our
              clients. In addition, we offer flexible pricing options to cater
              for unique needs of our clientele.
            </p>

            <div className="flex">
              <Link
                href="/about"
                className="bg-secondary-900 p-3 flex gap-2 lg:mx-auto"
              >
                <ArrowLeft />
                <span>Read more</span>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="">
          <img
            src="/wellness.webp"
            className="w-[500px] h-[500px] rounded object-cover"
          />
      
        </div>
      </motion.section>
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
              Your Journey to wellness begins here.
            </h2>
          </motion.div>
          <p className=" text-primary-900 text-center ">
            We have a dedicated team of counselling professionals who are highly
            skilled and experienced in providing quality mental health support
            to our clients
          </p>
          <div className="flex gap-10 flex-wrap justify-between mx-auto">
            {services.map((service) => {
              return (
                <Link
                  href={"/services"}
                  className={`w-full lg:w-[300px] h-[360px] `}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "200%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-full h-full bg-gray-700/70 p-5 flex flex-col justify-end">
                    <p className="text-white text-2xl" style={lora.style}>
                      {service.label}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex flex-col gap-6 w-full flex-wrap justify-center items-center lg:gap-3 bg-white min-h-[60vh] px-10 lg:px-20 py-36"
      >
        <motion.div
          variants={aboutUsHeaderVariants}
          className="flex flex-col  gap-3 max-w-[70vw] mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-10 ">
              <h2
                style={lora.style}
                className=" text-3xl font-semibold text-primary-900"
              >
                Get in Touch
              </h2>
              <p className="text-primary-900">
                Leave us a message we'll get back to you.
              </p>

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
        </motion.div>

        {/* <div className="flex flex-col gap-4">
          <h3 className="text-lg lg:text-lg font-semibold text-primary-900 ">
            Contact Details:
          </h3>

          <div className="flex flex-col lg:flex-row w-full gap-3">
            <h4 className="font-semibold text-red-700">Contact Person:</h4>
            <p>Khanyi Nxumalo</p>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-3">
            <h4 className="font-semibold text-red-700">Contact Number:</h4>
            <p>+27 82 305 6223</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-3">
            <h4 className="font-semibold text-red-700">Email Address:</h4>
            <div className="">
              <p>khanyi@lightHouzefilms.co.za</p>
              <p>info@lightHouzefilms.co.za</p>
            </div>
          </div>
        </div> */}
      </motion.section>
      {/* <section className="lg:px-20 p-10 lg:py-36 flex flex-wrap justify-center gap-4 min-h-[60vh]">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold gradientText">
            My Recent Work
          </h2>
          <h3 className="text-3xl font-semibold text-white">Uzoori App</h3>
          <p className=" text-primary-300 w-full lg:max-w-[30vw]">
            Uzoori is a social commerce app that allows users to discover new
            styles and trends in the beauty and food industries, book
            appointments with stylists and make orders for food from local
            restaurants. Users can also engage with other users and merchants,
            follow their favorite stylists and restaurants, and even earn money
            through an affiliate program. visit beta:
            <Link
              className="text-secondary-900 underline"
              href="https://uzoori.app"
            >
              uzoori.app
            </Link>{" "}
            powered by Nextjs.
          </p>
          <div className="my-5">
            <Link
              className="primary-gradient text-primary-900 font-medium p-3 rounded-md"
              href="/projects"
            >
              View All projects
            </Link>
          </div>
        </div>
        <div className="w-[300px] h-[180px]">
          <img src="/uzoori.png" />
        </div>
      </section> */}
      {/* <section className="px-20 py-36 ">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-36">
          {contacts.map((contact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-3 items-center text-white"
              >
                <div className="bg-primary-500 text-secondary-900 w-[70px] h-[70px] rounded-full flex justify-center items-center mb-8">
                  {contact.icon}
                </div>
                <h4 className="font-semibold text-base">{contact.label}</h4>
                <p className="text-sm">{contact.value}</p>
              </div>
            );
          })}
        </div>
      </section> */}
      <footer className="bg-primary-900">
        <p className="text-white text-sm text-center py-10">
          All copyright reserved © Lutroo 2024
        </p>
      </footer>
    </div>
  );
}
