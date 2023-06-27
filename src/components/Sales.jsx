import React from 'react'
import { MainTitle, FourthTitle } from '../styles/styleTexts'
import rabbitBaby from '../img/rabbit-baby-envelope.svg'
import rabbitGraduate from '../img/rabbit-graduate.svg'
import couple from '../img/couple.svg'
import little from '../img/little.svg'

const Sales = () => {
  return (
    <>
      <section className="my-[140px] flex justify-center flex-col">
        <div className="leading-[80px] text-center">
          <h1 className={MainTitle}>Подберём бебиситтера</h1>
          <div className="py-2 justify-center flex">
            <div className="border-b-2 border-solid rounded-full w-40 h-1 border-[#fa9684]" />
          </div>
          <p className={FourthTitle}>с учетом интересов и особенностей ребенка</p>
        </div>
        <div className="flex justify-between sm:flex-col sm:gap-10 lg:items-center lg:justify-center flex-wrap lg:gap-10">
          <div className="w-80 flex flex-col text-center items-center shadow-md shadow-[#cacacac4] rounded-lg  relative">
            <div className="bg-main w-full rounded-lg flex justify-center py-4 h-36">
              <img src={rabbitBaby} alt="img" />
            </div>
            <h1 className={FourthTitle}>«Няня на час» для самых маленьких</h1>
            <p className='font-main font-light text-[#272727] text-[18px] py-2'>Опытный ситтер для грудных детей и малышей</p>
            <p className="font-main text-[20px] mt-20 font-medium text-main">от 690 ₽/час</p>
          </div>
          <div className="w-80 flex flex-col text-center items-center shadow-md shadow-[#cacacac4] rounded-lg ">
            
            <div className="bg-main w-full rounded-lg flex justify-center py-4 h-36">
              <img src={couple} alt="img" />
            </div>
            
            <h1 className={FourthTitle}>«Няня на час» для дошкольного и школьного возраста</h1>
            <p className='font-main font-light text-[#272727] text-[18px] py-2'>Активный и заботливый ситтер для детей дошкольного и школьного возраста</p>
            <p className="font-main text-[20px] mt-8 font-medium text-main">от 690 ₽/час</p>
          </div>
          <div className="w-80 flex flex-col text-center items-center shadow-md shadow-[#cacacac4] rounded-lg ">
            <div className="bg-main w-full rounded-lg flex justify-center py-4 h-36">
              <img src={rabbitGraduate} alt="img" />
            </div>
            <h1 className={FourthTitle}>«Няня на час» для с педагогическим образованием</h1>
            <p className='font-main font-light text-[#272727] text-[18px] py-2'>Внимательная няня-воспитатель, педагог или со знанием инотранных языков</p>
            <p className="font-main text-[20px] mt-8 font-medium text-main">от 690 ₽/час</p>
          </div>
          <div className="w-80 flex flex-col text-center items-center shadow-md shadow-[#cacacac4] rounded-lg ">
            <div className="bg-main w-full rounded-lg flex justify-center py-4 h-36">
              <img src={little} alt="img" />
            </div>
            <h1 className={FourthTitle}>«Няня на сутки»</h1>
            <p className='font-main font-light text-[#272727] text-[18px] py-2'>Если ситтер нужен разово на 15 и более часов или в течении нескольких дней с проживанием</p>
            <p className="font-main text-[20px] mt-20 font-medium text-main">от 690 ₽/час</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sales