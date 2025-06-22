import React from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Confirm from '../assets/icons/confirm.png'



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
                        <img src={Confirm} className='h-[80px] w-[80px]' alt="" />
                    </div>
                    <h1 className='text-[14px] text-[#C52184]'>Confrim Appointment Details</h1>
                    <p className='text-[10px]'>Please note that this Appointment cannot be <br /> canceled after being booked with patient</p>
                    <div className="pt-5 text-[12px] space-x-3">
                        <Link to="" className=' p-3 bg-[#46B8E3] border-2 rounded text-white'> Confirm and Schedule</Link>
                        <Link to="" className=' py-3 px-8 hover:bg-[#46B8E3] hover:text-white border-2 border-[#46B8E3] rounded '> Cancel</Link>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default AppointmentSuccess