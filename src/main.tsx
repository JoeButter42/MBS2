import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
// import Contact from './Contact.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        {/* <Route path='/About' element={<About/>}/> */}
        {/* <Route path='/Contact' element={<Contact/>}/> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
)
