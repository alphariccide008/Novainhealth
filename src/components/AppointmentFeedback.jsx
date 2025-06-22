import React from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/outline'
import FeedBack from '../assets/icons/feedback.png'



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
                        <img src={FeedBack} className='h-[80px] w-[80px]' alt="" />
                    </div>
                    <h1 className='text-[14px] pb-10'>Thank you for your feedback</h1>
                    <div className="flex justify-center pt-5">
                    <Link to="" type='submit' className='rounded border text-[14px] text-white px-[10%] py-2 lg:py-2 bg-[#46B8E3]'>Back to Appointments</Link>
                    </div>
                </div>
              
                   
                    
                
            </div>
            
        </section>
    
    </>
  )
}

export default AppointmentSuccess