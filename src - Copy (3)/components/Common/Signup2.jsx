import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'
import LoginList from '/icons/Login/loginlisticon.png'
import IndiaFlag from '/icons/Login/indiaicon.png'
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  // const [selected, setSelected] = useState("");
  // const [selectedOption, setSelectedOption] = useState("");
  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

   // Validation Schema
   const validationSchema = Yup.object({
    name: Yup.string().min(3, "Must be at least 3 characters").required("Name is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    option: Yup.string().required("Please select an option"),
  });

 // Function to handle form submission
 const handleSubmit = async (values, { resetForm }) => {
  try {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "You have successfully registered.",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        resetForm();
      });
      navigate("/Login");
    } else {
      alert("Error: Unable to save data.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error! Please try again.");
  }
};


  
  return (
    <div className='bg-[#fafafa]'>
    <div className='pt-30 pb-40'>
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
      <h2 className='text-3xl font-bold'>Sign Up</h2>
      <Formik
      initialValues={{ name: "", phone: "",  email: "", option: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="p-4 max-w-md mx-auto">
           <div className="mb-3 relative">
            <label className="block">I am a</label>
            <label>
              <Field type="radio" name="option" value="Buyer" />
              &nbsp;Buyer
            </label>
            <label className="ml-4">
              <Field type="radio" name="option" value="Female" />
              &nbsp;Owner/Seller
            </label>
            <ErrorMessage name="option" component="div" className="text-red-500 text-xs absolute" />
          </div>
          {/* Name Field */}
          <div className="relative">
            <Field className="mt-4 pb-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Full Name" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs absolute" />
          </div>
          {/* Phone Number Field */}
          <div className='relative'>
            <Field className="mt-6 border no-arrows relative border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="phone" placeholder="Enter phone number" />
            <img src={IndiaFlag} className='absolute top-1.5' />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs absolute" />
          </div>
          {/* Email Field */}
          <div className="relative">
            <Field className="mt-6 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute" />
          </div>

          {/* Submit Button */}
          <button className="w-full mt-6 cursor-pointer rounded-md text-white bg-[#EF1284] hover:bg-red-800 focus:outline-none font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" type="submit">Signup</button>
        </Form>
      )}
    </Formik>
    <p className=' text-lg text-center '>Already a user? <span className='text-[#ef1284]'><a href="/Login">Log In</a></span></p>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Signup
