import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Count from './Components/Count'
import Footer from './Components/Footer'
import ClassCount from './Components/ClassCount'

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/count' element={<Count/>}/> */}
        <Route path='/count' element={<ClassCount/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
