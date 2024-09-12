"use client";

import Link from "next/link";

import { AlignRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { Router } from "next/router";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOn, setIsMenuOn] = useState(false);

  const links = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contacts", link: "/contacts" },
  ];

  useEffect(() => {
    setIsMenuOn(false);
  }, [pathname]);

  const { scrollYProgress } = useScroll();

  const router = useRouter()

  return (
    <div className="fixed top-0 w-full bg-white">
      <motion.div
        style={{ height: 6, width: "100vw", scaleX: scrollYProgress }}
        className="h-2 fixed top-0 left-0 right-0 z-[1000] bg-primary-900"
      ></motion.div>
      <section className=" flex items-center justify-between max-w-[90vw] mx-auto lg:py-5 py-4 ">
        <img
          src="/logo_accent.svg"
          alt="logo"
          className="w-[140px] h-[50px] lg:h-[60px] lg:w-[220px] object-contain cursor-pointer"
          onClick={()=>router.push("/")}
        />
        {/* <h1 className="text-red-600 text-xl">LIGHTHOUZE FILMS</h1> */}
        <div className="hidden lg:flex ">
          <ul className="flex gap-10 font-medium text-md text-primary-900">
            {links.map((link, i) => {
              return (
                <Link href={link.link} key={i}>
                  <li
                    className={clsx(
                      "cursor-pointer py-3",
                      pathname === link.link &&
                        "border-b-2 border-secondary-900"
                    )}
                  >
                    {link.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {isMenuOn && (
          <div className="flex flex-col gap-4 lg:hidden absolute z-50 bg-primary-900 top-0 h-screen w-[80vw] right-0 p-10">
            <div className="text-white ">
              <X
                className="cursor-pointer"
                onClick={() => {
                  setIsMenuOn(false);
                }}
              />
            </div>
            <ul className="flex flex-col gap-10 font-medium text-lg text-gray-100">
              {links.map((link, i) => {
                return (
                  <Link href={link.link} key={i}>
                    <li
                      className={clsx(
                        "cursor-pointer px-3",
                        pathname === link.link &&
                          "border-l-2 border-secondary-900"
                      )}
                    >
                      {link.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
        <div className="lg:hidden flex text-primary-900">
          <button
            onClick={() => {
              setIsMenuOn(!isMenuOn);
            }}
          >
            <AlignRight />
          </button>
        </div>
      </section>
    </div>
  );
}
