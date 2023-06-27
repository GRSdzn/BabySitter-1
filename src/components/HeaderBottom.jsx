import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderBottom = () => {
  return (
    <div>
      <section>
        <div className="items-center justify-center flex bg-bottomHeader w-full bg-no-repeat bg-cover h-[80vh] bg-center">
          <div className="absolute gap-20 text-center font-main text-[white] max-w-xs flex items-center flex-col">
            <div>
              <h1 className="text-[4vw] uppercase font-bold lg:text-[8vw]">Домашний персонал без посредников</h1>
              <p className="text-[1vw] font-light lg:text-[2vw]">Фотографии вдохновляющие миллионы людей по всему свету</p>
            </div>
            <Link
              activeClass="active"
              to="more"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              className="text-lg"
              id='more'>
              <button className='bg-[#e09a8e] hover:bg-[#fa9684] duration-300 rounded-full px-7 py-3 text-[#fff] text-[17px]'>
                <p>Подробнее</p>
              </button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  )
}

export default HeaderBottom