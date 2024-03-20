"use client";
import React, { useState, useEffect } from "react";
import { ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array ensures the effect runs only once

  const dayOfWeek = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const date = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="h-6 max-w-7xl mx-auto bg-slate-600 flex items-center justify-between px-3">
      <div className="flex items-center text-xs font-medium text-white">
        <ClockIcon className="h-4 w-4 mr-2" />
        <span suppressHydrationWarning>
          {dayOfWeek} | {date} | {time}
        </span>
      </div>
      <ul className="hidden md:flex items-center justify-start space-x-4">
        <li>
          <Image
            src={"/fb.svg"}
            alt="Facebook Icon"
            width={15}
            height={20}
            className="rounded"
          />
        </li>
        <li>
          <Image
            src={"/insta.svg"}
            alt="Instagram Icon"
            width={15}
            height={20}
            className="rounded"
          />
        </li>
        <li>
          <Image src={"/twt.svg"} alt="twitter Icon"
            width={15}
            height={20}
            className="rounded" />
        </li>
        <li>
          <Image
            src={"/whatsapp.svg"}
            alt="whatsapp Icon"
            width={15}
            height={20}
            className="rounded"
          />
        </li>
        <li>
          <Image src={"/yt.svg"} alt="youtube Icon"
            width={15}
            height={20}
            className="rounded" />
        </li>
      </ul>
    </div>
  );
};
