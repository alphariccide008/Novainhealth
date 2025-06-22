import React, { useState, useEffect } from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import Image from '../assets/images/docgoogle.png';
import Image1 from '../assets/images/doc1.png';
import Image2 from '../assets/images/doc2.png';

const profiles = [
  {
    id: 1,
    image: Image1,
    name: 'Blossom Efe',
    qualification: 'MDS - Periodontology and Oral Implantology, BDS',
    location: 'Florida, USA',
    availability: 'Available on Friday, 22nd March',
    price: '$300 - $500',
    rating: 4,
  },
  {
    id: 2,
    image: Image,
    name: 'John Doe',
    qualification: 'DDS - Orthodontics',
    location: 'California, USA',
    availability: 'Available on Monday, 25th March',
    price: '$250 - $450',
    rating: 4,
  },
  {
    id: 3,
    image: Image2,
    name: 'Jane Smith',
    qualification: 'MBBS - Dermatology',
    location: 'New York, USA',
    availability: 'Available on Tuesday, 26th March',
    price: '$200 - $400',
    rating: 4,
  },
  {
    id: 4,
    image: Image1,
    name: 'Mark Ray',
    qualification: 'MD - Pediatrics',
    location: 'Texas, USA',
    availability: 'Available on Wednesday, 27th March',
    price: '$280 - $470',
    rating: 4,
  },
  {
    id: 5,
    image: Image,
    name: 'Anna Bell',
    qualification: 'DO - Cardiology',
    location: 'Nevada, USA',
    availability: 'Available on Thursday, 28th March',
    price: '$350 - $550',
    rating: 4,
  },
  {
    id: 6,
    image: Image2,
    name: 'Leo Finch',
    qualification: 'DDS - Endodontics',
    location: 'Illinois, USA',
    availability: 'Available on Friday, 29th March',
    price: '$260 - $420',
    rating: 4,
  },
];

const Expert = () => {
  const slidesToShow = 3;
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
    <section className='bg-[#e7a4cc] py-10 relative'>
      <div className="md:mx-[7%] md:flex">
        {/* Left Section (Unchanged) */}
        <div className="flex-col md:w-1/3 md:px-2 px-6 pt-20">
          <h1 className='text-[24px]  lg:pr-20 playfair font-bold'>
            Trusted, Verified Medical Experts at Your Fingertips
          </h1>
          <p className='text-[12px] pt-2 poppins'>
            Certified doctors, ready to care for you—wherever, whenever
          </p>
          <p className='md:text-[14px] text-[12px] poppins pt-16'>
                Our network includes certified doctors and healthcare 
                professionals with diverse expertise, from general 
                practitioners to specialists ready to help you on your 
                journey to living a healthy life. Our medical professionals 
                are rigorously vetted to ensure you receive the highest 
                standard of care. Each doctor is fully licensed and certified 
                within their field, bringing years of experience and 
                dedication to patient well-being
          </p>
          <div className='pt-20 text-[12px]'>
            <Link to="" className='px-6 py-2 rounded poppins text-white bg-[#46B8E3]'> Read More</Link>
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex-col md:w-2/3  mb-10  mx-2 pt-14 relative">
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
                  className="md:w-1/3 w-1/4 p-[10px] md:m-2 m-1 rounded mt-4 poppins bg-white"
                >
                  <img src={profile.image} alt={profile.name} />
                  <p className='text-[18px] py-3 flex'>
                    {profile.name}
                    <CheckCircleIcon className='w-6 h-6 mx-2 text-[#0B6E4F]' />
                  </p>
                  <p className='text-[12px] pb-2'>{profile.qualification}</p>
                  <p className="text-yellow-500 text-[14px] pb-2">
                    {'★'.repeat(profile.rating) + '☆'.repeat(5 - profile.rating)}
                    </p>
                  <p className='text-[12px] flex pb-2'><MapPinIcon className='w-4 h-4' /> {profile.location}</p>
                  <p className='text-[12px] flex pb-2'><ClockIcon className='w-4 h-4' /> {profile.availability}</p>
                  <p className='text-[12px] flex pb-2'><BanknotesIcon className='w-4 h-4' /> {profile.price}</p>
                  <div className='space-x-2 flex justify-center py-5'>
                    <Link to="" className='text-[12px] border border-[#46B8E3] text-[#46B8E3] px-6 py-2 rounded hover:bg-[#46B8E3] hover:text-white'>View Profile</Link>
                    <Link to="" className='text-[12px] border px-6 py-2 rounded hover:bg-white hover:border hover:border-{#46B8E3]} hover:text-[#46B8E3] text-white bg-[#46B8E3]'>Book Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expert;
