import { ArrowRightIcon, ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const openingHours = [
    { day: "Sunday", time: "10:00 AM - 6:00 PM" },
    { day: "Monday", time: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
    { day: "Thursday", time: "9:00 AM - 8:00 PM" },
    { day: "Friday", time: "9:00 AM - 9:00 PM" },
    { day: "Saturday", time: "Closed" },
  ];

  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <section className="relative">
      <Image
        src="/bg.jpg"
        alt="bg image"
        fill
        className="absolute inset-0 object-cover"
      />
      <div className="relative bg-slate-700 bg-opacity-40">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold text-white leading-tight sm:text-5xl sm:leading-none">
                Welcome to <br className="hidden md:block" />
                Tiara Unisex Salon
              </h2>
              <p className="max-w-xl mb-8 text-base text-slate-100 md:text-lg">
                Discover the perfect blend of style, comfort, and expertise at
                Tiara Unisex Salon. With a team of talented stylists and a
                commitment to excellence, we're here to make you look and feel
                your best.
              </p>
              <Link
                href={"#"}
                className="bg-[#CCA690] hover:bg-[#daa484] border border-white p-4 rounded-sm text-white flex items-center w-fit group shadow-lg shadow-[#CCA690]"
              >
                BOOK AN APPOINTMENT <ArrowRightIcon className="h-6 w-6 ml-2 group-hover:translate-x-1 duration-300"/>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10  border-t-8 border-[#CCA690] shadow-[#CCA690]">
                <h3 className="mb-6 text-2xl font-semibold text-center sm:text-3xl flex items-center">
                  Opening Hours <ClockIcon className="h-6 w-6 ml-2" />
                </h3>
                <ul className="list-none">
                  {openingHours.map(({ day, time }) => (
                    <li
                      key={day}
                      className={`flex justify-between p-2 ${
                        currentDay === day
                          ? "bg-indigo-50 text-blue-600 border border-indigo-200 rounded-md"
                          : ""
                      }`}
                    >
                      <span className="font-semibold">{day}:</span>
                      <span className="text-slate-500 font-medium">{time}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic text-slate-500 mt-2">
                  ** Visit Tiara Unisex Salon today and discover why we're the
                  premier destination for all your hair and beauty needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
