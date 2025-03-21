import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import Signup from './Components/Signup.jsx'
import Layout from './Layout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = "" element = {<LandingPage/>}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "profile" element = {<Profile/>}/>
      <Route path = "signup" element = {<Signup/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
