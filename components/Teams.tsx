import Image from "next/image";
import React from "react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      title: "CEO & Founder",
      imageSrc: "/team1.webp",
    },
    {
      name: "Bob Smith",
      title: "Hair Artist",
      imageSrc: "/team1.webp",
    },
    {
      name: "Charlie Davis",
      title: "Nail Artist",
      imageSrc: "/team1.webp",
    },
    {
      name: "Bob Smith",
      title: "Hair Artist",
      imageSrc: "/team1.webp",
    },
    {
      name: "Charlie Davis",
      title: "Nail Artist",
      imageSrc: "/team1.webp",
    },
  ];
  return (
    <section id="teams">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Core Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Our Talented</span>
            </span>{" "}
            Team at Tiara Unisex Salon
          </h2>
          <p className="mb-9 text-base leading-relaxed text-body-color">
            Discover the faces behind the magic at Tiara Unisex Salon. Our
            dedicated team of professionals brings passion, skill, and
            creativity to every appointment, ensuring you receive personalized
            service and leave feeling confident and beautiful.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              className="text-center text-gray-500 "
              key={index}
            >
              <Image
                className="mx-auto mb-4 rounded-full shadow-lg shadow-[#daa484]"
                src={member.imageSrc}
                alt="Team Avatar"
                width={200}
                height={128}
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
