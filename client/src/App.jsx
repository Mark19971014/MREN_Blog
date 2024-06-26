import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUP from './pages/SignUP'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import LeetCode from './pages/Leetcode'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path = "/about" element= {<About />} />
        
        <Route path = "/sign-in" element= {<SignIn />} />
        <Route path = "/sign-up" element= {<SignUP />} />
        
        <Route path = "/projects" element= {<Projects />} />
        <Route path = "/LeetCode" element= {<LeetCode />} />
        <Route element = {<PrivateRoute/>}>
          <Route path = "/dashboard" element= {<Dashboard />} />
        </Route>
        <Route element = {<OnlyAdminPrivateRoute/>}>
          <Route path = "/create-post" element= {<CreatePost />} />
          <Route path = "/update-post/:postId" element= {<UpdatePost />} />
        </Route>
        </Routes>
      <Footer />
  
    </BrowserRouter>
   
  )
}