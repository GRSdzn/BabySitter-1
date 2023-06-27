import React from 'react'
import { LinkStyle, LinkTitle } from '../styles/styleTexts'
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className=" px-[10vw] py-4">
      <div className="border-b-2 border-solid rounded-full w-full h-1 border-[#fa9684] my-8" />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2 gg:grid-cols-1">
          <div>
            <h2 className={LinkTitle}>Компания</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <a href="#" className={LinkStyle} onClick={scrollToTop}>Главная</a>
              </li>
              <li className="mb-4">
                <Link
                  activeClass="active"
                  to="more"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={300}
                  className={LinkStyle}
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={LinkTitle}>Связь с нами</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <b className={LinkStyle}>Номер телефона: 8 988 (412) 12 23</b>
              </li>
              <li className="mb-4">
                <b className={LinkStyle}>Email: baby_nanya@mail.ru</b>
              </li>
              <li className="mb-4">
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={300}
                  className={LinkStyle}
                >
                  Остались вопросы ? Свяжитесь с нами
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="/">BabyNynya</a>. All Rights Reserved.
          </span>
        </div>
      </div>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A719fe180886abd635419f04e590037e8d3ce13eafc2257b00e493c612dc7f7f7&amp;source=constructor" width="100%" height="287" cancelable='false' frameBorder="0" className="rounded-md"></iframe>
    </footer>
  )
}

export default Footer