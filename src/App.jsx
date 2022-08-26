import React from 'react';
import './assets/css/main.css';
import Header from './components/Header';
import Herobanner from './components/Herobanner';


const App = () => {
  return (
    <div className='main-wrapper'>
      <Header/>
      <Herobanner/>
    </div>
  )
}

export default App