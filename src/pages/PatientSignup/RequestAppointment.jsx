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
        </div>
    </>
  )
}
export default RequestAppointments