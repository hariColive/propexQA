import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Login.css'
import LoginList from '/icons/Login/loginlisticon.png'
import IndiaFlag from '/icons/Login/indiaicon.png'

const API_URL = "http://localhost:5000/users";

const Login = () => {
  const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const phoneSchema = Yup.object({
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Invalid phone number")
        .required("Phone number is required"),
    });
    const checkPhoneNumber = async (values) => {
      try {
        const res = await axios.get(`${API_URL}?phone=${values.phone}`);
        if (res.data.length > 0) {
          // Existing User → Proceed to OTP Verification
          navigate(`/otp?phone=${values.phone}`);
        } else {
          // New User → Redirect to Signup
          navigate(`/Signup?phone=${values.phone}`);
        }
      } catch (error) {
        setError("Error checking phone number. Try again later.");
      }
    };
 
  return (
    <div className='bg-[#fafafa]'>
      <div className='pt-40 pb-40'>
      <div class="grid grid-cols-5 gap-4 body-container">
      <div className="col-span-3">
      <h2 className='text-3xl font-bold'>Perks of Signing in</h2>
      <ul className="list-inside px-4 rounded-lg pl-0">
        <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Reliable data trends & market-driven price discovery</p></li>
        <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Real Estate Virtual Assistant with PropGPT</p></li>
        <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Add favourite properties for i-Connects & site visits</p></li>
        <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Discover the perfect matched buyers by listing properties with us</p></li>
        <li className="mb-4 mt-4 flex items-center"><img src={LoginList} className='w-6 h-6' /><p className='pl-2 text-xl'> Get Personalized & property update notifications</p></li>
      </ul>
      </div>
    <div className="col-span-2 px-8 py-4 bg-[#fff] rounded-md border-t-8 border-t-[#EF1284]">
      <h2 className='text-3xl font-bold'>Login</h2>
      
    {/* <form className='relative' onSubmit={formik.handleSubmit}>
    <input className="mt-4 no-arrows relative border border-[#B8B8B8] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="phone" placeholder="Enter phone number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}  />
    <img src={IndiaFlag} className='absolute top-1.5' />
      {formik.touched.phone && formik.errors.phone && <div className='errmsg text-xs text-red-600 absolute'>{formik.errors.phone}</div>}
      <button type="submit" className="w-full mt-6 cursor-pointer rounded-md text-white bg-[#EF1284] hover:bg-red-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Login</button>
    </form> */}

    <Formik initialValues={{ phone: "" }} validationSchema={phoneSchema} onSubmit={checkPhoneNumber}>
            <Form className='relative'>
              <div className="">
                <Field className="mt-4 no-arrows relative border border-[#B8B8B8] text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" name="phone" placeholder="Enter phone number" />
                <img src={IndiaFlag} className='absolute top-1.5' />
                <ErrorMessage name="phone" component="div" className="text-red-500 errmsg text-xs" />
              </div>
              <button type="submit" className="w-full mt-6 cursor-pointer rounded-md text-white bg-[#EF1284] hover:bg-red-800 focus:outline-none font-medium text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Continue
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </Form>
          </Formik>
    <p className='mt-6 text-lg text-center'>New to Propex.ai? <span className='text-[#ef1284]'><a href="/Signup">Sign Up</a></span></p>
      </div>
      </div>
      </div>
  </div>
  )
}

export default Login
