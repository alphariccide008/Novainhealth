import React, {useState} from 'react'
import '../../components/components.css'
import PatientSidebar from '../../components/PatientSidebar'
import Image from '../../assets/images/googlelog.png'
import Heartbeat from '../../assets/images/heartbeat.png'
import Tooth from '../../assets/images/searchtooth.png'
import Running from '../../assets/images/running.png'
import Union from '../../assets/images/Union.png'
import PatientEmerg from '../../assets/images/patientemerg.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { DocumentIcon,  } from '@heroicons/react/24/solid';
import {  PlusCircleIcon, HomeIcon ,PlusIcon, DocumentTextIcon ,LockClosedIcon, StarIcon,ExclamationTriangleIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, ShareIcon} from '@heroicons/react/20/solid';
import { FaUserDoctor } from 'react-icons/fa6';
import { } from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';





const PatientDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div
      className="relative w-full  text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#021140',
        minHeight: '100px',
        zIndex: 50,
      }}
    >
      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center md:hidden">
        <div>
          <h3 className="pt-3 text-[12px]">Home / Dashboard</h3>
          <h1 className="text-[22px] py-2 font-semibold">Dashboard</h1>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="pt-3">
          {menuOpen ? (
            <IoMdClose className="h-6 w-6 text-white" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
         <div className=' w-full md:hidden rounded flex'>
       
      
         
         <div className=' px-[] text-[#757575]  py-3 '>
         
         <Link to="#" className='text-18px'>
         <HomeIcon className="h-4 w-4 mr-5 " />
         </Link>
        
         </div>
       
         <div className=' px-[]  text-[#757575] py-3'>
         
         <Link to="#" className='text-18px'>
         <CalendarDaysIcon className="h-4 w-4 mr-5 " />
         </Link>
         </div>
         
         <div className='px-[]  text-[#757575] py-3 '>
         
         <Link to="#" className='text-18px'>
         <FaUserDoctor className="h-4 w-4 mr-5 " />
         </Link>
         </div>
         
         <div className=' px-[10px]  text-[#757575]  py-3 '>
         
         <Link to="#" className='text-18px'>
         <img src={PatientEmerg} className='h-4 w-4' alt="" />
         </Link>
         </div>
         
         <div className=' px-[10px] flex text-[#757575] py-3 '>
         
         <Link to="#" className='text-18px'>
          <img src={Union} className='w-4 h-4' alt="" />
         </Link>
        
         </div>
         
        
        
         <div className=' px-[]  text-[#757575] py-3 '>
         <ChatBubbleLeftRightIcon className="h-4 w-4 mr-5 " />
        
         </div>
         
         <div className=' px-[]  text-[#757575] py-3 '>
         <FaUserCircle className="h-4 w-4 mr-5 " />
         
         </div>
         
         <div className=' px-[]  text-[#757575]  py-3 '>
         <ShareIcon className="h-4 w-4 mr-5 " />
         
         </div>
         
         <div className=' px-[]  text-[#757575] py-3 '>
         <LockClosedIcon className="h-4 w-4 mr-5 " />
        
         </div>
         
         <div className=' px-[]  text-[#757575] py-3'>
         <ArrowRightOnRectangleIcon className="h-4 w-4 mr-5 " />
         
         </div>

     </div>
      )}

      {/* Desktop View */}
      <div className="hidden md:block">
        <h3 className="pt-3 text-[12px] md:text-14px">Home / Dashboard</h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Dashboard
        </h1>
      </div>
    </div>
        
        <div className="md:flex px-3 poppins pt-[35%] md:pt-[21%]">
            <div className="flex-col">
                <PatientSidebar/>
            </div>
            <div className="flex-col md:w-1/3">
                <h1 className='text-[24px] text-center font-semibold pb-5'>Welcome Back!</h1>
                <div className="flex justify-center items-center w-full">
                    <img src={Image} className='h-[135px] w-[135px] rounded-full' alt="" />
                </div>
                <div className="text-center leading-[250%]">
                    <p className='text-[18px]'>Tosin Chukwuka</p>
                    <p className='text-[#757575] text-[16px]'>PT00136</p>
                    <p className='text-[12px]'>Membership Plan || <span className='text-[#757575]'>Basic</span></p>
                </div>
                <div className='md:ml-10'>
                    <h1 className='text-center text-[14px] font-semibold pb-10'>Patient's Information</h1>
                    <div className="flex  leading-[220%]">
                        <div className="flex-col ml-8  text-[12px] md:w-1/2">
                        <p>Gender </p>
                        <p>Blood Group </p>
                        <p>Allergies </p>
                        <p>Diseases</p>
                        <p>Height </p>
                        <p>Patient ID </p>
                        <p>Last  Appointment </p>
                        <p>DOB </p>
                    </div>
                    <div className="flex-col md:ml-0 ml-12 text-[#757575] text-[12px] md:w-1/2">
                        <p>Male</p>
                        <p>O+ (Positive)</p>
                        <p>Milk, Penicilin</p>
                        <p>Diabetes, Blood Disorders</p>
                        <p>1.78m</p>
                        <p>00016</p>
                        <p>18th December 2024</p>
                        <p>20th October 1991</p>
                    </div>
                    </div>
                   
                </div>
                <div className='mb-10 mt-5 flex w-full justify-center  items-center'>
                        <Link to='' className='text-white text-[12px] rounded py-2 px-8 bg-[#46B8E3] '> Read More </Link>
                    </div>
            </div>
            <div className="flex-col md:w-1/2 ">
                <div className="md:flex w-full gap-3">
                    <div className="flex-col mb-3 rounded dash1  md:w-1/3">
                        <h1 className='text-[14px] p-3'>Health Checks</h1>
                        <div className="flex mt-8 mb-5 justify-center items-center w-full">
                        <img src={Heartbeat} alt="" />
                        </div>
                        <div className="flex text-[12px] border-t-4 border-t-[#319F43] py-2 rounded-t-lg  px-2 justify-between w-full">
                            <h1>Last used</h1>
                            <h1>2 Hours ago</h1>
                        </div>
                    </div>
                    <div className="flex-col mb-3 dash rounded  md:w-1/3">
                        <h1 className='text-[14px] p-3'>Dental Checkup</h1>
                        <div className="flex mt-8 mb-5 justify-center items-center w-full">
                        <img src={Tooth} alt="" />
                        </div>
                        <div className="flex text-[12px] border-t-4 border-t-[#46B8E3] py-2 rounded-t-lg  px-2 justify-between w-full">
                            <h1>Last used</h1>
                            <h1>2 days ago</h1>
                        </div>
                    </div>
                    <div className="flex-col mb-3 rounded dash2 md:w-1/3">
                        <h1 className='text-[14px] p-3'>Cardio Fitness</h1>
                        <div className="flex mt-8 mb-5 justify-center items-center w-full">
                        <img src={Running} className='w-[128px] h-[128px]' alt="" />
                        </div>
                        <div className="flex text-[12px] border-t-4 border-t-[#C52184] py-2 rounded-t-lg  px-2 justify-between w-full">
                            <h1>Last used</h1>
                            <h1>1 week ago</h1>
                        </div>
                    </div>
                </div>
                <div  className='pt-5'>
                    <h1 className='py-3'>Test Results</h1>
                    <div className="md:flex ">
                        <div className="flex-col md:w-1/3">
                            <div className="flex">
                            <div className="test p-3">
                            <DocumentIcon className="w-[20px] h-[25px] text-[#C52184]" />
                            </div>
                            <div className=" p-2">
                                <h1 className='text-[12px] font-bold'>CT Scan - Full Body</h1>
                                <h1 className='text-[10px] text-[#757575]'>12th February 2024</h1>
                            </div>
                            </div>
                        </div>
                        <div className="flex-col md:w-1/3">
                            <div className="flex py-2">
                            <div className="test1 p-3">
                            <DocumentIcon className="w-[20px] h-[25px] text-[#46B8E3]" />
                            </div>
                            <div className=" p-2">
                                <h1 className='text-[12px] font-bold'>Creative Kinease - T</h1>
                                <h1 className='text-[10px] text-[#757575]'>16th July 2024</h1>
                            </div>
                            </div>
                        </div>
                        <div className="flex-col md:w-1/3">
                            <div className="flex py-2">
                            <div className="test2 p-3">
                            <DocumentIcon className="w-[20px] h-[25px] text-[#319F43]" />
                            </div>
                            <div className=" p-2">
                                <h1 className='text-[12px] font-bold'>Eye Fluoroscein Test</h1>
                                <h1 className='text-[10px] text-[#757575]'>21st January 2025</h1>
                            </div>
                            </div>
                        </div>
                        <div className="flex-col md:w-1/3">
                            <div className="flex py-2">
                            <div className="test3 p-3">
                            <DocumentIcon className="w-[20px] h-[25px] text-[#021140]" />
                            </div>
                            <div className=" p-2">
                                <h1 className='text-[12px] font-bold'>CT Scan - Full Body</h1>
                                <h1 className='text-[10px] text-[#757575]'>12th February 2024</h1>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h1 className='py-4'>Appointments</h1>
                        <div className='border rounded-md py-6' style={{
                                borderImage: 'repeating-linear-gradient(45deg, #9ca3af 0 10px, transparent 10px 20px) 10',
                                borderStyle: 'solid',
                                borderRadius:'10px'
                            }}>
                            <Link to='' className='text-[#319F43] justify-center flex text-[12px]'>
                                <PlusCircleIcon className='w-5 h-5 mx-2'/>
                                <h1 className='pt-[2px]'>Book new appointments</h1>
                            </Link>
                        </div>
                    </div>

                    <div className='mt-12'>
                    <div className="mx-auto">
                    <table className="md:min-w-[600px] text-[14px] text-left">
                        <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2">Doctor name</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="px-4 py-2">Dr. Susan Mandible</td>
                            <td className="px-4 py-2">22nd September 2025</td>
                            <td className="px-4 py-2">4:30pm</td>
                            <td className="px-4 py-2">Video call</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Dr. Jane Smith</td>
                            <td className="px-4 py-2">23rd September 2025</td>
                            <td className="px-4 py-2">2:00pm</td>
                            <td className="px-4 py-2">In-person</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>


                    </div>




                </div>
            </div>
        </div>
    </>
  )
}
export default PatientDashboard