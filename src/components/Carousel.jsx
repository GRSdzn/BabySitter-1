import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, animateScroll as scroll } from "react-scroll";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove the arrow navigation buttons
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000 // Set autoplay speed to 5000 milliseconds (5 seconds)
  };

  return (
    <>
      <section className="absolute left-0 top-[25vh] bottom-0 right-0 gap-20 text-center font-main text-[white] flex items-center flex-col z-10">
        <div className="max-w-[600px]">
          <div>
            <h1 className=" text-[60px] uppercase font-bold lg:text-[40px]">Домашний персонал без посредников</h1>
            <p className="text-[20px] font-light lg:text-[15px]">Фотографии вдохновляющие миллионы людей по всему свету</p>
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
            <button className='bg-[#e09a8e] hover:bg-[#fa9684] duration-300 rounded-full px-7 py-3 mt-8 text-[#fff] text-[17px]'>
              <p>Подробнее</p>
            </button>
          </Link>
        </div>
      </section>
      <Slider {...settings}>
        <div>
          <div className="items-center justify-center flex bg-sliderOne w-full bg-no-repeat bg-cover h-[80vh] bg-center" />
        </div>
        <div>
          <div className="items-center justify-center flex bg-sliderTwo w-full bg-no-repeat bg-cover h-[80vh] bg-center" />
        </div>
        <div>
          <div className="items-center justify-center flex bg-sliderThree w-full bg-no-repeat bg-cover h-[80vh] bg-center" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
