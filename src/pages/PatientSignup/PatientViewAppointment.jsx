import React from "react"
import { Link } from "react-router-dom"
import '../../components/components.css'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { HiOutlineSearch } from 'react-icons/hi';
import Image from '../../assets/images/docgoogle.png'
import PatientSidebar from "../../components/PatientSidebar";
import Surggy from '../../assets/images/surggy.png'
import MoneyWallet from '../../assets/images/moneywallet.png'
import Caution from '../../assets/images/caution.png'
import { FaEdit } from 'react-icons/fa';
import { ChatBubbleLeftEllipsisIcon, VideoCameraIcon, BookmarkIcon, PhoneIcon } from '@heroicons/react/24/solid'


const RequestAppointments = () => {
   
  return (
    <>  
            <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Appointments</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Request Appointments</h1>
        </div>
        <div className="md:flex md:py-[20%] py-[39%] poppins mx-[5%]">
          <div className="">
            <PatientSidebar/>
          </div>
            <div className="md:w-[15%] md:mx-6">
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
         
            </div>  
            <div className="md:w-[60%] mx-4">
            <div className='bg-white rounded'>
                <div>
                    <h1 className="text-[24px] font-bold md:text-[28px]">Time Schedule</h1>
                    <p className="text-[14px] text-[#757575] md:text-[18px]">Your appointment is for <span className="text-black">monday , 11th December 2024</span>; from 10am till 12pm</p>
                    <div className="flex text-[#46B8E3] mt-12 mb-4 text-[14px]">
                        <h1>Reschedule appointment</h1>
                        <Link ><FaEdit className="w-6 h-6 mx-2"/></Link>
                    </div>
                </div>
                    <div className="md:flex border text-center gap-3  p-5">
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>SUNDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=' text-white'>MONDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>TUESDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>WEDNESDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>THURSDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>FRIDAY</a>
                        </div>
                        <div className='flex-col my-2   border rounded  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>SATURDAY</a>
                        </div>              
                    </div>
                    <div className='border'>
                        <div className="flex border justify-between p-5">
                            <h1 className='text-[16px] font-semibold'>Time Slots</h1>
                             <a href="" className='gap-2 text-[#46B8E3] flex'><FaEdit className="h-[20px] w-[20px]"/>Edit</a>
                        </div>
                        <div className="md:flex border text-[12px] text-center gap-3  p-5">
                        <div className='flex-col bg-[#D9D9D9] rounded text-white my-2   border  py-2  w-full md:w-1/3'>
                        8:00am - 9:30am <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2 bg-[#46B8E3] rounded text-white    border   py-2  w-full md:w-1/3'>
                        11:30am - 1:20pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2   border  bg-[#D9D9D9] rounded text-white   py-2  w-full md:w-1/3'>
                        3:00pm - 4:45pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2   border bg-[#D9D9D9] rounded text-white   py-2  w-full md:w-1/3'>
                        5:00pm - 6:30pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                              
                    </div>
                    </div>
                </div>
                <div className="mt-16"><Link className=" bg-[#46B8E3] text-[12px] px-4 py-2 text-white rounded ">Reschedudle Appointment</Link></div>
            </div> 
        </div>
    </>
  )
}
export default RequestAppointments