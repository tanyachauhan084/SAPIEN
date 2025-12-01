
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Home from './components/Home'

const Router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      
    </Route>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>

    </>
  )
)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={Router}/>
   
  </React.StrictMode>,
)
