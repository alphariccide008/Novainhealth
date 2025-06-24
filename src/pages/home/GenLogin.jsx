import React from 'react'
import  Logo from '../../../public/Vector.png'
import GenLog from '../../assets/images/genlog.png'
import { Link } from "react-router-dom";

const GenLogin = () => {
  return (
    <>
         <section>
            <div className="py-[15%] mx-[4%] lg:mx-[20%] relative md:py-[20%]">
                <form action="" className='shadow-xl'>
                    <img src={GenLog} alt="" />
                    <div className='border border-[#46B8E3]' >
                        <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
                        <h1 className="text-[14px] md:text-2xl py-8 font-bold text-center ">Create an account</h1>
                        <hr className='mx-[20%] py-5'/>
                            <div className="flex justify-between pb-[10%] md:px-20">
                            <div className="border text-center hover:text-white  hover:bg-[#46B8E3] border-[#46B8E3] mx-2 md:w-1/2 rounded p-2 cursor-pointer ">
                                <Link to="/doctorlogin"  className="text-[10px] md:text-[14px]  text-gray-700 hover:text-white   text-center">
                                I am  a Medical Professional
                                </Link>
                            </div>
                            <div className="border text-center border-gray-300 mx-2 md:w-1/2 rounded p-2 cursor-pointer  text-white bg-[#46B8E3]">
                                <Link to="/patientlogin"  className="text-[10px] md:text-[14px]  text-white text-center ">
                                I am seeking a Medical Professional
                                </Link>
                            </div>
                            </div>
                            <div className="md:flex pt-20 text-center pb-4 md:items-center justify-center space-x-10 text-[#46B8E3] md:text-[12px] text-[10px]">
                                <a href="">Terms and Condtions</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Cookies setting</a>
                            </div>
                    </div>
                    
                
                </form>
            </div>
         </section>
    </>
  )
}

export default GenLogin