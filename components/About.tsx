import Image from "next/image";
import { ScissorsIcon,LayersIcon, GearIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            About Us
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
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{" "}
          to Tiara Unisex Salon
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Discover the perfect blend of style, comfort, and expertise at Tiara
          Unisex Salon. With a team of talented stylists and a commitment to
          excellence, we're here to make you look and feel your best.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <ScissorsIcon className="h-5 w-5"/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Expert Stylists</h6>
              <p className="text-sm text-gray-900">
                Our team of experienced stylists is dedicated to providing
                personalized services tailored to your unique needs and
                preferences.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <LayersIcon className="h-5 w-5"/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Luxurious Facilities
              </h6>
              <p className="text-sm text-gray-900">
                Relax and unwind in our modern and inviting salon environment,
                equipped with state-of-the-art amenities for your comfort.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <GearIcon className="h-5 w-5"/>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Exceptional Service
              </h6>
              <p className="text-sm text-gray-900">
                Experience the highest level of service and attention to detail
                from our friendly and professional staff members.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative w-full h-56 col-span-2">
            <Image src={"/abt1.png"} alt="about img" fill className="object-cover rounded-md shadow-lg shadow-[#CCA690]"/>
          </div>

          <div className="relative w-full h-48">
            <Image src={"/abt2.jpg"} alt="about img" fill className="object-cover rounded-md shadow-lg shadow-[#CCA690]"/>
          </div>
          <div className="relative w-full h-48">
            <Image src={"/abt3.jpg"} alt="about img" fill className="object-cover rounded-md shadow-lg shadow-[#CCA690]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
