import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/IMG-20240311-WA0000 (1).png";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "/services",
    subLinks: [
      { id: 1, name: "BUSINESS ", link: "/services" },
      { id: 2, name: "NLP", link: "/nlp" },
      { id: 3, name: "Organizational Development", link: "/organizational" },
      { id: 4, name: "LifeLisbon", link: "/lifeLisbon" },
      { id: 5, name: "Relationship", link: "/relationship" },
      { id: 6, name: "DataProcessing", link: "/dataprocessing" },
      { id: 6, name: " NLP Hypnosis ", link: "/nlphypnosis" },
    ],
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 4,
    name: "TRAINING",
    link: "/testimonial",
    subLinks: [
      { id: 1, name: "Executive-Coaching ", link: "/testimonial " },
      { id: 2, name: "Business-Mediation   ", link: "/business" },
      { id: 3, name: "Executive", link: "/executive" },
      { id: 4, name: "Leadership", link: "/leadership" },
      { id: 5, name: "TimeNLP", link: "/timenllp" },
      { id: 6, name: "Life Coach Course Malta", link: "/coursemalta" },
    ],
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMouseEnter = (id) => {
    setShowSubMenu(id);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className="relative z-10 w-full duration-300 shadow-md dark:bg-black dark:text-white">
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          <div>
            <span className="sm:scale-125 relative -z-10 max-h-[200px] drop-shadow-[2px 20px 6px]">
              <img src={logo} alt="Logo" className="h-[50px] w-[300px] mt-3" />
            </span>
            <br />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link, subLinks }) => (
                <li
                  key={id}
                  className="relative py-4"
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {subLinks ? (
                    <>
                      <span
                        className="py-2 text-lg font-medium transition-colors duration-500 cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary"
                        onClick={() =>
                          setShowSubMenu(showSubMenu === id ? null : id)
                        }
                      >
                        {name}
                      </span>
                      {showSubMenu === id && (
                        <ul
                          className={`absolute left-0 z-20 py-2 bg-white rounded-md shadow-md top-full dark:bg-gray-800 w-50% col-sm-8`}
                        >
                          {subLinks.map((subLink) => (
                            <li key={subLink.id}>
                              <a
                                href={subLink.link}
                                className="block px-12 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 w-50%"
                                onClick={handleMenuItemClick}
                              >
                                {subLink.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      onClick={handleMenuItemClick}
                      href={link}
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                    >
                      {name}
                    </a>
                  )}
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="transition-all cursor-pointer "
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="transition-all cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
