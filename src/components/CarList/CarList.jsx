import React from "react";
// import whiteCar from "../../assets/white-car.png";
// import car2 from "../../assets/car5.png";
// import car3 from "../../assets/car6.png";
import { IoStar } from "react-icons/io5";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image:
      "https://img.freepik.com/free-photo/overhead-view-crisis-grey-backdrop_23-2147892182.jpg?t=st=1713175803~exp=1713179403~hmac=4cafc5f9a1f2c784206eb0a1b4c35e3564c9e8b01f7a0a91eecafc027586298b&w=1380",
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image:
      "https://www.stothmarta.com/wp-content/uploads/2018/11/BCCH-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses.jpg",

    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image:
      "https://www.stothmarta.com/wp-content/uploads/2018/11/Wama-Mont-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses.jpg",
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="mb-3 font-serif text-3xl font-semibold sm:text-4xl"
        >
          MEDIA{" "}
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="pb-10 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="relative p-3 space-y-3 border-2 border-gray-300 hover:border-primary rounded-xl group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="font-semibold text-primary">{data.name}</h1>
                  <div className="flex items-center justify-between text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="absolute top-0 text-xl font-semibold left-3">
                  <IoStar /> <IoStar className="float-left" />
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid mt-8 place-items-center">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
