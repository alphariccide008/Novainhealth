import React from 'react'
import { Link } from 'react-router-dom';
import Profile from '../assets/images/docgoogle.png'
import { GiHamburgerMenu } from "react-icons/gi";
import Union from '../assets/images/Union.png'
import PatientEmerg from '../assets/images/patientemerg.png'

import Home from '../assets/images/homelogo.png'
import { CalendarDaysIcon, ShareIcon} from '@heroicons/react/20/solid';
import { FaUserDoctor } from 'react-icons/fa6';
import { HomeIcon ,PlusIcon, DocumentTextIcon ,LockClosedIcon, StarIcon,ExclamationTriangleIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon} from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';


const PatientSidebar = () => {
  return (
    <>
        <div className='bg-white md:block hidden rounded  h-[80%]'>
                      <div className=' px-8 text-[#757575]  py-3 '>
                      
                      <Link to="#" >
                      <GiHamburgerMenu className='text-2xl pb-'/>
                      </Link>
                     
                      </div>
                     <div className=' px-2 text-[#757575]  py-3 '>
                      
                      <Link to="#" className='text-18px'>
                      <img src={Home} alt="" />
                      </Link>
                     
                      </div>
                      
                      <div className=' px-8 text-[#757575]  py-3 '>
                      
                      <Link to="#" className='text-18px'>
                      <HomeIcon className="h-6 w-6 mr-5 " />
                      </Link>
                     
                      </div>
                    
                      <div className=' px-8  text-[#757575] py-3'>
                      
                      <Link to="#" className='text-18px'>
                      <CalendarDaysIcon className="h-6 w-6 mr-5 " />
                      </Link>
                      </div>
                      
                      <div className='px-8  text-[#757575] py-3 '>
                      
                      <Link to="#" className='text-18px'>
                      <FaUserDoctor className="h-6 w-6 mr-5 " />
                      </Link>
                      </div>
                      
                      <div className=' px-8  text-[#757575]  py-3 '>
                      
                      <Link to="#" className='text-18px'>
                      <img src={PatientEmerg} alt="" />
                      </Link>
                      </div>
                      
                      <div className=' px-8 flex text-[#757575] py-3 '>
                      
                      <Link to="#" className='text-18px'>
                       <img src={Union} alt="" />
                      </Link>
                     
                      </div>
                      
                     
                     
                      <div className=' px-8  text-[#757575] py-3 '>
                      <ChatBubbleLeftRightIcon className="h-6 w-6 mr-5 " />
                     
                      </div>
                      
                      <div className=' px-8  text-[#757575] py-3 '>
                      <FaUserCircle className="h-6 w-6 mr-5 " />
                      
                      </div>
                      
                      <div className=' px-8  text-[#757575]  py-3 '>
                      <ShareIcon className="h-6 w-6 mr-5 " />
                      
                      </div>
                      
                      <div className=' px-8  text-[#757575] py-3 '>
                      <LockClosedIcon className="h-6 w-6 mr-5 " />
                     
                      </div>
                      
                      <div className=' px-8  text-[#757575] py-3'>
                      <ArrowRightOnRectangleIcon className="h-6 w-6 mr-5 " />
                      
                      </div>
        
                  </div>
    </>
  )
}

export default PatientSidebar