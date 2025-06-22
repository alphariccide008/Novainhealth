import React from 'react'
import { Link } from "react-router-dom";
import  Logo from '../../../public/Vector.png'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BeakerIcon , EnvelopeIcon } from '@heroicons/react/24/solid'
import Patientsignup from '../../assets/images/patientsignup.png'

const PatientSignup = () => {
  return (
    <>
        <section>
            <div className=" relative mx-[5%] md:mx-[3%] lg:mx-[5%] py-[15%]">
                <div className="md:flex   shadow-md  rounded">
                    <div className="md:w-1/2">
                    <img src={Patientsignup} alt="" className='md:h-full lg:h-full' />
                    </div>
                    <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
                         <form action="" className="px-[3%] lg:px-[20%]  bg-white   text-center space-y-4">
                            <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
                            <h1 className="text-2xl py-8 font-bold text-[24px]">Create an account</h1>

                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white hover:bg-[#46B8E3]">
                                <Link
                                    to="/patientlogin"
                                    className="text-[14px] flex items-center justify-center text-gray-700 hover:text-white text-center"
                                >
                                    <FcGoogle className="h-[20px] w-[20px] mr-2" />
                                    Continue with Google
                                </Link>
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white hover:bg-[#46B8E3]">
                                <Link
                                    to="/apple"
                                    className="text-[14px] flex items-center justify-center text-gray-700 hover:text-white text-center"
                                >
                                    <FaApple className="h-[20px] w-[20px] mr-2" />
                                    Continue with Apple
                                </Link>
                            </div>
                           
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white hover:bg-[#46B8E3]">
                                <Link
                                    to="/patientemail"
                                    className="text-[14px] flex items-center justify-center text-gray-700 hover:text-white text-center"
                                >
                                    <EnvelopeIcon className="h-[20px] w-[20px] mr-2" />
                                    Continue with Email
                                </Link>
                            </div>
                            

                            <div className="flex items-start py-3 space-x-2 text-left text-sm">
                            <input type="checkbox" className="w-5 mt-3 mr-2 h-5 scale-150 accent-blue-500" />
                            <label className='text-[10px] md:text-[13px] lg:text-[13px] ' >
                                I do not wish to receive news and promotions from Novain Health by email.
                            </label>
                            </div>

                            <p className="text-xs text-[16px] px-9 leading-[150%] py-14 md:py-20 lg:py-20 text-gray-500">
                            By continuing, you agree to Novain Health’s <a href="#" className="text-[#46B8E3]">Terms of Use</a> and <a href="#" className="text-[#46B8E3]">Privacy Policy</a>.
                            </p>

                            <hr className="my-4" />

                            <p className="text-sm pb-[15%]">
                            Already have an account? <a href="#" className="text-[#46B8E3] hover:underline">Log in</a>
                            </p>
                            <div className="flex pb-4 space-x-10 text-[#46B8E3] text-[12px]">
                                <a href="">Terms and Condtions</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Cookies setting</a>
                            </div>
                        </form>
                                            
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PatientSignup