import React, { useState, useEffect } from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MapPinIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import Image from '../assets/images/docgoogle.png';

const profiles = [
  {
    id: 1,
    image: Image,
    name: 'Blossom Efe',
    qualification: 'MDS - Periodontology and Oral Implantology, BDS',
    location: 'Florida, USA',
    availability: 'Available on Friday, 22nd March',
    price: '$300 - $500',
  },
  {
    id: 2,
    image: Image,
    name: 'John Doe',
    qualification: 'DDS - Orthodontics',
    location: 'California, USA',
    availability: 'Available on Monday, 25th March',
    price: '$250 - $450',
  },
  {
    id: 3,
    image: Image,
    name: 'Jane Smith',
    qualification: 'MBBS - Dermatology',
    location: 'New York, USA',
    availability: 'Available on Tuesday, 26th March',
    price: '$200 - $400',
  },
  {
    id: 4,
    image: Image,
    name: 'Mark Ray',
    qualification: 'MD - Pediatrics',
    location: 'Texas, USA',
    availability: 'Available on Wednesday, 27th March',
    price: '$280 - $470',
  },
  {
    id: 5,
    image: Image,
    name: 'Anna Bell',
    qualification: 'DO - Cardiology',
    location: 'Nevada, USA',
    availability: 'Available on Thursday, 28th March',
    price: '$350 - $550',
  },
  {
    id: 6,
    image: Image,
    name: 'Leo Finch',
    qualification: 'DDS - Endodontics',
    location: 'Illinois, USA',
    availability: 'Available on Friday, 29th March',
    price: '$260 - $420',
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bg-[#e7a4cc] relative'>
      <div className="md:mx-[7%] md:flex">
        {/* Left Section (Unchanged) */}
        <div className="flex-col md:w-1/3 pt-16">
          <h1 className='text-[24px] lg:pr-20 playfair font-bold'>
            Trusted, Verified Medical Experts at Your Fingertips
          </h1>
          <p className='text-[12px] pt-2 poppins'>
            Certified doctors, ready to care for you—wherever, whenever
          </p>
          <p className='text-[14px] pt-16'>
            Our network includes certified doctors and healthcare professionals...
          </p>
          <div className='pt-12 text-[12px]'>
            <Link to="" className='px-6 py-2 rounded poppins text-white bg-[#46B8E3]'> Read More</Link>
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex-col md:w-2/3 pt-16 relative">
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
                  className="w-1/3 p-[10px] rounded mt-4 poppins bg-white"
                >
                  <img src={profile.image} alt={profile.name} />
                  <p className='text-[18px] py-3 flex'>
                    {profile.name}
                    <CheckCircleIcon className='w-6 h-6 mx-2 text-[#0B6E4F]' />
                  </p>
                  <p className='text-[12px] pb-2'>{profile.qualification}</p>
                  <p className='text-[12px] flex pb-2'><MapPinIcon className='w-4 h-4' /> {profile.location}</p>
                  <p className='text-[12px] flex pb-2'><ClockIcon className='w-4 h-4' /> {profile.availability}</p>
                  <p className='text-[12px] flex pb-2'><BanknotesIcon className='w-4 h-4' /> {profile.price}</p>
                  <div className='space-x-2 py-5'>
                    <Link to="" className='text-[12px] border border-[#46B8E3] text-[#46B8E3] px-6 py-2 rounded'>View Profile</Link>
                    <Link to="" className='text-[12px] border px-6 py-2 rounded text-white bg-[#46B8E3]'>Book Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expert;





<div className="md:w-[15%]">
<img src={Surggy} className=" w-[100%] h-[390px] md:h-[20%]" alt="" />
<div className="flex mt-3">
    <h1>Michael Smith</h1><CheckCircleIcon className="w-5 h-5 mx-2 text-[#0B6E4F]" />
</div>
<p className="text-[10px] text-[#757575]">MBBS, Gynecology and Pediatric Medicine</p>
<div className="flex my-3">
<p className="text-yellow-500 text-[14px] pb-2">
{"★".repeat(3) + "☆".repeat(5 - 3)}
</p>
<p>(177893)</p>
</div>
<div className="flex gap-3">
<img src={MoneyWallet} className="w-4 h-4" alt="" />
<span className="text-[12px]">$300 - $500</span>
<img src={Caution} className="w-4 h-4" alt="" />

</div>
<div className="flex my-3 gap-3">
<Link to="/chat" className="flex p-[2px] border rounded items-center gap-2">
    <BookmarkIcon className="h-4 w-4 " />

</Link>
<Link to="/chat" className="flex border rounded p-[2px] items-center gap-2">
    <ChatBubbleLeftEllipsisIcon className="h-4 w-4 " />

</Link>

<Link to="/chat" className="flex border rounded p-[2px] items-center gap-2">
    <PhoneIcon className="h-4 w-4 " />

</Link>

<Link to="/chat" className="flex border rounded p-[2px] items-center gap-2">
    <VideoCameraIcon className="h-4 w-4" />

</Link>


</div>
<div className="text-[12px] mt-5">
<h1 className="font-extrabold">BIOGRAPHY</h1>
<p>
Dr. Michael Smith is a highly accomplished Gynecologist and Pediatrician with over 15 years of experience in providing exceptional healthcare for women and children. With expertise in women’s reproductive health, high-risk pregnancy management, and pediatric wellness, he is dedicated to ensuring the well-being of mothers and children at every stage of life.

As a Gynecologist, Dr. Smith specializes in prenatal care, fertility counseling, menstrual disorders, minimally invasive gynecologic procedures, and overall reproductive health. His commitment to patient-centered care has helped thousands of women navigate pregnancy, childbirth, and reproductive challenges with confidence.

As a Pediatrician, Dr. Smith is known for his compassionate approach to child development, immunizations, nutritional guidance, and early disease detection. He has worked extensively with newborns, infants, and children, ensuring they receive the best medical care to support healthy growth and development.
</p>

</div>
</div>  