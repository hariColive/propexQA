import React from 'react'
import PropEstimate from '/images/Home/PropEstimate.png'
import PropGPT from '/images/Home/PropGPT.png'
import PropExpert from '/images/Home/PropExpert.png'
import PVerse from '/images/Home/PVerse.png'

const Onepalce = () => {
  return (
    <div>
      <div className='body-container'>
      <h3 className='font-bold text-3xl text-black text-center'>Everything you know at one place</h3>
        <div className='grid grid-cols-2 gap-8 mt-8'>
        <div className='grid grid-cols-3 rounded-xl p-5 bg-[#F3DDF4]'>
        <div className='col-span-2'>
        <h4 className='font-semibold text-2xl my-2 text-black'>PropEstimate</h4>
           <ul className='pl-5'>
                 <li className='list-disc text-base py-2'>Reliable data trends & market-driven price discovery</li>
                 <li className='list-disc text-base py-2'>Buyer Profile Score (BPS) & Net Property Score (NPS)</li>
                 <li className='list-disc text-base py-2'>Select your property and bid or connect directly</li>
           </ul>
            <button type="button" class="focus:outline-none text-[#EF1284] bg-[#FFF] hover:bg-[#FFF] focus:ring-4 mt-4 focus:bg-[#FFF] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Explore Now</button>
        </div>
        <div className='col-span-1 flex align-middle justify-center'>
        <img src={PropEstimate} alt="PropEstimate" className='max-w-[150px] max-h-[150px] mt-12' />
        </div>
        </div>
        <div className='grid grid-cols-3 rounded-xl p-5 bg-[#F5E1E2]'>
        <div className='col-span-2'>
        <h4 className='font-semibold text-2xl my-2 text-black'>PropGPT</h4>
           <ul className='pl-5'>
                 <li className='list-disc text-base py-2'>First of its kind NLP based Real Estate bot</li>
                 <li className='list-disc text-base py-2'>Interactive, responsive, and smart chat tool</li>
                 <li className='list-disc text-base py-2'>Designed to cater to all segments of the real estate</li>
           </ul>
            <button type="button" class="focus:outline-none text-[#EF1284] bg-[#FFF] hover:bg-[#FFF] focus:ring-4 mt-4 focus:bg-[#FFF] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Explore Now</button>
        </div>
        <div className='col-span-1 inline-block align-middle justify-center'>
        <img src={PropGPT} alt="PropEstimate" className='max-w-[150px] max-h-[150px] mt-12' />
        </div>
        </div>
        <div className='grid grid-cols-3 rounded-xl p-5 bg-[#F3DDF4]'>
        <div className='col-span-2'>
        <h4 className='font-semibold text-2xl my-2 text-black'>PropExpert</h4>
           <ul className='pl-5'>
                 <li className='list-disc text-base py-2'>Disruptive tech-based sales process</li>
                 <li className='list-disc text-base py-2'>SMART DEALS on iConnect, iVisit</li>
                 <li className='list-disc text-base py-2'>Requirement-based real time matchmaking for live listings</li>
           </ul>
            <button type="button" class="focus:outline-none text-[#EF1284] bg-[#FFF] hover:bg-[#FFF] focus:ring-4 mt-4 focus:bg-[#FFF] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Explore Now</button>
        </div>
        <div className='col-span-1 inline-block align-middle justify-center'>
        <img src={PropExpert} alt="PropEstimate" className='max-w-[150px] max-h-[150px] mt-12' />
        </div>
        </div>
        <div className='grid grid-cols-3 rounded-xl p-5 bg-[#F5E1E2]'>
        <div className='col-span-2'>
        <h4 className='font-semibold text-2xl my-2 text-black'>PropVerse</h4>
           <ul className='pl-5'>
                 <li className='list-disc text-base py-2'>SMART SHOWCASE of real estate properties</li>
                 <li className='list-disc text-base py-2'>Connect directly to developers virtually</li>
                 <li className='list-disc text-base py-2'>Innovative tools to explore various options</li>
           </ul>
            <button type="button" class="focus:outline-none text-[#EF1284] bg-[#FFF] hover:bg-[#FFF] focus:ring-4 mt-4 focus:bg-[#FFF] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Explore Now</button>
        </div>
        <div className='col-span-1 inline-block align-middle justify-center'>
        <img src={PVerse} alt="PropEstimate" className='max-w-[150px] max-h-[150px] mt-12' />
        </div>
        </div>
            <div>
            
            </div>
            </div>
            </div>
    </div>
  )
}

export default Onepalce
