import Image from "next/image";
import React from "react";

const Gallery = () => {
  const images = [
    {
      imgUrl: "/service1.png",
    },
    {
      imgUrl: "/abt1.jpg",
    },
    {
      imgUrl: "/service3.png",
    },
    {
      imgUrl: "/abt2.jpg",
    },
    {
      imgUrl: "/service2.png",
    },
    {
      imgUrl: "/abt3.jpg",
    },
  ];
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6" id="gallery">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Gallery
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
            <span className="relative">Beauty</span>
          </span>{" "}
          in Every Frame: Explore Our Gallery
        </h2>
        <p className="mb-9 text-base leading-relaxed text-body-color">
          Dive into a visual showcase of our salon's finest work. Explore
          stunning haircuts, vibrant colors, and flawless makeup looks in our
          curated gallery.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 shadow-lg shadow-[#daa484] hover:scale-105 duration-300 animate-out"
          >
            <Image
              className="object-cover"
              src={image.imgUrl}
              fill
              alt="gallery img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
