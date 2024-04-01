import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUP from './pages/SignUP'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
        <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path = "/about" element= {<About />} />
        <Route path = "/sign-in" element= {<SignIn />} />
        <Route path = "/sign-up" element= {<SignUP />} />
        <Route path = "/dashboard" element= {<Dashboard />} />
        <Route path = "/projects" element= {<Projects />} />
        </Routes>
      
      
    </BrowserRouter>
   
  )
}