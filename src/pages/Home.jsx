import React from 'react'
import Header from './../components/header';
import HeaderBottom from './../components/HeaderBottom';
import { First } from './../components/first';
import { Second } from './../components/seconds';
import { Thirty } from './../components/thirty';
import BookSource from '../components/BookSource';
import Sales from './../components/Sales';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Carousel />
      {/* <HeaderBottom /> */}
      <div className="px-[10vw] font-main">
        <First />
        <Second />
        <BookSource />
        <Thirty />
        <Sales />
      </div>
    </>
  )
}

export default Home;