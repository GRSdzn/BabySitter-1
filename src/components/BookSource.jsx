import React from 'react'
import LVPwoman from '../img/lyuda.png'
import { FourthTitle, MainTitle, ThirtyTitle, DescriptionFirst } from '../styles/styleTexts';
const BookSource = () => {
  return (
    <section className="py-[140px] px-[5vw]">
      <div className="leading-[80px] text-center sm:leading-10">
        <h1 className={MainTitle}>Обучаем наших ситтеров по материалам Л.В.Петрановской</h1>
      </div>
      <div className="py-2 justify-center flex">
        <div className="border-b-2 border-solid rounded-full w-40 h-1 border-[#fa9684]" />
      </div>
      <div className="items-center justify-items-center grid grid-flow-row grid-cols-2 sm:grid-cols-1">
        <div>
          <img src={LVPwoman} alt="img" className="rounded-full" />
        </div>
        <div>
          <div>
            <h1 className={FourthTitle}>Самое лучшее, что мы можем сделать для развития своих детей в нежном возрасте – не мешать им играть</h1>
          </div>
          <div className={DescriptionFirst}>
            <p>Людмила Владимировна семейный психолог, педагог, публицист, Лауреат Премии Президента РФ в области образования, основатель Института Развития Семейного Устройства, автор известных книг для родителей.</p>
            <br />
            <p>Психолог в своих материалах обучает модели взаимодействия с ребенком: чем взрослый может помочь ребенку, чтобы он рос и развивался, как научиться ориентироваться в сложных ситуациях, решать конфликты и достойно выходить из них.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSource