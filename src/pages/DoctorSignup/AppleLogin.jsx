import React from 'react'
import { FaApple } from "react-icons/fa";
import  Logo from '../../../public/Vector.png'

const AppleLogin = () => {
  return (
    <>

        <section>
            <div className="mx-[5%] md:mx-[20%] py-[30%]  md:py-[20%]">
                <form action="#" className='border border-[#46B8E3] px-[10%] pt-[5%]'>
                    <FaApple className="h-[20px] w-[20px] mr-2" />
                    <div className='flex justify-between pt-8 pb-2' >
                        <h1 className='text-[13px] md:text-[20px]' >Apple Account</h1>
                        <h1 className='text-[11px]  md:text-[14px] text-[#757575]' >sign in </h1>
                        
                    </div>
                    <hr />

                    <div>
                        <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px] mb-5" />
                        <h1 className='text-center text-[12px] py-3' >Use your Apple Account to sign in to Novain Health.</h1>
                    </div>
                    <div className="border border-gray-300 rounded md:mx-[22%] px-10 p-2 cursor-pointer bg-white ">
                        < input className="text-[14px] flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]" placeholder='Email or Phone Number'/>
                    </div>
                    <div className="border my-5 border-gray-300 rounded md:mx-[22%] px-10 p-2 cursor-pointer bg-white ">
                        < input type='password' className="text-[14px] border-0 flex w-full items-center justify-center text-gray-700 hover:text-white " placeholder='Password'/>
                    </div>
                    <div className='md:px-[22%] py-[20%] text-center'>
                        <h1 className='md:text-[12px] text-[11px]' >
                            In setting up Sign in with Apple, information about your 
                            interactions with Apple and this device may be used by 
                            Apple to help prevent fraud. <a href="#" className='text-[#46B8E3]' >See how your data is managed...</a>
                        </h1>
                    </div>
                </form>


            </div>
        </section>
    </>
  )
}

export default AppleLogin