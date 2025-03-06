import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import whatsapp from '/images/contactus/whatsapp.png'
import telephone from '/images/contactus/telephone.png'
import email from '/images/contactus/email.png'
import india from '/images/contactus/india.png'
import ThankyouModal from '../components/ThankyouModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Form submitted successfully!");
    setIsModalOpen(true)
  };

  return (
    <div className="mt-[53px] sm:mt-[68px] ">
      <div className="HeroSection flex flex-col justify-center items-center h-[330px] bg-cover bg-[url('/images/contactus/contactusBanner.webp')]" >
            <h1 className="text-white sm:text-[40px] text-[24px] font-semibold  mb-2">Contact Us</h1>
            <p className="text-white sm:text-[24px] text-[16px] font-normal">Our Experts are here to help you</p>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="bg-[#F4F4F4] py-10 px-5 sm:px-10">
            <div className="grid sm:grid-cols-3 grid-cols-1  justify-center items-center gap-7">
              <a href="https://api.whatsapp.com/send/?phone=918185800800&amp;text=Hi+PropEx%21+I%27m+looking+for+a+property&amp;type=phone_number&amp;app_absent=0" target='_blank'>
                <div className="flex sm:flex-col flex-row justify-center items-center h-[56px] sm:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px]">
                  <img src={whatsapp} className="w-[20px] sm:w-[35px] mb-2" ></img>
                  <label className="text-[#555555] text-[16px] cursor-pointer">Whatsapp</label>
                </div>
              </a>
              <a href="tel:+91 8185800800">
                <div className="flex sm:flex-col flex-row justify-center items-center h-[56px] sm:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px]">
                  <img src={telephone} className="w-[20px] sm:w-[35px] mb-2" ></img>
                  <label className="text-[#555555] text-[16px] cursor-pointer">+91 8185800800</label>
                </div>
              </a>
              <a href="mailto:projects@propex.ai">
                <div className="flex sm:flex-col flex-row justify-center items-center h-[56px] sm:h-[106px] w-full bg-white border border-[#DADADA] rounded-[8px]">
                  <img src={email} className="w-[20px] sm:w-[35px] mb-2" ></img>
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
              <h2 className="text-[20px] font-semibold text-[#1B1B1B]">Colife Advisory Private Limited</h2>
              <p className="text-[18px] font-normal text-[#555555] mt-1">No.755/95, BBMP Katha, Kote MR Plaza, First Floor, Marathahalli Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037</p>
            </div>
            <div className="my-4">
              <h2 className="text-[20px] font-semibold text-[#1B1B1B]">Branches</h2>
              <p className="text-[18px] font-normal text-[#555555] mt-1">Telangana, Karnataka</p>
            </div>
            <div className="">
              <h2 className="text-[20px] font-semibold text-[#1B1B1B]">RERA Numbers</h2>
              <p className="text-[18px] font-normal text-[#555555] mt-1">Karnataka State: PRM/KA/RERA/1251/446/AG/230202/003391</p>
              <p className="text-[18px] font-normal text-[#555555] mt-1">Telangana State: A02400003593</p>
            </div>
          </div>
          
          <div className="py-10 px-10">
            <h2 className="text-[30px] font-bold text-[#1B1B1B]">Request a call back</h2>
            <p className="text-[18px] font-normal text-[#555555] my-3">Submit your queries, we will get back to you as soon as possible</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="relative mb-6 mt-6">
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[55px] px-5" type='text' placeholder='Name*' name='fname' id='fname' onInput={(e) => e.target.value = e.target.value.replace(/^\s+/, '') }
                {...register("fname", { 
                  required: "Please enter your name" })}/>
                {errors.fname && <p className="text-red-400 absolute bottom-[-18px] right-0 text-[13px]">{errors.fname.message}</p>}
              </div>
              <div className="relative mb-6">
                <div className="absolute flex items-center h-[55px] gap-3 pl-5">
                  <img className="w-[35px]" src={india} alt="india"/>
                  <span className="text-[18px] border-r-2 border-r-[#D8D8D8] pr-2.5 h-[35px] flex items-center">+91</span>
                </div>
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[55px] px-5 pl-30" type='tel' maxLength={10} placeholder='Mobile number*' name='mobileno' id='mobileno' onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                {...register("mobileno", 
                { required: "Please enter your mobile number",
                  pattern: {
                    value: /^[0-9]{10}$/,  // Only 10-digit numbers allowed
                    message: "Enter a valid 10 digit mobile number"
                  }
                 })}/>
                {errors.mobileno && <p className="text-red-400 absolute bottom-[-20px] right-0 text-[13px] ">{errors.mobileno.message}</p>}
              </div>
              <div className="relative mb-6">
                <input className="w-full border-[1.5px] rounded-[5px] border-[#D8D8D8] text-black h-[55px] px-5" type='email' placeholder='Email*' name='email' id='email' 
                {...register("email", { 
                  required: "Please enter your email address",
                  pattern: { 
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                    message: "Enter a valid email address" 
                  } 
                  })}/>
                {errors.email && <p className="text-red-400 absolute bottom-[-20px] right-0 text-[13px] ">{errors.email.message}</p>}
              </div>
              <div>
                <button className="w-full text-white font-normal text-[20px] border border-[#F31175] rounded-[5px] h-[55px] bg-[#F31175] mt-2 cursor-pointer">Request a call back</button>
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