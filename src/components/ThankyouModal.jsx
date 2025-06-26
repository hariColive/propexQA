import React from 'react'
import PropexLogo from '/images/contactus/PropexLogo.png'


const ThankyouModal = ({ isOpen, onClose }) => {
    console.log("isopen",isOpen);
    console.log("onClose",onClose)
    if (!isOpen) return null; // If modal is closed, return nothing
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
        <div className="bg-white rounded-lg p-6 pb-10 shadow-lg w-full max-w-[60%] border-t-8 border-[#EF0073]" onClick={(e)=>e.stopPropagation()}>
          {/* <div className="flex justify-between items-center mb-4 none">
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              ✖
            </button>
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <img src={PropexLogo} alt="logo" className="w-[145px] mx-auto"/>
            <h1 className="font-extrabold text-[70px] text-[#31123A] mt-2 mb-0">Thank You</h1>
            <h4 className="font-normal text-black text-[30px]">For Choosing us</h4>
            <p className="font-normal text-[#2B2A2A] text-[18px] mt-2 mb-8">Our representative will reach out to you soon</p>
            <a href='/' className="text-white text-[20px] bg-[#EF0073] border border-[#EF0073] rounded-[6px] decoration-0 px-8 py-2">Back to Home</a>
          </div>
        </div>
      </div>
    );
  };

export default ThankyouModal