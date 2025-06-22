import React from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Confirm from '../assets/images/googlelog.png'
import { ClockIcon ,MapPinIcon,ChatBubbleLeftIcon, EnvelopeIcon , XMarkIcon, VideoCameraIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';



const AppointmentSuccess = () => {
  return (
    <>
        <section className='bg-gray-200 px-3 py-[30%] md:py-[20%] lg:px-[30%]' >
            <div className=" bg-white  pt-[3%] rounded px-10 ">

                <div className="md:flex pb-2">
                    <div className="flex-col md:w-1/2">
                        <h1 className='text-[16px] pt-2 font-semibold' >Appointment Details</h1>
                    </div>
                    <div className="flex-col md:w-1/2">
                    <div className="flex justify-end ">
                        <XCircleIcon className="w-[40px] h-[40px] text-[#46B8E3]" />
                        
                    </div>
                    </div>
                    
                </div>
                <hr className='pb-10'/>
                <div className="md:flex">
                    <div className="flex-col pb-3">
                        <img src={Confirm} alt="Logo" className="rounded-full h-[36px] w-[36px] object-cover"/>
                    </div>
                    <div className="flex-col w-full pb-8 ">
                    <h1 className='text-[14px] md:px-3 '>Tosin Adebayo</h1>
                        <div className="flex ">
                            <div className="flex-col w-1/2 md:px-3 ">
                                <div className='flex text-[#757575] py-2'>
                                    <ClockIcon className="w-[16px] h-[16px] mr-2" />
                                    <h1 className='text-[10px]'>12th october 2025, 4pm</h1>
                                </div>
                                <div className='flex text-[#757575]'>
                                    <MapPinIcon className="w-[16px] h-[16px] mr-2" />
                                    <h1 className='text-[10px]'>Sapele road, Benin city</h1>
                                </div>
                            </div>
                            <div className="flex-col w-1/2 md:px-3 ">
                                <div className='flex px-2 text-[#757575] py-2'>
                                    <EnvelopeIcon className="w-[16px] h-[16px] md:mr-2" />
                                    <h1 className='md:text-[10px] text-[8px
                                    ]'>Tosinadebayo@yahoo.com</h1>
                                </div>
                                <div className='flex px-2 text-[#757575]'>
                                    <PhoneIcon className="w-[16px] h-[16px] mr-2" />
                                    <h1 className='text-[10px]'>+234 802375227</h1>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-[14px] md:px-3 pt-8 pb-2 font-semibold'>Consultation type</h1>
                        <div className="flex md:px-3 gap-3 pb-5">
                            <div className="border border-[#757575] hover:text-white hover:bg-[#46B8E3] p-2 rounded">
                            <ChatBubbleLeftIcon className="w-[18px] h-[18px] mr-2" />
                            </div>
                            <div className="border border-[#757575] md:p-3 hover:text-white p-2 hover:bg-[#46B8E3] rounded">
                            <PhoneIcon className="w-[18px] h-[18px] mr-2" />
                            </div>
                            <div className="border border-[#757575] md:p-3 p-3 hover:text-white hover:bg-[#46B8E3]  rounded">
                            <VideoCameraIcon className="w-[18px] h-[18px] mr-2" />
                            </div>
                        </div>
                        <h1 className='md:px-3 text-[#757575] text-[10px]' >Video Chat</h1>

                        <h1 className='md:px-3 text-[#757575] pb-2 pt-8 text-[14px]' >Status</h1>
                        <div className="flex md:px-3">
                            <div className="w-2 h-2 bg-green-500  mt-2 mr-2 rounded-full"></div>
                            <h1 className='text-[#757575] text-[12px]'>Pending</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    
    </>
  )
}

export default AppointmentSuccess