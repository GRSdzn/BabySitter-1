import React from 'react'
import clock from '../img/clock.svg'
import rabbit from '../img/rabbit-graduate.svg'
import rabbitHeart from '../img/rabbit-heart.svg'
import rabbitNoCom from '../img/rabbit-no-comission.svg'
import { MainTitle, SecondTItle, DescriptionSecond } from '../styles/styleTexts';


export const Second = () => {
  return (
    <section className="grid">
      <div className="leading-[80px] text-center">
        <span className="text-[#fa9684] text-[100px]">?</span>
        <h1 className={MainTitle}>Почему мы </h1>
        <div className="py-2 justify-center flex">
          <div className="border-b-2 border-solid rounded-full w-40 h-1 border-[#fa9684]" />
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-14">
        <div className="flex flex-col items-center ">
          <img src={clock} alt="img" />
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <h1 className="text-xl font-bold py-4">8 Минут</h1>
            <p className={DescriptionSecond}>Среднее время подбора няни</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={rabbitNoCom} alt="img" />
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <h1 className="text-xl font-bold py-4">0%</h1>
            <p className={DescriptionSecond}>Никаких комиссий и подписок за подбор няни</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={rabbitHeart} alt="img" />
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <h1 className="text-xl font-bold py-4">4,9/5</h1>
            <p className={DescriptionSecond}>Оценка сервиса по версии 1000 клиентов</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={rabbit} alt="img" />
          <div className="flex flex-col items-center text-center max-w-[200px]">
            <h1 className="text-xl font-bold py-4">3</h1>
            <p className={DescriptionSecond}>Этапа отбора бебиситтера, обучение и стажировка до выхода на заказ</p>
          </div>
        </div>

      </div>
    </section>
  )
}
