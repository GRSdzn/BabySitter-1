import React from 'react'
import './order_css.css'

const Order = () => {
  return (
    <div className="wrapper font-main flex flex-col items-center text-center">
      <div className=" w-[400px]">
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div>
          <h1 className="title_order text-[#4d4d4d] text-[20px] my-3 font-bold">
            Заказ принят
          </h1>
          <div className="description_order text-[#838383] text-sm leading-7 font-light">
            <p>
              Здравствуйте Владислав.
            </p>
            <p>
              Мы получиили ваш заказ! Спасибо что пользуетесь услугами нашего сайта.
            </p>
          </div>
          <div className="my-3" style={'marign-top: 12px marign-bottom: 12px'}>
            <h1 className="title_order">
              Номер заказа № 543
            </h1>
            <p className="text-[#838383] font-light">19.06.2023г.</p>
          </div>
        </div>
        <div className="items-container">
          <h1 className="description_orders text-[#838383] text-sm text-left mb-4 font-light">
            ЗАКАЗЫ
          </h1>
          {/* Товар */}
          <div className="item border-t-[#838383] border-t-2 border-solid text-[#838383] flex justify-between py-2">
            <h1>Заголовок</h1>
            <p>2шт</p>
          </div>
          {/* Товар */}
          <div className="item border-t-[#838383] border-t-2 border-solid text-[#838383] flex justify-between py-2">
            <h1>Заголовок</h1>
            <p>5шт</p>
          </div>
        </div>
        <div>
          <p className="text-[#838383] font-light text-sm leading-7">Когда товар(ы) будут доступны к получению, мы позвоним вам на номер, указанный при регистрации.
            <br />
            С уваженем <a href="https://meatmain.ru/" className="text-[#ff7070]">MeatMain.ru</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Order