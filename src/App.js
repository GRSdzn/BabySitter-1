import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
