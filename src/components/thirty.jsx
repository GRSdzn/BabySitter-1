import React, { useState } from 'react';
import emailjs, { send } from 'emailjs-com';
import { ThirtyTitle } from '../styles/styleTexts'

export const Thirty = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_ky1eo8a',
      'template_0ivmbwt',
      toSend,
      'n9MeVZDmV92dIc-m3'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="my-[140px] bg-blockThirty bg-no-repeat bg-cover bg-center flex justify-center sm:bg-none" id="contacts">
      <div className="bg-[#fff] rounded-md w-[550px] p-8 m-20 shadow-md shadow-gray-400 sm:m-0">
        <div>
          <h1 className={ThirtyTitle}>У вас остались вопросы?</h1>
          <p className="font-light text-[15px] mt-4 sm:text-center">Просто напишите нам, мы будем рады ответить на ваши вопросы.</p>
        </div>
        <form onSubmit={onSubmit} className="my-8 leading-9">
          <div>
            <p className="py-2 text-[15px]">Имя</p>
            <input
              type="text"
              name='from_name'
              placeholder="Введите ваше имя"
              value={toSend.from_name}
              onChange={handleChange}
              className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Электронная почта</p>
            <input
              type="text"
              name='to_name'
              placeholder="Ваша электронная почта"
              value={toSend.to_name}
              onChange={handleChange}
              className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Телефон</p>
            <input
              type="text"
              name='reply_to'
              value={toSend.reply_to}
              onChange={handleChange}
              placeholder="Формат +7 999 777 00 00"
              className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Сообщение</p>
            <textarea
              type="text"
              maxLength="80"
              name='message'
              value={toSend.message}
              onChange={handleChange}
              placeholder="Ваше сообщение (Максимум 80 символов)"
              className="resize-none w-full h-[200px] px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <button type="submit" value="Send Request" className='bg-[#e09a8e] hover:bg-[#fa9684] duration-300 rounded-full px-7 py-3 text-[#fff] text-[17px]'>Отправить</button>
        </form>
      </div>

    </section>
  )
}
