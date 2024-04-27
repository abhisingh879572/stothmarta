import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="max-w-xl mx-auto space-y-6">
            <h1
              data-aos="fade-up"
              className="font-serif text-2xl font-semibold text-center sm:text-4xl"
            >
              UPCOMING EVENTS
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-5">
              Develop the attitudes and learn the skills of an effective
              professional coach Our life coaching course offers a powerful
              blend of cutting-edge coaching styles delivered in an experiential
              and transformational way so that you not only learn the skills but
              experience them
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
