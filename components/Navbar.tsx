"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto sticky inset-0 z-50 bg-white shadow-md pr-2">
      {/* Menu items for larger screens */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          height={100}
          width={120}
          quality={100}
          className="pt-10"
        />
      </Link>
      <div className="hidden md:inline-block">
        <ul className="flex items-center space-x-4 *:font-medium *:tracking-tight hover:*:bg-slate-100 *:px-2 *:py-1 *:rounded-lg *:cursor-pointer">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/#about"}>
            <li>About</li>
          </Link>
          <Link href={"/#services"}>
            <li>Services</li>
          </Link>
          <Link href={"/#gallery"}>
            <li>Gallery</li>
          </Link>
          <Link href={"/#teams"}>
            <li>Teams</li>
          </Link>
          <Link href={"/#contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex  space-x-4 items-center">
        <Link
          href={"#contact-us"}
          className="bg-[#CCA690] hover:bg-[#daa484] p-2 rounded-sm text-white flex items-center w-fit group shadow-sm shadow-[#CCA690]"
        >
          BOOK AN APPOINTMENT{" "}
          <ArrowRightIcon className="h-6 w-6 ml-2 group-hover:translate-x-1 duration-300" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          variant={"outline"}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerMenuIcon className="h-4 w-4 text-slate-700" />
        </Button>
      </div>
      {/* Mobile menu, slide from the left */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-50 transform z-[100] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex  items-center justify-between h-14 border-b border-white px-4 bg-white">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold">Tiara Unisex Salon</span>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            variant={"outline"}
            className="bg-slate-50 text-gray-700 inline-flex items-center justify-center p-4 rounded-md hover:text-gray-500"
            aria-label="Close menu"
          >
            <Cross1Icon className="w-4 h-4 text-slate-700" />
          </Button>
        </div>
        {/* Navigation links for mobile */}
        <div className="p-4 space-y-2 flex flex-col justify-center items-start bg-white">
          <Link
            href="/"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#gallery"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/#teams"
            className="text-sm font-medium border-b w-full py-3"
            onClick={() => setIsOpen(false)}
          >
            Teams
          </Link>
          <Link href="/#contact-us" className="text-sm font-medium w-full py-3" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>
        <div className="p-4">
          <ul className="grid grid-cols-2 gap-4 font-medium">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/disclaimer"
              className="text-sm font-medium w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Disclaimer
            </Link>
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Follow Us
          </h1>
          <ul className="flex items-center justify-start space-x-4">
            <li>
              <Image
                src={"/fb.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/insta.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/twt.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/whatsapp.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
            <li>
              <Image
                src={"/yt.svg"}
                alt="Facebook Icon"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
