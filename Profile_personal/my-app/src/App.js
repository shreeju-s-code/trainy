import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { useEffect } from 'react';
import Timer from './Component/UseEffect';
import Content from './Component/Content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './Component/Skills';

function App() {
  return (
    <div className='App'> 
    <BrowserRouter>
      <Routes>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
