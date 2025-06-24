import React from 'react'
import { Link } from 'react-router-dom';
import './components.css'

import { ChartBarIcon } from '@heroicons/react/24/outline';
import { DocumentTextIcon, CalendarDaysIcon } from '@heroicons/react/20/solid';

import { HomeIcon ,UserIcon  ,LockClosedIcon,CogIcon, StarIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon} from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';


const DocSideBar = () => {
  return (
    <>
        <div className='poppins space-y-3 bg-white text-[18px] md:block hidden rounded  h-[80%]'>
                    
                     
                    
                      <div className='flex px-3 w-full text-[#757575]  py-3 '>
                      <HomeIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Dashboard</Link>
                     
                      </div>
                    
                      <div className='flex px-3 w-full text-[#757575] py-3'>
                      <CalendarDaysIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Appointments</Link>
                      </div>
                    
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <FaUserDoctor className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Doctors</Link>
                      </div>

                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <UserIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>My Patients</Link>
                      </div>
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <FaUserCircle className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Specialties</Link>
                      </div>
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <StarIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Reviews</Link>
                     
                      </div>
                    
                     
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <ChartBarIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Transactions</Link>
                     
                      </div>
                    
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <DocumentTextIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Invoice Reports</Link>
                     
                      </div>
                    
                      <div className='flex px-3 w-full text-[#757575] py-3 '>
                      <CogIcon className="h-5 w-5 mx-4 " />
                      <Link to="#" className='text-[14px]'>Settings</Link>
                      </div>
                    
                     
        
                  </div>
    </>
  )
}

export default DocSideBar