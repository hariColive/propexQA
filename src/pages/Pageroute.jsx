import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import Babylon from './LP/Babylon';
const Pageroute = () => {
  return (
    <>
      <Router>
    <Routes>
      {/* Wrap all pages inside Layout */}
      <Route path="/" element={<Layout  />}>
        <Route index element={<Home />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/babylon" element={<Babylon />} />
      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default Pageroute
