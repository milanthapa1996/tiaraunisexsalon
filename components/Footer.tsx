import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#CCA690]">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              height={100}
              width={80}
              quality={100}
              className="pt-7 rounded-3xl"
              suppressHydrationWarning
            />
          </Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4 *:font-medium">
            <Link
              href="/"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Home"
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              href="#about"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="About"
            >
              {" "}
              About{" "}
            </Link>

            <Link
              href="#services"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600"
              aria-label="Services"
            >
              {" "}
              Services{" "}
            </Link>
            <Link
              href="#gallery"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600"
              aria-label="Gallery"
            >
              {" "}
              Gallery{" "}
            </Link>
            <Link
              href="#teams"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Teams"
            >
              {" "}
              Teams{" "}
            </Link>
            <Link
              href="#contact-us"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Contact"
            >
              {" "}
              Contact Us{" "}
            </Link>
            <Link
              href="/privacy-policy"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Contact"
            >
              {" "}
              Privacy Policy{" "}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Contact"
            >
              {" "}
              Terms & Conditions{" "}
            </Link>
            <Link
              href="/disclaimer"
              className="mx-4 text-sm text-white transition-colors duration-300 hover:text-slate-600 "
              aria-label="Contact"
            >
              {" "}
              Disclaimer{" "}
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-50">
            © Copyright 2024. All Rights Reserved.
          </p>

          <ul className="flex items-center justify-start space-x-4">
            <li>
              <Image
                src={"/fb.svg"}
                alt="Facebook Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={"/insta.svg"}
                alt="Instagram Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={"/twt.svg"}
                alt="twitter Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={"/whatsapp.svg"}
                alt="whatsapp Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src={"/yt.svg"}
                alt="youtube Icon"
                width={20}
                height={20}
                className="rounded-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
