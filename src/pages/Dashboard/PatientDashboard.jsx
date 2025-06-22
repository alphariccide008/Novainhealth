import React from 'react'
import { Link } from 'react-router-dom';
import DashNav from '../../components/DashNav'
import DocSideBar from '../../components/DocSideBar'
import Client from '../../assets/images/googlelog.png'
import Client1 from '../../assets/images/client1.png'
import Client2 from '../../assets/images/client2.png'
import { ClockIcon ,MapPinIcon, EnvelopeIcon , XMarkIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';



const PatientDashboard = () => {
  return (
    <>
    <DashNav/>
    
     <section className='md:py-[20%] lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%] lg:mx-[3%] ">
        <DocSideBar/>
          <div className='bg-white mx-3 p-5  w-full rounded'>
          <div className="md:flex ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client2} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="md:flex mt-5 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
                    <img src={Client1} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                    </div>
                    <div className="flex-col">
                        <h1 className='font-semibold'>Tosin Adebayo</h1>
                        <div className='flex py-2 text-[10px]'>
                            <ClockIcon  className="h-4 w-6 " />
                            <h1>12th October 2025, 4pm</h1>
                        </div>
                        <div className='flex text-[10px]'>
                            <MapPinIcon className="h-4 w-6  " />
                            <h1>New York, United States</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col mt-4 text-[10px] pl-4 md:w-1/3">
                <div className='flex py-2 '>
                    <EnvelopeIcon className="h-4 w-6  " />
                    <h1>12th October 2025, 4pm</h1>
                </div>
                <div className='flex'>
                    <PhoneIcon className="h-4 w-6" />
                    <h1>New York, United States</h1>
                </div>           
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-full">
                    <div className='w-1/3 px-2 '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3 px-2 ' >
                        <Link to="" className='p-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                    </div>
                    <div className='w-1/3 px-2'>
                    <Link to="" className='p-3 flex rounded text-[10px] text-[#C52184] bg-[#C521844D]'><XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                    </div>
                    
                </div>
            </div>
            </div>
         



          </div>
        </div>
      </section>
    
     
    
    </>
  )
}

export default PatientDashboard