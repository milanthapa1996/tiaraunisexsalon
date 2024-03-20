import Image from "next/image";

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
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-50" id="services">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Services
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative">What We Offer ?</span>
          </h2>
          <p className="mb-9 text-base leading-relaxed text-body-color">
            At Tiara Unisex Salon, we offer a comprehensive range of hair and
            beauty services designed to enhance your natural beauty and boost
            your confidence.
          </p>
        </div>
      <div className="flex items-center flex-wrap justify-start">
        {Services.map((service, index) => (
          <div className="w-full px-4 md:w-1/2 xl:w-1/3" key={index}>
            <div className="mx-auto mb-10 w-full max-w-[370px]">
              <div className="relative h-72 overflow-hidden rounded-lg">
                <Image
                  src={service.imgSrc}
                  alt="service img"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-0 w-full text-center">
                  <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                    <h3 className="text-base font-semibold text-dark dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-body-color dark:text-dark-6">
                      On-Site / On-Demand
                    </p>
                    <div>
                      <span className="absolute bottom-0 left-0">
                        <svg
                          width={61}
                          height={30}
                          viewBox="0 0 61 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx={16}
                            cy={45}
                            r={45}
                            fill="#13C296"
                            fillOpacity="0.11"
                          />
                        </svg>
                      </span>
                      <span className="absolute right-0 top-0">
                        <svg
                          width={20}
                          height={25}
                          viewBox="0 0 20 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="0.706257"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 0.706257 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 6.39669 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 12.0881 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="24.3533"
                            r="0.646687"
                            transform="rotate(-90 17.7785 24.3533)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 0.706257 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 6.39669 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 12.0881 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="18.6624"
                            r="0.646687"
                            transform="rotate(-90 17.7785 18.6624)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 0.706257 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 6.39669 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 12.0881 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="12.9717"
                            r="0.646687"
                            transform="rotate(-90 17.7785 12.9717)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 0.706257 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 6.39669 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 12.0881 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="7.28077"
                            r="0.646687"
                            transform="rotate(-90 17.7785 7.28077)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="0.706257"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 0.706257 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="6.39669"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 6.39669 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="12.0881"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 12.0881 1.58989)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="17.7785"
                            cy="1.58989"
                            r="0.646687"
                            transform="rotate(-90 17.7785 1.58989)"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
