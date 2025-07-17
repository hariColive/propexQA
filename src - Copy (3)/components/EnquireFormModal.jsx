import React from 'react'
import { useForm } from 'react-hook-form';
import { useState, useEffect} from 'react';
import axios from 'axios';

const EnquireFormModal = ({ isOpen, onClose, leadSource, LPId, mobNumValidate, otpVerify }) => {
  const {register,handleSubmit,reset,formState: { errors, isSubmitting }} = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [selected,setSelected] = useState("Locality");
  const dropdownOptions = ["AECS Layout","Bellandur","Bommanahalli","BTM Layout","CV Raman Nagar","Doddanekundi","Electronic City","Hebbal","HSR Layout","JP Nagar","Koramangala","Mahadevapura","Manyata Tech Park","Marathahalli","Mysore Road",
                           "Nagawara","Outer Ring Road","Sarjapura Road","Silk Board","Whitefield","ITPL","Kundalahalli","Munnekolala","Spice Garden","Kadubeesanahalli","HAL Road","KR Puram","Horamavu","Hennur","Yeshwanthpur","Yelahanka","Others"]

  const handleChange =(e)=>{
    setSelected(e.target.value)
  }

  const submitEnquireForm = async(data)=>{
    setIsSubmitted(true);
    try {
      const response = await axios.post("https://api.propex.ai/web/qa/CRMapi/PropertyCRM/LandingPageLeadInsert", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.Status === "success") {
        setIsSubmitted(true);
      } else {
        setResponseMessage(response.data.Message);
      }
    } catch (error) {
      setResponseMessage("Error:", error.message);
      //setResponseMessage("Failed to submit the form.");
      //console.log('Error Status: ' + response.data.Status + 'Error Message: ' + response.data.Message + 'Error Data: ' + response.data.Data);
    }
  }
  useEffect(() => {
    if (isOpen) {
      reset();
      setIsSubmitted(false); // Show the form again
    }
  }, [isOpen, reset]);
  
    if (!isOpen) return null; // If modal is closed, return nothing
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] bg-opacity-50 z-10" onClick={onClose}>
        <div className="bg-white rounded shadow-lg w-full max-w-[40%] md:max-w-[30%] relative" onClick={(e)=>e.stopPropagation()}>
          <div className="flex justify-between items-center px-6 py-3 pb-0">
            <button className="text-gray-700 hover:text-gray-800 cursor-pointer absolute right-3 top-3 text-[18px]" onClick={onClose}>
              ✖
            </button>
            <h4 className="text-[20px] md:text-[25px] font-medium">Let's <span className='text-[#EF1284]'>talk</span></h4>
          </div>
          <div className='px-6 pb-6'>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(submitEnquireForm)} noValidate>
              <div className="relative mb-3 md:mb-4 mt-4">
                <input className="w-full border-b-[2px] border-[#F8049C] text-[#616161] px-4 md:px-3 text-[15px] md:text-[18px] mt-1 md:mt-1.5 font-normal outline-none" type='text' placeholder='Full name*' name='fname' id='fname' onInput={(e) => e.target.value = e.target.value.replace(/^\s+/, '') }
                {...register("fname", { 
                  required: "Please enter your name" })}/>
                {errors.fname && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.fname.message}</p>}
              </div>
              <div className="relative mb-3 md:mb-4">
                <div className="absolute flex items-center gap-2 md:gap-3 pl-3 top-[50%]">
                </div>
                <input className="w-full border-b-[2px] border-[#F8049C] text-[#616161] px-4 md:px-3 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal pl-4 outline-none" type='tel' maxLength={10} placeholder='Phone*' name='mobileno' id='mobileno' onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
                {...register("mobileno", 
                { required: "Please enter your mobile number",
                  pattern: {
                    value: /^[0-9]{10}$/,  // Only 10-digit numbers allowed
                    message: "Enter a valid 10 digit mobile number"
                  }
                  })}/>
                {errors.mobileno && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.mobileno.message}</p>}
              </div>
              <div className="relative mb-3 md:mb-4">
                <input className="w-full border-b-[2px] border-[#F8049C] text-[#616161] px-4 md:px-3 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal outline-none" type='email' placeholder='Email ID*' name='email' id='email'
                {...register("email", { 
                  required: "Please enter your email address",
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "Enter a valid email address" 
                  } 
                  })}/>
                {errors.email && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.email.message}</p>}
              </div>
              <div className="relative mb-3 md:mb-4">
                <select className='w-full border-b-[2px] border-[#F8049C] text-[#616161] px-4 md:px-2 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal outline-none' id="location" onChange={handleChange} name='locality'
                {...register('locality', {
                  required: "Please select a locality"
                })}>
                  <option value="" hidden>{selected}</option>
                  {dropdownOptions.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                  
                </select>
                {errors.locality && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.locality.message}</p>}
              </div>
              <div className="relative mb-6 md:mb-6">
                <input className="w-full border-b-[2px] border-[#F8049C] text-[#616161] px-4 md:px-3 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal pl-4 outline-none" type='number' maxLength={10} placeholder='Budget*' name='budget' id='budget' onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
                {...register("budget", 
                { required: "Please enter your budget",
                  })}/>
                {errors.budget && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.budget.message}</p>}
              </div>
              <div>
                <button className="text-white font-normal text-[18px] md:text-[20px] border border-[#F31175] rounded-[5px] w-[110px] h-[40px] md:h-[42px] bg-[#F31175] cursor-pointer">Submit</button>
                <input type="hidden" {...register("leadSource")} value={leadSource}  />
                <input type="hidden" {...register("LandingPageId")} value={LPId}  />
                <input type="hidden" {...register("mobile_number_validated")} value={mobNumValidate}  />
                <input type="hidden" {...register("isotpverificationrequired")} value={otpVerify}  />
              </div>
            </form>
          ):(
            <div className='mt-6 mb-2'>
              <img className='w-[70px] m-auto' src='/images/babylon/tick-img.png' alt='tickImage'/>
              <p class="mt-5 text-[14px] md:text-base font-medium text-center">Sit back tight!! <br />We've captured your interest! <br />You are going to receive a sweet call from our PropExpert really soon</p>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  };

export default EnquireFormModal