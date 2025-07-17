import React from 'react'
import ListProperty from '/icons/SideMenu/listyourproperty.png'
import iConnect from '/icons/SideMenu/iconnect.png'
import Biddings from '/icons/SideMenu/mybidding.png'
import BPS from '/icons/SideMenu/bps.png'
import Blogs from '/icons/SideMenu/blogpencil.png'
import Plots from '/icons/SideMenu/Plots.png'
import Colive from '/icons/SideMenu/Colive.png'
import PlayStore from '/images/Home/Playstore.png'
import AppStore from '/images/Home/appstore.png'
import {items} from '../../data/footer';
function Sidemenu() {
  return (
    <div className='sidemenuwrap'>
      <ul className='p-5'>
        <li className='flex md-hidden gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={Plots} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>Buy To Let</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer md-hidden'><img src={Plots} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>RentX</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer md-hidden'><img src={Colive} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>Colive</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={ListProperty} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>List Your Property</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={iConnect} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>i Connect</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={Biddings} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>My Biddings</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={BPS} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>Buyer Score Profile(BPS)</p> </li>
        <li className='flex gap-5 py-2.5 justify-items-center items-center cursor-pointer'><img src={Blogs} alt="ListProperty" className='w-[18px] h-[18px]' /> <p>Blogs</p> </li>
      </ul>
      <div className='appblock px-6 py-4'>
        <h4 className='text-lg font-bold'>Download App now</h4>
        <div className='flex gap-4 mt-4'>
        <img src={PlayStore} alt="PlayStore" className='max-w-[100px] h-8' />
        <img src={AppStore} alt="AppStore" className='max-w-[100px] h-8' />
        </div>
    </div>
     <div className='sm:col-span-3 px-6 py-4'>
        <h6 className='text-xl font-semibold mb-4 mt-4'>Follow Us</h6>
            <ul className='flex gap-3'>
                {
                    items.map((x, index)=>{
                    return(
                    <li><x.icon key={index} className='socialicons text-3xl'/></li> 
                     )
                })
                }
            </ul>
    </div>
    </div>
  )
}

export default Sidemenu
