// import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import Blog from './Page/Blog'

export default function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  )
}
