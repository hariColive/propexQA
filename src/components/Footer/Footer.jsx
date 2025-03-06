import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaYoutube  } from "react-icons/fa";
import {sections} from '../../data/footer';
import {items} from '../../data/footer';

const Footer = () => {
  return (
    <>
        <div className='w-full bg-black text-white py-y px-2'>           
            <div class="grid sm:grid-cols-12 gap-5 w-[calc(100%-100px)] mx-auto">
            <div className='sm:col-span-4'>
            <div class="aboutus">
              <h6 className='text-xl font-semibold mb-4 mt-4'>About us</h6>
              <p className='mb-2'>PropEx is a data driven PropTech marketplace exchange that instantly & virtually connects various stakeholders in the real estate ecosystem.</p>
              <p className='mb-2'>Colife Advisory Private Limited</p>
              <p className='mb-2'>No.755/95, BBMP Katha, Kote MR Plaza, First Floor, Marathahalli Outer Ring Rd, Doddanekundi, Bengaluru, Karnataka 560037.</p>
              <p className='mb-2'>Branches: Telangana, Karnataka.</p>
              <p>RERA Nos:</p>
              <p className='mb-2'>Karnataka State:<br/>
              PRM/KA/RERA/1251/446/AG/230202/003391</p>
              <p className='mb-4'>Telangana State:<br/>
              A02400003593</p>
            </div>  
            </div>
           <div class="sm:col-span-5">
           <div className='mx-auto grid  sm:grid-cols-12'>
              {
                sections.map((section, index) =>{
                  return(
                  <div key={index} className='sm:col-span-4'>
                      <h6 className='text-xl font-semibold mb-4 mt-4'>{section.title}</h6>
                      <ul>
                        {
                          section.items.map((item, i)=>{
                            return(
                            <li key={i} className='py-1'>
                              <a href={item.link}>{item.name}</a>  
                            </li>
                            )
                          })
                        }
                      </ul>
                  </div>
                  );
                })
              }
            </div>
           </div>
           <div className='sm:col-span-3'>
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
            <p className='mt-4'>Call us on</p>
            <h4>8185 800 800</h4>
            <p className='mt-4'>Email</p>
            <h4>projects@propex.ai</h4>
           </div>
          </div>

        </div>
    </>
  )
}

export default Footer
