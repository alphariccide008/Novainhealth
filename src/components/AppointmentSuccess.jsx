import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Success from '../assets/icons/successicon.png'



const AppointmentSuccess = () => {
  return (
    <>
        <section className='bg-gray-200 px-3 py-[30%] md:py-[20%] lg:px-[30%]' >
            <div className=" bg-white text-center pt-[3%] rounded px-10 ">
                <div className="flex justify-end pb-[10%]">
                    <XCircleIcon className="w-[40px] h-[40px] text-[#46B8E3]" />
                </div>
                <div className='pt-10 pb-[30%] md:pb-[20%] leading-[150%]'>
                    <div className='flex pb-6 justify-center'>
                        <img src={Success} className='h-[80px] w-[80px]' alt="" />
                    </div>
                    <h1 className='text-[14px]'>Appointment booked successfully</h1>
                    <p className='text-[10px]'>Appointment booked with <span className='text-[#46B8E3]'>Tosin Chukwuka</span></p>
                    <p className='text-[10px]'>on <span className='font-semibold'>12th September 2025 at 11:30am</span></p>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default AppointmentSuccess