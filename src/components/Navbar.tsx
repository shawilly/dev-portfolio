/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useMobileDetection } from "../utils/MobileDetector";

const Navbar: React.FC<{}> = () => {
  const [active, setActive] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  const { isMobile } = useMobileDetection();

  const addLinks: React.FC<boolean | undefined> = (hamburger = true) => {
    const ulClassName = `list-none ${
      !hamburger
        ? "hidden sm:flex flex-row gap-10"
        : "flex justify-end items-start flex-col gap-4"
    }`;

    const navLink: React.JSX.Element[] = navLinks.map((link) => {
      const liClassName = `${
        active === link.title ? "text-white" : "text-secondary"
      } ${
        !hamburger
          ? "hover:text-white text-[18px] font-medium cursor-pointer"
          : "font-poppins font-medium cursor-pointer, text-[16px]"
      }`;
      return (
        <li
          key={link.id}
          className={liClassName}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      );
    });

    return <ul className={ulClassName}>{navLink}</ul>;
  };

  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-centre max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
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
        {addLinks(isMobile)}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? (close as string) : (menu as string)}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {addLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
