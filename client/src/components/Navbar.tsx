/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useMediaQuery } from "../utils/MobileDetector";

const Navbar: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 880px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBar = (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((navLink) => (
        <li
          key={navLink.id}
          className={`${
            activeTab === navLink.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActiveTab(navLink.title)}
        >
          <a href={`#${navLink.id}`}>{navLink.title}</a>
        </li>
      ))}
    </ul>
  );

  const mobileNavButton = (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={(toggleMenu ? close : menu) as string}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggleMenu(!toggleMenu)}
      />

      <div
        className={`${
          !toggleMenu ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                activeTab === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggleMenu(!toggleMenu);
                setActiveTab(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-centre max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActiveTab("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo as string}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shane Williams &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
      </div>
      {isMobile ? mobileNavButton : navBar}
    </nav>
  );
};

export default Navbar;
