import React from "react";
import dilip from "../../assets/ImportedPhoto_1712752682250.jpg";
import Businesstrainings from "../Businesstrainings/Businesstrainings";
import LeadershipCoaching from "../LeadershipCoaching/LeadershipCoaching";
import Gmail from "../Gmail/Gmail";
const testimonialData = [
  {
    name: "Dilip kumar",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Manish kumar",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Gaurav Tiwari",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <Businesstrainings />
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="pb-12 space-y-4">
            <p
              data-aos="fade-up"
              className="font-serif text-3xl font-semibold text-center sm:text-4xl"
            >
              UPCOMING EVENTS
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-black sm:grid-cols-2 md:grid-cols-3 dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="p-4 space-y-3 text-center uppercase duration-300 bg-gray-100 rounded-lg card group sm:space-y-6 sm:py-12 dark:bg-white/20"
              >
                <div className="grid place-items-center ">
                  <img src={dilip} alt="" className="w-20 h-20 rounded-full" />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="font-semibold text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <LeadershipCoaching />
      </div>
    </>
  );
};

export default Testimonial;
