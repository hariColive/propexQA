import React, { useEffect, useState } from 'react';
import ScheduleVisit from '../ScheduleVisit'; 
import Youtube from '../../assets/images/property/youtube.png'; 
import Map from '../../assets/images/property/map.png';
import Video from '../../assets/images/property/video.png';
import Whatsapp from '../../assets/images/property/whatsapp.png';

const ExploreHome = ({ property }) => {
  return (
    <div className='explorewrap'>
      <div className='explore'>
        <h1 className='text-center text-3xl font-bold mb-5 mt-4'>EXPLORE YOUR NEW HOME</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 mt-5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 items-center flex justify-center">
                    <img src={Youtube} className="w-[70px] h-[70px]" />
                  </div>
                  <div className="col-span-2 explore-title">
                    <h4 className='text-xl font-bold text-[#f40f9e]'>See what’s Latest</h4>
                    <p>Watch the latest reels from this property, Events, Property highlights and many more.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mt-5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 items-center flex justify-center">
                    <img src={Map} className="w-[70px] h-[70px]" />
                  </div>
                  <div className="col-span-2 explore-title">
                    <h4 className='text-xl font-bold text-[#f40f9e]'>Check the map location</h4>
                    {property.Landmark}
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 items-center flex justify-center">
                    <img src={Video} className="w-[70px] h-[70px]" />
                  </div>
                  <div className="col-span-2 explore-title">
                    <h4 className='text-xl font-bold text-[#f40f9e]'>Take the video tour</h4>
                    <p>Enjoy a live socially distant viewing from the comfort of your phone.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 items-center flex justify-center">
                    <img src={Whatsapp} className="w-[70px] h-[70px]" />
                  </div>
                  <div className="col-span-2 explore-title">
                    <h4 className='text-xl font-bold text-[#f40f9e]'>Share this home with others</h4>
                    <p>Send this page as a quick link to your loved ones & friends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ScheduleVisit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHome
