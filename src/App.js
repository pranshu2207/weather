import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Searchweather from './components/Searchweather';

function App() {
  
  return (
    <div className='wrapper h-[100vh]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/search" element={<Searchweather/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
