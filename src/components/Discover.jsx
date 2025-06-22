import React from 'react'
import './components.css'
import Lungs from '../assets/icons/lungs.png'
import Heart from '../assets/icons/heart.png'
import Knee from '../assets/icons/knee.png'
import Brain from '../assets/icons/brain.png'
import Teeth from '../assets/icons/teeth.png'




const Discover = () => {
  return (
    <>
        <section className='md:mx-[12%] px-7 md:h-[499px]'>
            <h1 className='md:text-[16px]  pt-10'>Discover</h1>
            <div className="md:flex">
                <div className="flex-col md:w-1/2 md:pr-[10%]">
                    <h1 className='md:text-[48px] text-[30px] playfair font-bold'>Hospitals, Clinics and Specialists</h1>
                </div>
                <div className="flex-col md:w-1/2">
                    <p className='md:text-[16px] text-[12px] pt-7 poppins'>Access our extensive network of accredited medical facilities 
                        offering specialized treatments, routine check-ups, and 
                        personalized care. Find the best healthcare options tailored to your 
                        needs, ensuring convenience, reliability, and expert medical attention.
                    </p>
                    
                </div>
            </div>
            <div className="md:flex justify-center items-center   w-full  md:gap-24 py-6">
                <div>
                    <div className="flex items-center justify-center">
                    <div className="relative my-3 flex flex-col items-center justify-center border-4 rounded-full p-6 shadow-2xl w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px]">
                        <img
                        src={Teeth}
                        alt=""
                        className="w-[60px] h-[60px] sm:w-[50px]  sm:h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    <div className="w-6 md:w-8 md:h-8 h-6 sm:w-5 sm:h-5 bg-[#46B8E3] border-4 border-white rounded-full absolute md:top-[80%] top-[75%] left-[65%]"></div>
                    </div>
                
                    </div>
                    <h1 className='text-center'>Dentist</h1>
                </div>

                 <div>
                    <div className="flex items-center justify-center">
                    <div className="relative my-3 flex flex-col items-center justify-center border-4 rounded-full p-6 shadow-2xl w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px]">
                        <img
                        src={Brain}
                        alt=""
                        className="w-[60px] h-[60px] sm:w-[50px]  sm:h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    <div className="w-6 md:w-8 md:h-8 h-6 sm:w-5 sm:h-5 bg-[#46B8E3] border-4 border-white rounded-full absolute md:top-[80%] top-[75%] left-[65%]"></div>
                    </div>
                
                    </div>
                    <h1 className='text-center'>Neurology</h1>
                </div>

                 <div>
                    <div className="flex items-center justify-center">
                    <div className="relative my-3 flex flex-col items-center justify-center border-4 rounded-full p-6 shadow-2xl w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px]">
                        <img
                        src={Lungs}
                        alt=""
                        className="w-[60px] h-[60px] sm:w-[50px]  sm:h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    <div className="w-6 md:w-8 md:h-8 h-6 sm:w-5 sm:h-5 bg-[#46B8E3] border-4 border-white rounded-full absolute md:top-[80%] top-[75%] left-[65%]"></div>
                    </div>
                
                    </div>
                    <h1 className='text-center'>Urology</h1>
                </div>
                 <div>
                    <div className="flex items-center justify-center">
                    <div className="relative my-3 flex flex-col items-center justify-center border-4 rounded-full p-6 shadow-2xl w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px]">
                        <img
                        src={Heart}
                        alt=""
                        className="w-[60px] h-[60px] sm:w-[50px]  sm:h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    <div className="w-6 md:w-8 md:h-8 h-6 sm:w-5 sm:h-5 bg-[#46B8E3] border-4 border-white rounded-full absolute md:top-[80%] top-[75%] left-[65%]"></div>
                    </div>
                
                    </div>
                    <h1 className='text-center'>Cardiology</h1>
                </div>
                 <div>
                    <div className="flex items-center justify-center">
                    <div className="relative my-3 flex flex-col items-center justify-center border-4 rounded-full p-6 shadow-2xl w-[120px] h-[120px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px]">
                        <img
                        src={Knee}
                        alt=""
                        className="w-[60px] h-[60px] sm:w-[50px]  sm:h-[50px] md:w-[80px] md:h-[80px]"
                        />
                    <div className="w-6 md:w-8 md:h-8 h-6 sm:w-5 sm:h-5 bg-[#46B8E3] border-4 border-white rounded-full absolute md:top-[80%] top-[75%] left-[65%]"></div>
                    </div>
                
                    </div>
                    <h1 className='text-center'>Orhtipedics</h1>
                </div>

               
                
                
                
            </div>

        </section>
    </>
  )
}

export default Discover