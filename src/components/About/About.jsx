import React from "react";
// import CarPng from "../../assets/car1.png";
import Gallery from "../Gallery/Gallery";
import Gmail from "../Gmail/Gmail";
const About = () => {
  const dilip =
    "https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?t=st=1714026477~exp=1714030077~hmac=b20f86ba61c12d66f9053f36e2a58cafbd306608648bc6ffaf42a9b36af2d639&w=1380";

  const CarPng =
    "https://img.freepik.com/free-photo/people-working-with-documents-laptop_23-2147656651.jpg?t=st=1713175101~exp=1713178701~hmac=9dcc78998e84b140fadf95f46d4e6ff5f8624a34afc5a7488b236b82b248447b&w=1380";
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[1000px] sm:grid sm:place-items-center duration-300">
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
                className="font-serif text-lg text-3xl font-bold uppercase sm:text-4xl"
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

        <p>
          I am human. I love, dream, plan, and make mistakes. I have good days
          and I have days on which I’m learning from my lessons. I have loved
          ones and I have people around me who are envious. There are people who
          love me and ones who hate me. I have followers and I have people who
          are judging me. I have my students and my teachers. I have days when
          my soul is singing from happiness, and I have days when it becomes a
          fountain of sorrow. There are times when my eyes are the stars and
          there are times when they are fire. I’m human. Strong and weak. Mother
          and child. I have my desires and my dreams. I have my plans. I’m
          human. I fell down and stood back up. I flew and swam. I am human. I
          believed and I regretted. I gave to others and got back. I waited and
          I kept others waiting for me. I was hurt and I unintentionally hurt
          others. I’m human. They lied and I lied. I watched and I learned. I
          moved forward curiously. I stopped and then I started to go again.
          Forward. My faith is strong. Most of the times I’m optimistic. Some
          other times, I’m a pessimist. I’m brave. I’m scared. I’m human.
        </p>
      </div>
      <p className="mt-4">I loved and I love you, Human.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <div className="pb-6 space-y-5 sm:p-10">
          <div className="mt-3 about2" data-aos="zoom-in-down">
            <h4
              className="mt-4 text-lg text-center text-red-500 uppercase"
              style={{ fontSize: "30px" }}
            >
              My Clients
            </h4>
            <br />
            <p className="text-base leading-8 tracking-wide text-justify">
              ornare vuiputate printing and There are many variations of
              passages. My Work I coach only outstanding individuals who are
              committed to creating a level of success in their lives that most
              people can only dream about. I adapt my services according to your
              needs, helping you to reach your full potential. If you are
              successful, ambitious, and ready to achieve your next level,
              whether it’s Life Coaching, Business Coaching, or NLP, I am
              convinced you’ll benefit from one of my tailored and specialist
              services. Good communication among family members is an extremely
              important part of a psychologically healthy family. Lack of good
              communication can be extremely detrimental to a family. When
              communication breaks down, especially between a parent and their
              child, troublesome situations may arise. What can be done to
              repair and resolve these situations? Parents-child Mediation may
              be the resolution.
            </p>
            <br />
            <div className="grid grid-cols-12">
              <div className="col-span-7"></div>
              <div className="col-span-4">
                <center>
                  <button data-aos="fade-up" className="button-outline">
                    Get Started
                  </button>
                </center>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>

        <div>
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={dilip}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px 10px 6px rgba(0,0,0,0.50)]"
            />
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default About;
