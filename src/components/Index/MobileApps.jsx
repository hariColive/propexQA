import React from 'react'
import PlayStore from '/images/Home/Playstore.png'
import AppStore from '/images/Home/appstore.png'
import MobileView from '/images/Home/MobileView.png'

function MobileApps() {
  return (
    <div className='mobileapps bg-[#F3F3F3] mt-16'>
        <div className='body-container py-8'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <h3 className='text-black text-2xl font-semibold pb-2'>Find your Dream home with PropGPT</h3>
                    <p>A data-driven, intelligent smart chat tool designed to answer all your queries related to properties. It assists in:</p>
                    <ul className='pl-4 mt-3'>
                        <li className='list-disc py-1.5'>Finding best properties for buy/rent</li>
                        <li className='list-disc py-1.5'>Connecting buyers with seller and tenants with owners</li>
                        <li className='list-disc py-1.5'>Answering any questions related to property buy/sell/rent</li>
                    </ul>
                    <h4 className='text-lg mt-6 font-bold'>Download App now</h4>
                    <div className='flex gap-4 mt-4'>
                        <img src={PlayStore} alt="PlayStore" className='max-w-[150px] h-12' />
                        <img src={AppStore} alt="AppStore" className='max-w-[150px] h-12' />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                <img src={MobileView} alt="MobileView" className='max-h-[400px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileApps
