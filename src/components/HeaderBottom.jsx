import React from 'react'

const HeaderBottom = () => {
  return (
    <div>
      <section>
        <div className="items-center justify-center flex bg-bottomHeader w-full bg-no-repeat bg-cover h-[80vh] bg-center">
          <div className="absolute gap-20 text-center font-main text-[white] max-w-xs flex items-center flex-col">
            <div>
              <h1 className=" text-[4vw] uppercase font-bold lg:text-[8vw]">Домашний персонал без посредников</h1>
              <p className="text-[1vw] font-light lg:text-[2vw]">Фотографии вдохновляющие миллионы людей по всему свету</p>
            </div>
            <button className='bg-[#e09a8e] hover:bg-[#fa9684] duration-300 rounded-full px-7 py-3 text-[#fff] text-[17px]'>
              <p className="text-lg">Подробнее</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeaderBottom