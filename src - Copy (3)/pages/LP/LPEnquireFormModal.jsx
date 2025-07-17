import React from 'react'
import { useForm } from 'react-hook-form';
import { useState, useEffect} from 'react';
import axios from 'axios';

const LPEnquireFormModal = ({ isOpen, onClose, leadSource, LPId, mobNumValidate, otpVerify }) => {
  const {register,handleSubmit,reset,formState: { errors, isSubmitting }} = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

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
      <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] bg-opacity-50" onClick={onClose}>
        <div className="bg-white rounded shadow-lg w-full max-w-[90%] md:max-w-[35%] relative" onClick={(e)=>e.stopPropagation()}>
          <div className="flex justify-between items-center px-6 py-3 border-b-2 border-dotted border-[#AAAAAA]">
            <button className="text-gray-700 hover:text-gray-800 cursor-pointer absolute right-3 top-3 text-[18px]" onClick={onClose}>
              ✖
            </button>
            <h4 className="text-[20px] md:text-[25px] font-medium">Let's <span className='text-[#EF1284]'>talk</span></h4>
          </div>
          <div className='px-6 pb-6'>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(submitEnquireForm)} noValidate>
              <div className="relative mb-3 md:mb-4 mt-4">
                <label className='text-[15px] md:text-[18px] font-normal mb-2'>Name*</label>
                <input className="w-full border-[1.5px] rounded-[5px] border-[#AAAAAA] text-black h-[40px] md:h-[45px] px-4 md:px-3 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal" type='text' placeholder='Enter your full name' name='fname' id='fname' onInput={(e) => e.target.value = e.target.value.replace(/^\s+/, '') }
                {...register("fname", { 
                  required: "Please enter your name" })}/>
                {errors.fname && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.fname.message}</p>}
              </div>
              <div className="relative mb-3 md:mb-4">
                <label className='text-[15px] md:text-[18px] font-normal mb-2'>Phone Number*</label>
                <div className="absolute flex items-center gap-2 md:gap-3 pl-3 top-[50%]">
                  <span className="text-[14px] md:text-[16px] border-r-1 border-r-black pr-2.5 h-[30px] md:h-[35px] flex items-center">+91</span>
                </div>
                <input className="w-full border-[1.5px] rounded-[5px] border-[#AAAAAA] text-black h-[40px] md:h-[45px] px-4 md:px-15 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal pl-15" type='tel' maxLength={10} placeholder='Enter your Phone Number' name='mobileno' id='mobileno' onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
                {...register("mobileno", 
                { required: "Please enter your mobile number",
                  pattern: {
                    value: /^[0-9]{10}$/,  // Only 10-digit numbers allowed
                    message: "Enter a valid 10 digit mobile number"
                  }
                  })}/>
                {errors.mobileno && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.mobileno.message}</p>}
              </div>
              <div className="relative mb-6 md:mb-6">
                <label className='text-[15px] md:text-[18px] font-normal mb-2'>Email id*</label>
                <input className="w-full border-[1.5px] rounded-[5px] border-[#AAAAAA] text-black h-[40px] md:h-[45px] px-4 md:px-3 text-[15px] md:text-base mt-1 md:mt-1.5 font-normal" type='email' placeholder='Enter your Email' name='email' id='email'
                {...register("email", { 
                  required: "Please enter your email address",
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "Enter a valid email address" 
                  } 
                  })}/>
                {errors.email && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.email.message}</p>}
              </div>
              <div>
                <button className="w-full text-white font-normal text-[18px] md:text-[20px] border border-[#F31175] rounded-[5px] h-[40px] md:h-[45px] bg-[#F31175] cursor-pointer">Continue</button>
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

export default LPEnquireFormModal