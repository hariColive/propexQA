import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './pages/home';
import Contactus from './pages/Contactus';
const Pageroute = () => {
  return (
    <>
      <Router>
    <Routes>
      {/* Wrap all pages inside Layout */}
      <Route path="/" element={<Layout  />}>
        <Route index element={<Home />} />
        <Route path="Contactus" element={<Contactus />} />
      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default Pageroute
