import React from 'react';
import logo from '../img/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

  return (
    <>
      <div className="font-main font-medium flex justify-center py-2 w-full bg-[#ffffff69] text-[#2c2c2c] duration-300 items-center flex-wrap">
        <ul className="flex px-24 duration-300">
          <Link
            activeClass="active"
            to="more"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out"
          >
            Подробнее
          </Link>
        </ul>
        <div className="w-[50px]">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="flex px-24">
          <li>
            <Link
              activeClass="active"
              to="Thirty"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
