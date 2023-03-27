import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyAbout from './MyAbout'
import MyHome from './MyHome'
import Mynav from './Mynav'
import MyServices from './MyServices'

export default function MyMain() {
  return (
    <div>

<BrowserRouter>
    <Mynav/>
    <Routes>
        <Route path="/" element={<MyHome/>} />
        <Route path="about" element={<MyAbout/>} />
        <Route path="services" element={<MyServices/>} />
    </Routes>
</BrowserRouter>

    </div>
  )
}
