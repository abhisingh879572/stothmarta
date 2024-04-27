import React, { useEffect, useState } from "react";
// import carPng from "../../assets/car.png";
// import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";
import Services from "../Services/Services";
import CarList from "../CarList/CarList";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";
import Gmail from "../Gmail/Gmail";
const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  const images = [
    "https://img.freepik.com/free-photo/front-view-young-lady-white-t-shirt-posing-smiling-white_140725-16812.jpg?t=st=1714135261~exp=1714138861~hmac=4581c4e8c8f56949ce48cedc1b07f3f0e682fc4143c5779c33bc3a0039e47b81&w=1380",
    "https://img.freepik.com/free-photo/closeup-portrait-young-happy-woman-with-points-up-sign-white-shirt_186202-4379.jpg?t=st=1714134932~exp=1714138532~hmac=9d6cbbe6101fbea3254d5ced8df7c6f65db0216317b8cdd47e77dd3a3b5ac0a5&w=826",
    "https://img.freepik.com/free-photo/woman-with-digital-tablet-cafe_23-2147778648.jpg?t=st=1714119529~exp=1714123129~hmac=32d42c04ebb59c4655c3f0d0ba411dcaef436d01bd72ca2338d2a5b56a3805e7&w=740",
    "https://www.stothmarta.com/wp-content/uploads/2019/02/Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-5.png",
  ];

  let currentIndex = 0;
  let intervalId;

  useEffect(() => {
    const sliderImage = document.getElementById("sliderImage");

    // Function to change images
    const changeImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      sliderImage.src = images[currentIndex];
    };

    // Set interval to change images
    intervalId = setInterval(changeImage, 1500);

    // Clear interval when the component is unmounted or refreshed
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once, when the component mounts

  const CarPng =
    "https://img.freepik.com/free-photo/people-working-with-documents-laptop_23-2147656651.jpg?t=st=1713175101~exp=1713178701~hmac=9dcc78998e84b140fadf95f46d4e6ff5f8624a34afc5a7488b236b82b248447b&w=1380";
  const carPng =
    "https://www.stothmarta.com/wp-content/uploads/2019/02/Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-5.png";

  const yellowCar =
    "https://img.freepik.com/free-photo/portrait-spain-football-fan-woman-support-spain-national-team-white-background-football-fans-concept_231208-7200.jpg?t=st=1714125936~exp=1714129536~hmac=50d4de6ddf700047fe36b264c2ce5222ec574dac23d69650b8bbb72a744ea0d6&w=1380";
  return (
    <div className="duration-300 dark:bg-black dark:text-white ">
      <div className="container min-h-[620px] flex relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              id="sliderImage"
              src={images[currentIndex]}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[400px] ]"
            />
          </div>

          <div className="order-2 space-y-5 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              className="font-serif text-2xl uppercase text-primary"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="font-serif text-5xl font-semibold lg:text-7xl"
            >
              YOU CAN DO MORE
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="px-6 py-2 text-black transition duration-500 rounded-md bg-primary hover:bg-primary/80"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="pb-6 space-y-5 sm:p-16">
              <h1
                data-aos="fade-up"
                className="font-serif text-3xl font-bold uppercase sm:text-4xl"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Let me assist you to Identify, Clarify and Create a vision for
                your future . Do you want to constructively deal with the
                changes from your personal and/or professional life? Do you want
                to reach a greater level of personal or professional attainment?
              </p>
              <p data-aos="fade-up">
                Do you want to know who you really are and how many goals you
                can achieve? Let me assist you to Identify, Clarify and Create a
                vision for your future based on your Goals, Personality and
                Vision.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <CarList />
      <AppStoreBanner />
      <Gmail />
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-4 mt-5">
            <div className="col-span-1"></div>
            <div className="col-span-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Life-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center text-white">Life Coaching</h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Neuro-Linguistic-Programming-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center text-white">
                    NLP (Neuro-Linguistic Programming)
                  </h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Business-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center text-white">
                    Career Coaching
                  </h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Relationship-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center text-white">
                    Relationship Coaching
                  </h4>
                </div>
                {/* Repeat for other images */}
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
