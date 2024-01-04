import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
// import Contact from './Contact.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        {/* <Route path='/About' element={<About/>}/> */}
        {/* <Route path='/Contact' element={<Contact/>}/> */}
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  </React.StrictMode>
)
