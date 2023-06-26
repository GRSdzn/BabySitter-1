import React from 'react'
import firstImg from '../img/niania.jpg'
import secondImg from '../img/nyanya2.png'
import thirtyImg from '../img/123.png'
import { DescriptionFirst, MainTitle, SecondTItle, ThirtyTitle } from '../styles/styleTexts';
import { motion } from "framer-motion";

export const First = () => {
  return (
    <section className="py-[140px] grid" id='more'>
      <div className="leading-[80px] text-center">
        <h1 className={MainTitle}>О нас</h1>
        <div className="py-2 justify-center flex">
          <div className="border-b-2 border-solid rounded-full w-40 h-1 border-[#fa9684]" />
        </div>
      </div>

      <div className="leading-8">
        <div className="grid grid-flow-col row-span-2 gap-8 py-8 items-center lg:grid-flow-row    delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400">
          <div>
            <img src={firstImg} alt="img" className="max-w-[550px] w-full text-[20px]" />
          </div>
          <div>
            <h1 className={ThirtyTitle}>Кто такие няни?</h1>
            <p className={DescriptionFirst}>Чаще всего, это молодые девушки и юноши, которым доставляет удовольствие проводить время с детьми. Рисовать, играть, петь и танцевать, заниматься спортом.Няни обычно приглашают на несколько часов ежедневно или разово, когда появились срочные дела. Няня должна быть готова к выполнению различных задач, в зависимости от нужд родителей, возраста и потребностей детей. </p>
          </div>
        </div>

        <div className="grid grid-flow-col row-span-2 gap-8 py-8 items-center lg:grid-flow-row">
          <div className="lg:order-[1]">
            <h1 className={ThirtyTitle}>Почему 90% мам возвращаются в наш сервис</h1>
            <p className={DescriptionFirst}>Сервис дарит спокойствие. Быстрый подбор няни, с которой я могу спокойно оставить ребенка.«Cразу связываются менеджеры, понравились няни, на все вопросы отвечают. Сервис 10/10»«Cразу связываются менеджеры, понравились няни, на все вопросы отвечают. Сервис 10/10»</p>
          </div>
          <div className="w-full">
            <img src={secondImg} alt="img" className="max-w-[550px] w-full text-[20px]" />
          </div>
        </div>
      </div>

      <div className="grid grid-flow-col row-span-2 gap-8 py-8 items-center lg:grid-flow-row-dense ">
        <div className="w-full">
          <img src={thirtyImg} alt="img" className="max-w-[550px] w-full text-[20px]" />
        </div>
        <div>
          <h1 className={ThirtyTitle}>Какие преимущества заказать няню через сервис?</h1>
          <p className={DescriptionFirst}>Во-первых, все этапы подбора бебиситтера мы полностью берем на себя без лишней комиссии.
            Во-вторых, с нами вы никогда не столкнетесь с непрофессионалами.
            В-третьих, оформляя заказ через наш сервис, вы можете быть уверены, что ситтер придет к вам в назначенное время. В случае форс-мажора, мы сможем быстро подобрать замену и ваши планы не будут отменены.
            Кроме того, мы закрываем ситтерам доступ к заказам, если договоренности с клиентом проходят вне сервиса. Пожалуйста, помните об этом. Благодарим, что уважаете правила сервиса. </p>
        </div>
      </div>

    </section>
  )
}
