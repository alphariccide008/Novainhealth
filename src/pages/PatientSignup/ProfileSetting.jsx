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
import {  PlusCircleIcon,CheckCircleIcon, HomeIcon ,PlusIcon, DocumentTextIcon ,LockClosedIcon,CheckIcon, StarIcon,ExclamationTriangleIcon, ChevronDownIcon , BellIcon, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon , ArrowUpOnSquareStackIcon , CalendarIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, ShareIcon} from '@heroicons/react/20/solid';
import { FaUserDoctor } from 'react-icons/fa6';
import { } from '@heroicons/react/24/solid'
import { FaUserCircle } from 'react-icons/fa';





const ProfileSetting = () => {
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
          <h3 className="pt-3 text-[12px]">Home / Profile Settings</h3>
          <h1 className="text-[22px] py-2 font-semibold">Profile Settings</h1>
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
        <h3 className="pt-3 text-[12px] md:text-14px">Home / Profile Settings</h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Profile Settings
        </h1>
      </div>
    </div>
        
        <div className="md:flex px-3 poppins pt-[50%] md:pt-[21%]">
            <div className="flex-col">
                <PatientSidebar/>
            </div>
            <div className="flex-col md:w-1/3">
                <div className="flex justify-center items-center w-full">
                    <img src={Image} className='h-[135px] w-[135px] rounded-full' alt="" />
                </div>
                <div className="text-center leading-[250%]">
                    <Link className='text-white bg-[#46B8E3] text-[12px] px-5 rounded-full py-2'>Upload Photo</Link>
                    <p className='text-[#757575] text-[10px]'>Allowed JPG, PNG or GIF. Max size 2MB</p>
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
            <div className="flex-col md:w-[50%] ">
                <h1 className='text-[16px] py-5'>Personal Information</h1>
                <form action="" className='space-y-9 text-[12px]'>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='First Name'/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Last Name'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Email'/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Phone'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Date of Birth'/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Gender'/>
                    </div>
                    <div>
                        <input type="text"  className='border my-3 w-full px-4 py-2' placeholder='Address'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='City'/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='State'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Zip Code '/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Country'/>
                    </div>


                    <div className='space-y-5'>
                        <h1 className='font-bold text-[16px]'>Medical Information</h1>
                        <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Genotype '/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Weight'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Height'/>
                      
                        <input type="text"  className='border my-3 w-full flex-col md:w-1/2 px-4 py-2' placeholder='Blood Group'/>
                    </div>
                    <div className='md:flex gap-3'>
                        <input type="text"  className='border my-3 w-full flex-col  px-4 py-2' placeholder='Medical Condition'/>
                    </div>
                    </div>
                    <div className='gap-3'>
                        <h1>Allergies</h1>
                       <div className='pt-4 border space-x-3 border-gray-400 p-4 rounded'>
                       <Link className='text-white bg-[#46B8E3]  px-4 py-2 rounded '>Dust <Link>x</Link></Link>
                       <Link className='text-white bg-[#46B8E3]  px-4 py-2 rounded '>Lactose <Link>x</Link></Link>
                       </div>
                    </div>
                 
            
                    <div className='gap-4 w-full pb-10 flex justify-center'>
                        <Link to='' className='bg-[#46B8E3] text-white text-[12px] rounded px-10 py-3'>
                            Save changes
                        </Link>
                       
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
export default ProfileSetting