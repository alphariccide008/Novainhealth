import React , { useState, useEffect } from 'react'
import './components.css'
import Icu from '../assets/images/icu1.png'
import Wheels from '../assets/images/wheel.png'
import Theatre from '../assets/images/thatre.png'
import Mri from '../assets/images/mri.png'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';


const profiles = [
  {
    id: 1,
    image: Wheels,
    alt:'consulting',
    header: 'Consluting Room'
  },
  {
    id: 2,
    image: Icu,
    alt:'icu',
    header:'ICU'
  },
  {
    id: 3,
    image: Mri,
    alt:'Mri Testing',
    header:'MRI Testing Facility'
  },
  {
    id: 4,
    image: Theatre,
    alt:'emergency',
    header:'Standard Theatre'
  },
   {
    id: 1,
    image: Wheels,
    alt:'consulting',
    header: 'Consluting Room'
  },
  {
    id: 2,
    image: Icu,
    alt:'icu',
    header:'ICU'
  },
  {
    id: 3,
    image: Mri,
    alt:'Mri Testing',
    header:'MRI Testing Facility'
  },
  {
    id: 4,
    image: Theatre,
    alt:'emergency',
    header:'Standard Theatre'
  },

  
];


const Features = () => {

    const slidesToShow = 4;
     const totalSlides = Math.ceil(profiles.length / slidesToShow);
     const [currentSlide, setCurrentSlide] = useState(0);
   
     const handleNext = () => {
       setCurrentSlide((prev) => (prev + 1) % totalSlides);
     };
   
     const handlePrev = () => {
       setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
     };
   
     useEffect(() => {
       const interval = setInterval(() => {
         handleNext();
       }, 4000);
       return () => clearInterval(interval);
     }, []); 
  return (
    <>
        <section className='md:h-[785px] py-20'>
            <div className="md:flex md:pt-[10%] px-2  md:mx-[8%]">
                <div className="flex-col md:w-1/2">
                    <img src={Icu} className='rounded' alt="" />
                </div>
                <div className="flex-col md:w-1/2  md:px-10 px-4 md:text-start text-center">
                    <h1 className='text-[36px]   playfair'>Available Features In Our Partner Clinics</h1>
                    <p  className='text-[12px] md:pr-12 poppins'>Our partners offer state-of-the-art diagnostics, expert specialist consultations, and comprehensive care tailored to your needs. From outpatient services to routine check-ups and specialist treatments, experience seamless, quality healthcare anytime, anywhere.

                    </p>
                    <div className="flex-col  mb-10  md:mx-2 pt-6 relative">
                          <div className="overflow-hidden rounded-lg">
                            <div
                              className="flex transition-transform duration-500 ease-in-out"
                              style={{
                                width: `${(profiles.length / slidesToShow) * 100}%`,
                                transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`
                              }}
                            >
                              {profiles.map((profile, index) => (
                                <div
                                  key={profile.id}
                                  className="w-1/3 p-[10px]  rounded mt-4 poppins "
                                >
                                  <img src={profile.image} className='rounded-full md:m-2 w-14 h-14 md:w-24 md:h-24' alt={profile.alt} />
                                  <p className='text-[12px] poppins text-center py-3 flex'>
                                    {profile.header}
                                    
                                  </p>
                                  
                                 
                               
                                
                              
                                 
                                </div>
                              ))}
                            </div>
                          </div>
                
                          {/* Navigation Buttons */}
                          {/* <button
                            onClick={handlePrev}
                            className="absolute top-1/2  left-[-6px] transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
                          >
                            <FaArrowLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
                          >
                            <FaArrowRight className="w-4 h-4" />
                          </button> */}
                    </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Features