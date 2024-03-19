import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Services = () => {
    const Services = [
        {
          title: "Haircuts and Styling",
          imgSrc: "/service1.png",
          services: [
            "Precision Haircut",
            "Styling",
            "Blowout",
            "Hair Extensions",
            "Bridal Hair",
            "Updos",
          ],
        },
        {
          title: "Hair Coloring and Treatments",
          imgSrc: "/service2.png",
          services: [
            "Full Color",
            "Highlights",
            "Balayage",
            "Color Correction",
            "Keratin Treatment",
            "Deep Conditioning",
          ],
        },
        {
          title: "Facials and Skincare",
          imgSrc: "/service3.png",
          services: [
            "Custom Facial",
            "Anti-Aging Treatment",
            "Acne Treatment",
            "Microdermabrasion",
            "Chemical Peel",
            "Hydrating Mask",
          ],
        },
        {
          title: "Waxing and Hair Removal",
          imgSrc: "/service4.png",
          services: [
            "Eyebrow Waxing",
            "Lip Waxing",
            "Chin Waxing",
            "Brazilian Wax",
            "Leg Waxing",
            "Underarm Waxing",
          ],
        },
        {
          title: "Manicures and Pedicures",
          imgSrc: "/service5.png",
          services: [
            "Classic Manicure",
            "Gel Manicure",
            "Acrylic Nails",
            "Spa Pedicure",
            "Paraffin Treatment",
            "Nail Art",
          ],
        },
        {
          title: "Eyelash Extensions",
          imgSrc: "/service6.png",
          services: [
            "Classic Extensions",
            "Volume Extensions",
            "Hybrid Extensions",
            "Lash Lift",
            "Lash Tint",
            "Eyelash Removal",
          ],
        },
      ];
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Services
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative">What We Offer ?</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At Tiara Unisex Salon, we offer a comprehensive range of hair and
            beauty services designed to enhance your natural beauty and boost
            your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12 lg:mt-16 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map((data, index) => (
            <div key={index} className="relative h-80 w-96  cursor-pointer">
              <Image
                src={data.imgSrc}
                alt={`${data.title}-image`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/10"></div>
              <div className="absolute top-0 p-2">
                <h3 className="font-bold text-lg tracking-wider uppercase text-white">
                  {data.title}
                </h3>
              </div>
              <ul className="absolute bottom-0 p-2 w-full">
                {data.services.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center py-1 space-x-1 text-xs font-medium text-white"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                    {item}
                  </li>
                  ))}

              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            title=""
            className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            {" "}
            Check all services{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
