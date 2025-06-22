import React from 'react'
import { Link } from 'react-router-dom';
import Profile from '../assets/images/docgoogle.png'
import Client from '../assets/images/googlelog.png'
import Client1 from '../assets/images/client1.png'
import Client2 from '../assets/images/client2.png'
import Client3 from '../assets/images/client3.png'

import { HomeIcon ,UserIcon , DocumentTextIcon ,LockClosedIcon, StarIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon} from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';
import { ClockIcon ,MapPinIcon, EnvelopeIcon , XMarkIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';

const DocSideBar = () => {
  return (
    <>
        <div className='bg-white md:block hidden rounded w-1/3 h-[80%]'>
                     <div className=' pt-[20%] pb-6 flex justify-center '>
                        <img src={Profile} alt="Logo" className="rounded-full mr-5 h-[135px] w-[135px] object-cover" />
                      </div>
                      <div className="text-center mb-10  ">
                        <h1 className='text-[18px]  font-semibold'>Dr. Susan Mandible</h1>
                        <h1 className='pt-2 text-[14px] '>BDS, MDS - Oral & Maxillofacial Surgery</h1>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575]  py-3 '>
                      <HomeIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Dashboard</Link>
                     
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3'>
                      <CalendarIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Appointments</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <UserIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>My Patients</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575]  py-3 '>
                      <BellIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Schedule Timings</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <DocumentTextIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Transactions</Link>
                      <ChevronDownIcon className="h-5 w-5 ml-5 text-gray-500" />
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <StarIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Reviews</Link>
                     
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <ChatBubbleLeftRightIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Messages</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <FaUserCircle className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Profile Settings</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575]  py-3 '>
                      <ArrowUpOnSquareStackIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Social Media</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3 '>
                      <LockClosedIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Change Password</Link>
                      </div>
                      <hr />
                      <div className='flex px-8 w-full text-[#757575] py-3'>
                      <ArrowRightOnRectangleIcon className="h-6 w-6 mr-5 " />
                      <Link to="#" className='text-18px'>Logout</Link>
                      </div>
        
                  </div>
    </>
  )
}

export default DocSideBar