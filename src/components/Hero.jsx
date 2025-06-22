import React from 'react'
import './components.css'
import { Link } from "react-router-dom"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineSearch } from 'react-icons/hi';

const hero = () => {
  return (
    <>
    <section className='hero md:pt-[10%] pt-[30%]'>
        <div className="lg:mx-[10%] md:px-0 px-3">
            <h1 className='lg:text-[70px] text-[40px] font-bold text-center playfair'>Get Professional Medical 
            Assistance Anytime, Anywhere</h1>
            <p className='lg:text-[24px} text-[12px] text-center pt-4 poppins'  >Connect with trusted medical professionals from your smartphone
            and get the care you need when you need it most.</p>
        </div>
        <div className="lg:mx-[15%] w-full">
        <div className="w-full">
            <form action="" className=' md:px-20  py-10 lg:space-x-4 md:flex'>
              <div className='flex-col mx-4'>
                <input type="text"  className='md:w-[298px] w-full px-2 rounded h-[40px]' placeholder="📍 Search Location"/><br />
                <label htmlFor="" className='md:text-[12px] text-[10px] text-[#767676]'>Based on your Location</label>
              </div>
             <div className='flex-col mx-4'>
               <input type="text" className='md:w-[498px] w-full px-2 rounded h-[40px] ' placeholder="🔍 Search Doctors, Clinics, Hospitals, Diseases, Specialization, etc"/> <br />               
               <label htmlFor="" className='lg:text-[12px] text-[10px] py-2 text-[#767676]'>Example: Dentist, Sugar checkup, Blood test, Neurosurgeon, etc</label>
             </div>
              <div className='px-4 py-2'><button className='bg-[#C52184] md:p-[12px] w-full p-3 rounded'><HiOutlineSearch className='text-white'/></button></div>
            </form>
            
        </div>
        </div>
    </section>
    
    </>
  )
}

export default hero