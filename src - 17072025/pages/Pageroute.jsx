import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import Signup  from '../components/Common/Signup';
import Login from '../components/Common/Login';
import OtpVerification from '../components/Common/OtpVerification';
import Properties from '../components/Property/PropertyList';
import Babylon from './LP/Babylon';
import Privacypolicy from '../pages/Privacypolicy';
import TermsAndConditions from './Termsandconditions';
import Oxygen from './LP/Oxygen';
import PropertyDetail from '../components/Property/PropertyDetail';
const Pageroute = () => {
  return (
    <>
      <Router>
    <Routes>
      {/* Wrap all pages inside Layout */}
      <Route path="/" element={<Layout  />}>
        <Route index element={<Home />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        {/* Add other routes here */}
        <Route path="/Babylon" element={<Babylon />} />
        <Route path="/Oxygen" element={<Oxygen />} />   
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default Pageroute
