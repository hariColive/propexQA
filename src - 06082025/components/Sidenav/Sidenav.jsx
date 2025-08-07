import React, { useState } from 'react';
import Tooltip from '../Sidenav/Tooltip';
import EnquireFormModal from '../EnquireFormModal';
import ScheduleVisitFormModal from '../ScheduleVisitFormModal';
import iconnect from "../../assets/icons/Sidenav/VideoCall.png";
import Enquiry from "../../assets/icons/Sidenav/Enquiry.png";
import Whatsapp from "../../assets/icons/Sidenav/Whatsapp.png";
import Call from "../../assets/icons/Sidenav/Call.png";
import Schedule from "../../assets/icons/Sidenav/Schedule.png";

const Sidenav = () => {
  const [isEnquireModalOpen,setIsEnquireModalOpen] = useState(false);
  const [isScheduleModalOpen,setIsScheduleModalOpen] = useState(false)

  return (
    <>
    <div className="fixed right-0 top-1/2 -translate-y-1/2">
      <div className="mx-auto flex flex-col w-full justify-center pt-4">
        <Tooltip message="iConnect">
          <button type="button" className="flex items-center justify-center bg-[#FFF] border border-[#f9eded] w-[60px] h-[40px] cursor-pointer">
            <img className='w-[25px]' src={iconnect} alt='iConnect'/>
          </button>
        </Tooltip>
        <Tooltip message="Enquire">
          <button type="button" className="flex items-center justify-center bg-[#FFF] border border-[#f9eded] w-[60px] h-[40px] cursor-pointer" onClick={()=>setIsEnquireModalOpen(true)}>
            <img className='w-[25px]' src={Enquiry} alt='Enquiry'/>
          </button>
        </Tooltip>
        <Tooltip message="Whatsapp">
          <a className="flex items-center justify-center bg-[#FFF] border border-[#f9eded] w-[60px] h-[40px] cursor-pointer" 
            href='https://api.whatsapp.com/send/?phone=918185800800&text=Hi+PropEx%21+I%27m+looking+for+a+property&type=phone_number&app_absent=0' target='_blank'>
            <img className='w-[25px]' src={Whatsapp} alt='whatsapp'/>
          </a>
        </Tooltip>
        <Tooltip message="Call">
          <a className="flex items-center justify-center bg-[#FFF] border border-[#f9eded] w-[60px] h-[40px] cursor-pointer">
            <img className='w-[25px]' src={Call} alt='Schedule'/>
          </a>
        </Tooltip>
        <Tooltip message="Schedule Visit">
          <button className="flex items-center justify-center bg-[#FFF] border border-[#f9eded] w-[60px] h-[40px] cursor-pointer" onClick={()=>setIsScheduleModalOpen(true)}>
            <img className='w-[25px]' src={Schedule} alt='Call'/>
          </button>
        </Tooltip>
      </div>
    </div>
    <EnquireFormModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} leadSource="" LPId={78} mobNumValidate={false} otpVerify={false}/>
    <ScheduleVisitFormModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} leadSource="" LPId={78} mobNumValidate={false} otpVerify={false}/>
    </>
  );
};

export default Sidenav;