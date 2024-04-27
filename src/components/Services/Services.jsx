import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import Gellery1 from "../Gallery/Gellery1";
import LeadershipCoaching from "../LeadershipCoaching/LeadershipCoaching";
const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl duration-300 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl duration-300 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl duration-500 text-primary group-hover:text-black" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="font-serif text-3xl font-semibold text-center sm:text-4xl"
            >
              BUSINESS CLIENTS, CSR
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="p-4 space-y-3 text-center text-white duration-300 rounded-lg card group sm:space-y-6 sm:py-16 bg-dark hover:bg-primary hover:text-black"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block py-3 text-lg font-semibold duration-300 text-primary group-hover:text-black"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
        <LeadershipCoaching />
        <Gellery1 />
      </div>
    </>
  );
};

export default Services;
