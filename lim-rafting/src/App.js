import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ponuda from './components/pages/Ponuda';
import Kontakt from './components/pages/Kontakt';
import Prijava from './components/pages/Prijava';
import React from 'react';
import './App.css';

function App()
{
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={Home()} />
          <Route path='/kontakt' element={Kontakt()} />
          <Route path='/ponuda' element={Ponuda()} />
          <Route path='/prijava' element={Prijava()} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
