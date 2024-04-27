import React from "react";

const Experience = () => {
  return (
    <div className="mt-5 text-white dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 md:grid-cols-8">
          {/* first col */}
          <div className="grid p-4 bg-dark/50 place-items-center">
            <div className="space-y-3 text-center">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="text-xl font-semibold">Years Experience</p>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="p-6 text-center bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="p-6 text-center bg-dark">
              <h1 className="text-3xl font-bold">120+</h1>
              <p>Completed Projects</p>
            </div>
          </div>
          {/* Third col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="p-6 text-center bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="p-6 text-center bg-dark">
              <h1 className="text-3xl font-bold">120+</h1>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
