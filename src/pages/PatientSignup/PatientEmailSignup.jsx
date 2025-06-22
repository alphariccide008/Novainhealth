import React from 'react'
import { Link } from "react-router-dom";
import  Logo from '../../../public/Vector.png'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BeakerIcon, ChevronLeftIcon , EnvelopeIcon } from '@heroicons/react/24/solid'
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
                        <div className="flex text-[14px] text-[#46B8E3] p-[5%]">
                            <Link to="/patientsignup" className='flex'>
                            <ChevronLeftIcon className='text-[#46B8E3] font-bold h-[20px] w-[20px] mr-2'/> Back
                            </Link>
                        </div>
                         <form action="" className="px-[3%] lg:px-[20%]  bg-white   text-center space-y-4">
                            <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
                            <div className="flex justify-between pt-10 w-full">
                                <h1 className="font-semibold text-[12px]">Patient Registration</h1>
                                <Link to="/doctorsignup" className=" text-[12px] text-[#46B8E3]">Not a Patient ?</Link >
                            </div>

                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                                < input
                                    className="text-[14px] flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='First Name'
                                />
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                                < input
                                    className="text-[14px] w-full flex items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='Mobile Number'
                                />
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                                < input
                                    className="text-[14px] w-full flex items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='Email Address'
                                />
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer  w-full">
                                <select
                                    className="w-full text-[10px] text-gray-700 bg-transparent focus:outline-none"
                                >
                                    <option value="" >Country of residence</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>

                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                                < input
                                    className="text-[14px] w-full flex items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='State'
                                />
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                                < input
                                    className="text-[14px] w-full flex items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='Local Government'
                                />
                            </div>
                            <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white  w-full">
                                <select
                                    className="w-full text-[10px] text-gray-700 bg-transparent focus:outline-none"
                                >
                                    <option value="">Select Language</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>

                            <div className="flex text-center items-start py-3 space-x-2 text-left text-sm">
                            
                            <label className='text-[8px] text-center md:text-[8px] lg:text-[8px] ' >
                            When you select languages, Patients that understand same language can be paired with you
                            </label>
                            </div>
                            <div className="flex justify-center items-center ">
                                <Link to="" className="text-white rounded py-2 px-14 bg-[#46B8E3] text-[12px]">
                                    Sign up
                                </Link>
                            </div>
                            

                            <p className="text-xs text-[16px] px-5 leading-[150%] py-10 md:py-10 lg:py-10 text-gray-500">
                            By signing up, you agreee to our  <a href="#" className="text-[#46B8E3]">Terms of service</a> and <a href="#" className="text-[#46B8E3]">Privacy Policy</a> including content to security share your information with medical professionals for consultation purposes.
                            </p>

                            <hr className="my-4" />

                            <p className="text-sm pb-[15%]">
                            Already have an account? <a href="#" className="text-[#46B8E3] hover:underline">Log in</a>
                            </p>
                            
                        </form>
                                            
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PatientSignup