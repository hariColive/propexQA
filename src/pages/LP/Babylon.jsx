import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnquireFormModal from '../../components/EnquireFormModal';
import "../LP/lp.css"

const Babylon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const gallery = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows:2,
        gap:10,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ]
    };
    
  return (
    <div className='mt-[52px] md:mt-[68px] overflow-x-hidden md:overflow-x-auto'>
        <div className="bannerSection h-[360px] md:h-[570px] flex flex-col justify-center items-center bg-cover bg-[url('/images/babylon/HeroBannerMob.png')] md:bg-[url('/images/babylon/HeroBanner.png')]">
            <h1 className='text-white text-[26px] md:text-5xl font-extrabold text-center md:text-left leading-8 md:leading-normal'>Bespoke Internationally Designed Villas</h1>
            <p className='text-white text-base md:text-2xl font-medium my-2'>Live the luxury dream. Invest today.</p>
            <button className='text-white text-base md:text-[18px] font-semibold bg-[#EF1284] px-7 py-2.5 md:px-10 md:py-3 rounded-[6px] mt-2 md:mt-6 cursor-pointer' onClick={()=>setIsModalOpen(true)}>Enquire Now</button>
        </div>
        <div className='introductionSection py-8 px-4 md:py-12 md:px-12'>
            <div className='grid grid-cols-12 gap-5 md:gap-16'>
                <div className='col-span-12 md:col-span-5 order-2'>
                    <img className='' src='/images/babylon/introduction.png' alt='intro'/>
                </div>
                <div className='col-span-12 md:col-span-7 flex flex-col justify-center px-5 order-1'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-2 text-center md:text-left'>Introduction</h3>
                    <p className='text-[14px] md:text-[20px] font-normal text-center md:text-left'>Unveil a new chapter in luxury living at Babylon, a captivating riverside sanctuary nestled amidst the vibrant landscape of Mumbai. Inspired by the grandeur of ancient Babylon, this exclusive enclave offers bespoke, internationally designed villas and villa plots, crafted to elevate your everyday experience.</p>
                </div>
            </div>
        </div>
        <div className='preLaunchSection bg-[#F3F3F3] px-4 md:px-12 pt-8 md:pt-10 pb-8 md:pb-14'>
            <h3 className='text-[25px] md:text-[40px] font-semibold mb-5 md:mb-8 text-center'>Pre-launching <br className='block md:hidden'/> @ ₹6000/ sq ft</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12'>
                <div className='card p-2 md:p-4 border border-[#00000020] rounded-[10px] bg-white'>
                    <img src='/images/babylon/SereneVillaPlots.png' alt='plots'></img>
                    <div className='px-2 md:px-5 pt-2 md:pt-7'>
                        <h3 className='text-[20px] md:text-[27px] font-semibold'>Serene Villa Plots</h3>
                        <p className='text-[12px] md:text-[18px] font-normal mt-1 md:mt-2 mb-2 md:mb-0'>Design your dream home from the ground up on your expansive villa plot. Babylon offers the freedom to personalize your living space while retaining the project's exquisite aesthetic.</p>
                    </div>
                </div>
                <div className='card p-2 md:p-4 border border-[#00000020] rounded-[10px] bg-white'>
                    <img src='/images/babylon/InternationallyDesignedVillas.png' alt='villas'></img>
                    <div className='px-2 md:px-5 pt-2 md:pt-7'>
                        <h3 className='text-[20px] md:text-[27px] font-semibold'>Bespoke Internationally Designed Villas</h3>
                        <p className='text-[12px] md:text-[18px] font-normal mt-1 md:mt-2 mb-2 md:mb-0'>Unparalleled luxury with our architecturally stunning villas. Each residence is a masterpiece of contemporary eclectic design, featuring a surprising yet refined interplay of materials & textures.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='amenitiesSection px-4 md:px-12 py-8 md:py-10'>
            <h3 className='text-[25px] md:text-[40px] font-semibold mb-6 md:mb-8 text-center'>Amenities</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                <div className='relative'>
                    <img src='/images/babylon/clubhouse.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Club House</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/SwimmingPool.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Swimming Pool</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/Gym.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Gym</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/yogaroom.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Yoga Room</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/basketball.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Basket Ball Court</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/readingroom.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Reading Room</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/cafe.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Cafetaria</p>
                </div>
                <div className='relative'>
                    <img src='/images/babylon/Pharmacy.png' alt='clubhouse'/>
                    <p className='absolute text-white text-base md:text-2xl font-normal left-3 bottom-3.5'>| Pharmacy</p>
                </div>
            </div>
            <div className=''>
                <p className='text-base text-right mt-1'>Many more...</p>
            </div>
        </div>
        <div className='whyInvestSection px-4 md:px-12 py-8 md:py-10 bg-[#f3f3f3]'>
            <h3 className='text-[25px] md:text-[40px] font-semibold mb-8 text-center'>Why Invest</h3>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                <div className='flex flex-col justify-start md:justify-center items-center gap-2 md:gap-4 mb-8 md:mb-auto'>
                    <img className='w-[60px] md:w-auto' src='/images/babylon/UnparalleledDesign.png' alt='unparalleledesign'/>
                    <p className='text-base md:text-[20px] font-medium text-center leading-5'>Unparalleled <br className='block md:hidden'/> Design</p>
                </div>
                <div className='flex flex-col justify-start md:justify-center items-center gap-2 md:gap-4 mb-8 md:mb-auto'>
                    <img className='w-[60px] md:w-auto' src='/images/babylon/SereneSetting.png' alt='unparalleledesign'/>
                    <p className='text-base md:text-[20px] font-medium text-center leading-5'>Serene Setting</p>
                </div>
                <div className='flex flex-col justify-start md:justify-center items-center gap-2 md:gap-4'>
                    <img className='w-[60px] md:w-auto' src='/images/babylon/World-ClassAmenities.png' alt='unparalleledesign'/>
                    <p className='text-base md:text-[20px] font-medium text-center leading-5'>World-Class<br className='block md:hidden'/> Amenities</p>
                </div>
                <div className='flex flex-col justify-start md:justify-center items-center gap-2 md:gap-4'>
                    <img className='w-[60px] md:w-auto' src='/images/babylon/InvestmentPotential.png' alt='unparalleledesign'/>
                    <p className='text-base md:text-[20px] font-medium text-center leading-5'>Investment<br className='block md:hidden'/> Potential</p>
                </div>
            </div>
        </div>
        <div className='locationHighlightsSection px-0 md:px-12 py-8 md:py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-black'>
                <div>
                    <img src='/images/babylon/location.png' alt='location'/>
                </div>
                <div className='px-4 md:px-10 py-5 md:py-0 flex flex-col justify-center'>
                    <h3 className='text-white text-[25px] md:text-[40px] font-semibold'>Location Highlights</h3>
                    <p className='text-white text-[14px] md:text-[18px] leading-5 md:leading-8 font-normal py-2 md:py-4'>Situated within Mumbai, Babylon places you just an hour away from prominent city centers like Dadar and BKC. Dadar, a well-established neighborhood, offers a plethora of shopping options, historical landmarks, and educational institutions. BKC, Mumbai's central business district, is a hub for corporate offices and a vibrant commercial scene.</p>
                    <ul className='text-white list-disc text-[14px] md:text-[18px] font-normal pl-5 mt-2 md:mt-0'>
                        <li className='mb-2'>1 hour from Dadar</li>
                        <li className='mb-2'>1 hour from BKC</li>
                        <li className='mb-2'>Easy access to expressways</li>
                        <li className='mb-2'>Proximity to nearby railway stations</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='gallerySection px-4 md:px-12 py-8 md:py-10 pt-0 md:pt-8'>
            <h3 className='text-[25px] md:text-[40px] font-semibold text-center mb-4 md:mb-8'>Gallery</h3>
            <Slider {...gallery}>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/11.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-2 py-1' src='/images/babylon/gallery/12.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/13.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/14.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/15.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/16.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/17.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/18.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/19.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/20.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/21.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/22.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/23.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/24.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/25.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/26.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/27.png' alt='gallery'/>
                </div>
                <div>
                    <img className='px-1.5 py-0.5' src='/images/babylon/gallery/28.png' alt='gallery'/>
                </div>
            </Slider>
        </div>
        <div className='aboutBabylonSection px-4 md:px-12 py-8 md:py-10 bg-[#F0F0F0]'>
            <div className='grid grid-cols-12 gap-0 md:gap-10'>
                <div className='col-span-12 md:col-span-4 m-auto'>
                    <img className='w-[170px] md:w-auto' src='/images/babylon/BabylonLogo.png' alt='babylon'/>
                </div>
                <div className='col-span-12 md:col-span-8 px-0 md:px-12 flex flex-col justify-center'>
                    <h3 className='text-[25px] md:text-[40px] text-center md:text-left font-semibold mb-4 mt-4 md:mt-0'>About Babylon</h3>
                    <p className='text-[14px] md:text-[18px] leading-7 md:leading-8 font-normal'>Drawing inspiration from the legendary city, Babylon promises an unparalleled living experience. Imagine waking up to breathtaking river views, surrounded by meticulously landscaped gardens, and enjoying a plethora of world-class amenities at your fingertips. This is the essence of life at Babylon - a fusion of timeless grandeur and contemporary luxury.</p>
                </div>
            </div>
        </div>
        <div className="investTodaySection bg-cover bg-[url('/images/babylon/LuxuryDreamBG.png')] h-[250px] md:h-[376px] flex flex-col justify-center items-center">
            <h2 className='text-white text-[25px] md:text-[60px] font-semibold mb-4 text-center leading-7 md:leading-normal'>Live the luxury dream.<br className='block md:hidden'/> Invest today.</h2>
            <button className='text-white text-[18px] md:text-[25px] font-semibold bg-[#EF1284] px-8 md:px-10 py-2.5 md:py-3 rounded-[6px] mt-5 cursor-pointer' onClick={()=>setIsModalOpen(true)}>Invest Now</button>
        </div>
        <div>
            <EnquireFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} leadSource="Propex Babylon" LPId={78} mobNumValidate={false} otpVerify={false}  />
        </div>  
    </div>
  )
}

export default Babylon