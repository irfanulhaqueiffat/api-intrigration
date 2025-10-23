import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Layout from './components/Layout'

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App