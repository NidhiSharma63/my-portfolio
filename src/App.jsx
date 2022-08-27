import React from 'react';
import './assets/css/main.css';
import Header from './components/Header';
import Herobanner from './components/Herobanner';
import About from './components/About';

const App = () => {
  return (
    <div className='main-wrapper'>
      <Header/>
      <Herobanner/>
      <About/>
    </div>
  )
}

export default App