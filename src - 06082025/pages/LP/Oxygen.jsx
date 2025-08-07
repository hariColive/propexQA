import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LP/lp.css"

const Oxygen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const amenities = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
        gap:10,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const testimonials = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        gap:10,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
  return (
    <div className='mt-[52px] md:mt-[68px] overflow-x-hidden md:overflow-x-auto bg-[#f5f5f5]'>
        <div className="bannerSection h-[370px] md:h-[620px] flex flex-col justify-center bg-cover bg-[url('/images/oxygen/OxygenHeroBanner-Mob.png')] md:bg-[url('/images/oxygen/OxygenHeroBanner.png')] pl-10">
            <img className='w-[40px]' src='/images/oxygen/LeafWhite.png' alt='leaf'/>
            <p className='text-white text-[20px] md:text-[40px] font-semibold mt-2'>Welcome to Oxygen</p>
            <h1 className='text-white text-[26px] md:text-[80px] font-extrabold text-center md:text-left leading-27'>Own Your Piece <br/>of Heaven</h1>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-7'> 
                <div className='py-8 px-4 md:pt-8 md:pb-4 md:px-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-2 text-center md:text-left flex items-center gap-2'>Introduction<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <p className='text-[14px] md:text-[20px] font-normal text-center md:text-left'>Escape the urban hustle and find harmony in nature at Project Codename Oxygen in picturesque Harihareshwar, Maharashtra, with our serene coastal farm plots.</p>
                </div>
                <div className='py-8 px-4 md:py-5 md:px-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-2 text-center md:text-left flex items-center gap-2'>Location Highlights<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <div className='grid grid-cols-12 justify-between'>
                        <div className='col-span-6'>
                            <ul className='text-[18px] font-normal leading-[26px] list-disc pl-4'>
                                <li className='mb-2'>National Setu Highway: ~60 km</li>
                                <li>Navi Mumbai International Airport~ 150 km</li>
                            </ul>
                        </div>
                        <div className='col-span-6'>
                            <ul className='text-[18px] font-normal leading-[26px] list-disc pl-8'>
                                <li className='mb-2'>Mangaon Railway Station: ~60 km</li>
                                <li>Mumbai Railway Station: ~185 km</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <img className='w-auto hidden md:block' src='/images/oxygen/LocationHighlights.png' alt='location'/>
                        <img className='w-auto blcok md:hidden' src='/images/oxygen/LocationHighlights.png' alt='location'/>
                    </div>
                </div>
                <div className='py-8 px-4 md:py-5 md:px-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-4 text-center md:text-left flex items-center gap-2'>Amenities<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <Slider {...amenities}>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Amenitie1.webp' alt='amenities'/>
                        </div>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Aminitie2.webp' alt='amenities'/>
                        </div>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Aminitie3.webp' alt='amenities'/>
                        </div>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Aminitie4.webp' alt='amenities'/>
                        </div>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Aminitie5.webp' alt='amenities'/>
                        </div>
                        <div className='px-4'>
                            <img className='rounded-[12px]' src='/images/oxygen/Aminitie6.webp' alt='amenities'/>
                        </div>
                    </Slider>
                </div>
                <div className='py-8 px-4 md:py-5 md:px-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-4 text-center md:text-left flex items-center gap-2'>Investment Details<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <div className='grid grid-cols-12 justify-between'>
                        <div className='col-span-6'>
                            <div className=''>
                                <p className='text-[20px] font-normal'>Pre Launch Price</p>
                                <h4 className='text-[40px] font-bold text-[#308034]'>₹ 54,60,000</h4>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className=''>
                                <p className='text-[20px] font-normal'>Pre Launch Rate</p>
                                <h4 className='text-[40px] font-bold text-[#308034]'>₹ 500/sq ft</h4>
                            </div>
                        </div>
                        <div className='col-span-6 mt-4'>
                            <div className=''>
                                <p className='text-[20px] font-normal'>Launch Price</p>
                                <h4 className='text-[40px] font-bold text-[#308034]'>₹ 81,90,000</h4>
                            </div>
                        </div>
                        <div className='col-span-6 mt-4'>
                            <div className=''>
                                <p className='text-[20px] font-normal'>Launch Rate</p>
                                <h4 className='text-[40px] font-bold text-[#308034]'>₹ 750/sq ft</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-8 px-4 md:py-6 md:px-12 bg-[#30803424]'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-4 text-center md:text-left flex items-center gap-2'>Why To Invest In This Project<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <div className='grid grid-cols-12 justify-between mt-6 mb-6'>
                        <div className='col-span-6'>
                            <div className=''>
                                <img className='w-[40px] mb-1' src='/images/oxygen/StrategicLocation.png' alt='image'/>
                                <p className='text-[20px] font-normal'>Strategic Location</p>
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className=''>
                                <img className='w-[40px] mb-1' src='/images/oxygen/NaturalBeauty&Serenity.png' alt='image'/>
                                <p className='text-[20px] font-normal'>Natural Beauty & Serenity</p>
                            </div>
                        </div>
                        <div className='col-span-6 mt-7'>
                            <div className=''>
                                <img className='w-[40px] mb-1' src='/images/oxygen/InvestmentPotential.png' alt='image'/>
                                <p className='text-[20px] font-normal'>Investment Potential</p>
                            </div>
                        </div>
                        <div className='col-span-6 mt-7'>
                            <div className=''>
                                <img className='w-[40px] mb-1' src='/images/oxygen/GrowthofWellnessTourism.png' alt='image'/>
                                <p className='text-[20px] font-normal'>Growth of Wellness Tourism</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-8 md:py-5 md:pl-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-4 text-center md:text-left flex items-center gap-2'>Amenities<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <Slider {...testimonials}>
                        <div className='px-3'>
                            <div className='border rounded-[6px] border-[#D2D2D2] bg-[#EFEFEF] py-4 px-4 h-[310px]'>
                                <p className='text-[18px] font-normal'>"Harihareshwar’s charm combined with the modern amenities at Oxygen makes it a unique investment opportunity. The connectivity to major cities and the peaceful environment provide an ideal balance of convenience and tranquility."</p>
                                <h4 className='text-[18px] font-semibold mt-2'>Rajesh M</h4>
                                <h6 className='text-[18px] font-normal text-[#555555]'>Pune</h6>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='border rounded-[6px] border-[#D2D2D2] bg-[#EFEFEF] py-4 px-4 h-[310px]'>
                                <p className='text-[18px] font-normal'>"I was looking for a place that offers both natural beauty and modern comforts. Oxygen exceeded my expectations. The well-thought-out amenities and the stunning coastal views make it a perfect retreat spot. Highly recommend!"</p>
                                <h4 className='text-[18px] font-semibold mt-2'>Priya S</h4>
                                <h6 className='text-[18px] font-normal text-[#555555]'>Navi Mumbai</h6>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='border rounded-[6px] border-[#D2D2D2] bg-[#EFEFEF] py-4 px-4 h-[310px]'>
                                <p className='text-[18px] font-normal'>"What stood out for me was the blend of serenity and convenience. The proximity to the beach and the modern amenities at Oxygen make it an excellent choice for anyone seeking a peaceful retreat without sacrificing connectivity."</p>
                                <h4 className='text-[18px] font-semibold mt-2'>Neha R</h4>
                                <h6 className='text-[18px] font-normal text-[#555555]'>Pune</h6>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='border rounded-[6px] border-[#D2D2D2] bg-[#EFEFEF] py-4 px-4 h-[310px]'>
                                <p className='text-[18px] font-normal'>"Oxygen offers a refreshing change from the usual real estate options. The location, surrounded by nature and yet close to essential urban hubs, offers the perfect balance. It’s a fantastic investment with incredible growth potential."</p>
                                <h4 className='text-[18px] font-semibold mt-2'>Meera J</h4>
                                <h6 className='text-[18px] font-normal text-[#555555]'>Mumbai</h6>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className='py-8 md:py-5 md:pl-12'>
                    <h3 className='text-[25px] md:text-[40px] font-semibold mb-4 text-center md:text-left flex items-center gap-2'>Have Questions? We Have Answers<span><img className='w-[40px]' src='/images/oxygen/LeafGreen.png' alt='leaf'/></span></h3>
                    <div>
                        <ol className='list-decimal ml-5'>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Is this land owned by SIPL or JV?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>The land is owned by Rraam Shhyam Infraventures Pvt. Ltd.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>How far is the project from the beaches?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Most beaches are within a 9 km radius, approximately 10 minutes away.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What are the famous landmarks near the Oxygen project site?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Nearby landmarks include HariHareshwar Temple, HariHareshwar Beach, Shrivardhan Beach, Bagmandla Ferry, Aravi Beach, Diveagar Beach, Himmatgad Fort, and Velas Beach.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Can clients convert farmland into N.A. and build their own property?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Converting a single plot into N.A. is not feasible, but clients can legally build a farmhouse.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What percentage of the total area is designated as open space?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Approximately 10%.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What are the different plot sizes?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>In Phase 1, all plots are 10,920 sq. ft. each</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Can owners construct their own structure or cottage, and are there design standards?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Owners can build according to their own design, with no prescribed design, elevation, or facade standards.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>When will the agreement and registration be executed?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Agreements can be made anytime between the developer and client. Registration occurs only after full payment.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What is the maximum allowable built-up area for a 10,920 sq. ft. farmland?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Clients can construct a farmhouse with a maximum carpet area of 1,092 sq. ft., which is 10% of the plot size.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What is the water source, and how many borewells are there?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>There are 6 water sources on the land, making it the only parcel in the area with abundant water.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Is there a provision for visitor car parking?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Yes.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Is there a lock-in period for reselling the farmland after registration?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>No.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Is the land leasehold or freehold?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Freehold.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>When will the project receive RERA approval?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>RERA does not apply to farmhouse plots.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>What is the possession timeline for farmland, cottages, and villas?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Legal possession occurs after full payment. Technical work can be done in the meantime.</p>
                            </li>
                            <li className='text-[18px] font-medium'>
                                <h6 className='text-[20px] font-medium mt-4'>Which banks or financial institutions have approved the property?</h6>
                                <p className='text-[16px] font-normal mt-2 text-[#555555]'>Loans are not available for farmhouse plots.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='col-span-5'></div>
        </div>
    </div>
  )
}

export default Oxygen