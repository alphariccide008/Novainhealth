import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Cancel from '../assets/icons/cancelicon.png'



const AppointmentSuccess = () => {
  return (
    <>
        <section className='bg-gray-200 px-3 py-[30%] md:py-[20%] lg:px-[30%]' >
            <div className=" bg-white  pt-[3%] rounded px-10 ">
                <div className="flex justify-end pb-[10%]">
                    <XCircleIcon className="w-[40px] h-[40px] text-[#46B8E3]" />
                </div>
                <div className='pt-10 pb-[30%] text-center md:pb-[10%] leading-[150%]'>
                    <div className='flex pb-6 justify-center'>
                        <img src={Cancel} className='h-[80px] w-[80px]' alt="" />
                    </div>
                    <h1 className='text-[14px]'>Appointment Cancelled successfully</h1>
                    <p className='text-[10px]'>Appointment with <span className='text-[#46B8E3]'>Tosin Chukwuka</span> has been</p>
                    <p className='text-[10px]'>cancelled on <span className='font-semibold'>12th September 2025 at 11:30am</span></p>
                </div>
                <form action="" className='w-full md:px-14'>
                    <label htmlFor="" className='text-start text-[12px]'>Reason for cancelling the Appointment</label>
                    <textarea name="" className='border w-full rounded' id=""></textarea>
                    <div className="flex pb-[5%] pt-[3%] justify-center">
                    <button type='submit' className='rounded text-[14px] text-white px-[20%] py-2 lg:py-2 bg-[#46B8E3]'>Submit</button>
                    </div>
                </form>
            </div>
            
        </section>
    
    </>
  )
}

export default AppointmentSuccess
