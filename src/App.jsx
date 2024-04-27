import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";

import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Organizational from "./components/Organizational/Organizational";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Relationship from "./components/Relationship/Relationship";
import LifeLisbon from "./components/LifeLisbon/LifeLisbon";
import NLP from "./components/NLP/NLP";
import Executive from "./components/Executive/Executive";
import Business from "./components/Business/Business";
import Timenllp from "./components/TimeNLP/Timenllp";
import Leadership from "./components/Leadership/Leadership";
import DataProcessing from "./components/DataProcessing/DataProcessing";
import Coursemalta from "./components/Coursemalta/Coursemalta";
import NLPHypnosis from "./components/NLPHypnosis/NLPHypnosis";
const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden text-black bg-white dark:bg-black dark:text-white">
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Hero theme={theme} />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/services" element={<Services />} />
          <Route path="/carList" element={<CarList />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/nlp" element={<NLP />} />
          <Route path="/organizational" element={<Organizational />} />

          <Route path="/lifeLisbon" element={<LifeLisbon />} />
          <Route path="/relationship" element={<Relationship />} />
          <Route path="/executive" element={<Executive />} />

          <Route path="/business" element={<Business />} />
          <Route path="/timenllp" element={<Timenllp />} />

          <Route path="/leadership" element={<Leadership />} />
          <Route path="/dataprocessing" element={<DataProcessing />} />

          <Route path="/coursemalta" element={<Coursemalta />} />
          <Route path="/nlphypnosis" element={<NLPHypnosis/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
