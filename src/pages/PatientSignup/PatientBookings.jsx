import React from "react"
import { Link } from "react-router-dom"
import '../../components/components.css'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { HiOutlineSearch } from 'react-icons/hi';
import Image from '../../assets/images/docgoogle.png'
import PatientSidebar from "../../components/PatientSidebar";

import Union from '../../assets/images/Union.png'
import PatientEmerg from '../../assets/images/patientemerg.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {  PlusCircleIcon, HomeIcon ,PlusIcon, DocumentTextIcon ,LockClosedIcon, StarIcon,ExclamationTriangleIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, ShareIcon} from '@heroicons/react/20/solid';
import { FaUserDoctor } from 'react-icons/fa6';
import { } from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';


const PatientBookings = () => {
    const profiles = [
        {
          id: 1,
          image: Image,
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
          image: Image,
          name: 'Jane Smith',
          qualification: 'MBBS - Dermatology',
          location: 'New York, USA',
          availability: 'Available on Tuesday, 26th March',
          price: '$200 - $400',
          rating: 4,
        },
        {
          id: 4,
          image: Image,
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
          image: Image,
          name: 'Leo Finch',
          qualification: 'DDS - Endodontics',
          location: 'Illinois, USA',
          availability: 'Available on Friday, 29th March',
          price: '$260 - $420',
          rating: 4,
        },
      ];
  return (
    <>  
            <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Bookings</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Request Bookings</h1>
        </div>
        <div className="md:flex py-[30%] poppins mx-[5%]">
          <div className="">
            <PatientSidebar/>
          </div>
          <div className="">
          <div className="">
            <h1 className="md:text-[36px]">Find the best doctors for your health needs</h1>
            <div className=" w-full">
        <div className="w-full">
            <form action="" className=' py-10 lg:space-x-4 '>
             <div className="md:flex">
             <div className='flex-col mx-4'>
                <input type="text"  className='md:w-[298px] border w-full px-2 rounded h-[40px]' placeholder="📍 Search Location"/><br />
                <label htmlFor="" className='md:text-[12px] text-[10px] text-[#767676]'>Based on your Location</label>
              </div>
             <div className='flex-col mx-4'>
               <input type="text" className='md:w-[498px] border w-full px-2 rounded h-[40px] ' placeholder="🔍 Search Doctors, Clinics, Hospitals, Diseases, Specialization, etc"/> <br />               
               <label htmlFor="" className='lg:text-[12px] text-[10px] py-2 text-[#767676]'>Example: Dentist, Sugar checkup, Blood test, Neurosurgeon, etc</label>
             </div>
              <div className='px-4'><button className='bg-[#C52184] md:p-[12px] w-full p-3 rounded'><HiOutlineSearch className='text-white'/></button></div>
             </div>
            <div className="md:flex w-full mt-12 gap-10">
                <h1 className="text-[16px] pt-2">Search Filters</h1>
                <select name="gender" id="gender" className="border flex-col text-[12px] rounded w-full md:w-52 p-2">
                    <option value="" disabled selected className="text-gray-400">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-binary</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                 </select>
                 <select name="gender" id="gender" className="border flex-col text-[12px] rounded md:w-52 w-full p-2">
                    <option value="" disabled selected className="text-gray-400">Area of specification</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-binary</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                 </select>
            </div>
            </form>

            <div className="md:flex md:flex-wrap">
                {profiles.map((profile, index) => (
                    <div
                    key={profile.id}
                    className="md:w-[20%] w-full p-2 md:m-2 m-1 rounded mt-4 poppins bg-white"
                    >
                    <img
                        src={profile.image}
                        alt={profile.name || "Profile Image"}
                        className="w-full h-auto rounded"
                    />
                    <p className="text-[18px] py-3 flex items-center">
                        {profile.name}
                        <CheckCircleIcon className="w-5 h-5 mx-2 text-[#0B6E4F]" />
                    </p>
                    <p className="text-[12px] pb-2">{profile.qualification}</p>
                    
                    <div className="space-x-2 flex justify-center py-5">
                        <Link
                        to=""
                        className="text-[12px] border border-[#46B8E3] text-[#46B8E3] px-6 py-2 rounded hover:bg-[#46B8E3] hover:text-white transition"
                        >
                        View Profile
                        </Link>
                        <Link
                        to=""
                        className="text-[12px] border border-[#46B8E3] text-white bg-[#46B8E3] px-6 py-2 rounded hover:bg-white hover:text-[#46B8E3] hover:border-[#46B8E3] transition"
                        >
                        Book Now
                        </Link>
                    </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center items-center">
                <Link className="text-white bg-[#46B8E3] px-10 py-[8px] rounded ">Load More</Link>
            </div>

            
        </div>
        </div>
        </div>
    
            </div>  
        </div>
    </>
  )
}
export default PatientBookings