import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import whatsapp from '/images/contactus/whatsapp.png'
import telephone from '/images/contactus/telephone.png'
import email from '/images/contactus/email.png'
import india from '/images/contactus/india.png'
import ThankyouModal from '../components/ThankyouModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm();
  const [responseMessage, setResponseMessage] = useState("");
  console.log(register("LandingPageId"))

  const submitEnquireForm = async(data)=>{
    console.log(data);
    try {
      const response = await axios.post("https://api.colive.com/qa/CRMapi/PropertyCRM/LandingPageLeadInsert", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.Status === "success") {
        setIsModalOpen(true);
        console.log(response.data);
      } else {
        setResponseMessage(response.data.Message);
      }
    } catch (error) {
      setResponseMessage("Failed to submit the form.");
      console.log('Error Status: ' + response.data.Status + 'Error Message: ' + response.data.Message + 'Error Data: ' + response.data.Data);
    }
  }

  return (
    <div className="mt-13 md:mt-17">
        <div className="HeroSection flex flex-col justify-center items-center h-[168px] md:h-[330px] bg-cover bg-[url('/images/contactus/contactusBanner-mob.png')] md:bg-[url('/images/contactus/contactusBanner.png')]" >
            <h1 className="text-white text-2xl md:text-[40px]  font-semibold  mb-2">Contact Us</h1>
            <p className="text-white text-base md:text-[24px] font-normal">Our Experts are here to help you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="bg-[#F4F4F4] py-6 md:py-10 px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 md:gap-7">
              <a href="https://api.whatsapp.com/send/?phone=918185800800&amp;text=Hi+PropEx%21+I%27m+looking+for+a+property&amp;type=phone_number&amp;app_absent=0" target='_blank'>
                <div className="flex flex-row md:flex-col justify-center items-center h-[56px] md:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px] gap-2.5 md:gap-0">
                  <img src={whatsapp} className="w-[20px] md:w-[35px] mb-0 md:mb-2" ></img>
                  <label className="text-[#555555] text-[16px] cursor-pointer">Whatsapp</label>
                </div>
              </a>
              <a href="tel:+91 8185800800">
                <div className="flex flex-row md:flex-col justify-center items-center h-[56px] md:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px] gap-2.5 md:gap-0">
                  <img src={telephone} className="w-[20px] md:w-[35px] mb-0 md:mb-2" ></img>
                  <label className="text-[#555555] text-[16px] cursor-pointer">+91 8185800800</label>
                </div>
              </a>
              <a href="mailto:projects@propex.ai">
                <div className="flex flex-row md:flex-col justify-center items-center h-[56px] md:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px] gap-2.5 md:gap-0">
                  <img src={email} className="w-[20px] md:w-[35px] mb-0 md:mb-2" ></img>
                  <label className="text-[#555555] text-[16px] cursor-pointer">projects@propex.ai</label>
                </div>
              </a>
            </div>
            <div className="py-10 grid">
              <div className="w-full h-[300px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124421.1934377197!2d77.7108574!3d12.961464700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae136d7417bf0b%3A0xcc12e095ce0e240b!2sNo.755%2F95%2C%20BBMP%20Katha%2C%20Kote%20MR%20Plaza%2C%20First%20Floor%2C%203%2C%20Marathahalli%20Outer%20Ring%20Rd%2C%20Doddanekundi%2C%20Bengaluru%2C%20Karnataka%20560037!3m2!1d12.965491499999999!2d77.701835!5e0!3m2!1sen!2sin!4v1722423165779!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="text-[14px] md:text-[20px] font-semibold text-[#1B1B1B]">Colife Advisory Private Limited</h2>
              <p className="text-[12px] md:text-[18px] font-normal text-[#555555] mt-1">No.755/95, BBMP Katha, Kote MR Plaza, First Floor, Marathahalli Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037</p>
            </div>
            <div className="my-4">
              <h2 className="text-[14px] md:text-[20px] font-semibold text-[#1B1B1B]">Branches</h2>
              <p className="text-[12px] md:text-[18px] font-normal text-[#555555] mt-1">Telangana, Karnataka</p>
            </div>
            <div className="">
              <h2 className="text-[14px] md:text-[20px] font-semibold text-[#1B1B1B]">RERA Numbers</h2>
              <p className="text-[12px] md:text-[18px] font-normal text-[#555555] mt-1">Karnataka State: PRM/KA/RERA/1251/446/AG/230202/003391</p>
              <p className="text-[12px] md:text-[18px] font-normal text-[#555555] mt-1">Telangana State: A02400003593</p>
            </div>
          </div>
          
          <div className="py-6 md:py-10 px-5 md:px-10">
            <h2 className="text-[20px] md:text-[30px] font-bold text-[#1B1B1B]">Request a call back</h2>
            <p className="text text-[14px] md:text-[18px] font-normal text-[#555555] my-3">Submit your queries, we will get back to you as soon as possible</p>
            <form onSubmit={handleSubmit(submitEnquireForm)} noValidate>
              <div className="relative mb-4 md:mb-6 mt-6">
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[48px] md:h-[55px] px-4 md:px-5 text-[14px] md:text-base" type='text' placeholder='Name*' name='fname' id='fname' onInput={(e) => e.target.value = e.target.value.replace(/^\s+/, '') }
                {...register("fname", { 
                  required: "Please enter your name" })}/>
                {errors.fname && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.fname.message}</p>}
              </div>
              <div className="relative mb-4 md:mb-6">
                <div className="absolute flex items-center h-[48px] md:h-[55px] gap-2 md:gap-3 pl-5">
                  <img className="w-[24px] md:w-[35px]" src={india} alt="india"/>
                  <span className="text-[14px] md:text-[18px] border-r-2 border-r-[#D8D8D8] pr-2.5 h-[30px] md:h-[35px] flex items-center">+91</span>
                </div>
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[48px] md:h-[55px] px-4 md:px-5 text-[14px] md:text-base pl-25 md:pl-30" type='tel' maxLength={10} placeholder='Mobile number*' name='mobileno' id='mobileno' onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
                {...register("mobileno", 
                { required: "Please enter your mobile number",
                  pattern: {
                    value: /^[0-9]{10}$/,  // Only 10-digit numbers allowed
                    message: "Enter a valid 10 digit mobile number"
                  }
                 })}/>
                {errors.mobileno && <p className="text-red-500 absolute bottom-[-18px] right-0 text-[12px] md:text-[13px]">{errors.mobileno.message}</p>}
              </div>
              <div className="relative mb-4 md:mb-6">
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[48px] md:h-[55px] px-4 md:px-5 text-[14px] md:text-base" type='email' placeholder='Email*' name='email' id='email'
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
                <button className="w-full text-white font-normal text-[14px] md:text-[20px] border border-[#F31175] rounded-[5px] h-[48px] md:h-[55px] bg-[#F31175] mt-2 cursor-pointer">Request a call back</button>
                <input type="hidden" {...register("gclid")} value="EXAMPLE_GCLID" />
                <input type="hidden" {...register("utm_source")} value="Google" />
              </div>
            </form>
          </div>
        </div>
        <div>
          <ThankyouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    </div>
  )
}

export default Contact