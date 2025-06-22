import React from 'react'
import './components.css'
import emergency from '../assets/images/emergency.png'
import { Link } from 'react-router-dom'
import { FaArrowRight,  } from 'react-icons/fa';

const Emergency = () => {
  return (
    <>
    <section>
        <div className="relative h-[420px]">
            <div
                className="absolute inset-0 bg-cover bg-center filter grayscale"
                style={{ backgroundImage: `url(${emergency})` }}
            ></div>
            <div className="relative mx-[10%] md:top-[20%] z-10 md:w-1/3 p-4">
                {/* Your content here, unaffected by grayscale */}
                <h2 className=" playfair text-[36px] ">24/7 Real-Time Emergency Care</h2>
                <p className='md:text-[16px] text-[14px] pt-12 poppins'>In an emergency, every second counts. Connect instantly with 
                    certified doctors, anytime, anywhere. Whether it's a sudden 
                    fever, injury, or critical need—our emergency care service is just 
                    a click away.
                </p>
            </div>
        </div>
        <div className=" bg-[#c7c6c6]  justify-center items-center">
            <div className="text-center py-10">
                <h1 className='md:text-[24px] text-[18px] playfair font-semibold pb-2 '>Get Urgent Medical Help, Fast.</h1>
                <h1 className='md:text-[16px] text-[12px] poppins'>Avoid the chaos and long lines. Our app connects you to emergency-certified doctors in minutes—24/7 access, zero hassle.</h1>
            </div>
            <div className="md:flex  gap-6 poppins py-10 mx-[8%]">
                <div className="flex flex-col my-2 md:w-1/3">
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Abdominal Pain <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Acute bronchitis<div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Allergy <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Nausea/Vomiting <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Diarrhoea<div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                
               
                </div>
                 <div className="flex flex-col  my-2 md:w-1/3">
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Mental health concerns   <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Red eye<div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Prescription refill<div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Asthma attack <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Migraine/Headaches <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                
               
                </div>
                 <div className="flex flex-col my-2 md:w-1/3">
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Ear infection <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Pain relief <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Chest infection <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Malaria <div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                <div className="w-full px-4 border my-2 bg-white rounded-full hover:bg-black hover:text-white ">
                    <Link to="" className='flex justify-between text-[14px] p-3'>Sinus infection<div className="w-6 h-6 flex items-center justify-center rounded-full col-link text-gray-600 text-xl hover:bg-white hover:text-black">→</div>
                    </Link>
                </div>
                
               
                </div>

               
               
            
            </div>
        </div>

    </section>
    </>
  )
}

export default Emergency