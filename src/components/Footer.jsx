import React from 'react'
import logo from '../assets/images/footer.png'
import Apple from '../assets/images/Iphone.png'
import Andriod from '../assets/images/Android.png'
import { FaEnvelope, FaFacebook , FaInstagram, FaLinkedin, FaTwitter , FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';





const Footer = () => {
  return (
   <>
    <footer className='bg-[#021140]  text-white md:h-[600px]'>
        <div className="md:flex mx-[5%] pt-5">
          <div className="flex-col md:w-1/3 my-3 px-2 ">
            <img src={logo} alt="footer logo"  />
            <p className='text-[14px] font-semibold pt-[20px] leading-[200%] text-white'>
              Bringing quality healthcare to your fingertips. Novain Health 
              connects you with trusted medical professionals anytime, 
              anywhere, so you’re never alone on your health journey. 
              Our mission is to make professional medical assistance 
              accessible to all by connecting patients with certified 
              doctors and healthcare professionals anytime, anywhere. 
            </p>
            <div className='flex gap-3 mt-10 text-[25px]'>
              <a href="" className='hover:text-blue-600'>< FaFacebook/></a>
              <a href="" className='hover:text-blue-300' >< FaTwitter/></a>
              <a href="" className='hover:text-red-400'>< FaInstagram/></a>
              <a href="" className='hover:text-blue-400'>< FaLinkedin/></a>
            </div>
          </div>
          <div className="flex-col leading-[300%]  my-3 pt-10 md:pl-[12%] md:w-1/3 ">
          <h1 className='text-[20px] font-semibold' > About</h1>
          <ul className='list-none  text-[12px]' >
            <li><a href=""className='hover:text-blue-500'>About us</a></li>
            <li><a href=""className='hover:text-blue-500'>How it works</a></li>
            <li><a href=""className='hover:text-blue-500'>For Patients</a></li>
            <li><a href=""className='hover:text-blue-500'>For Doctors</a></li>
            <li><h1 className='text-[20px] font-semibold' > Support</h1></li>
            <li><a href=""className='hover:text-blue-500'>FAQS</a></li>
            <li><a href=""className='hover:text-blue-500'>Help Center</a></li>
            <li><a href=""className='hover:text-blue-500'>Emergency Response info</a></li>
          </ul>
          </div>
          <div className="flex-col leading-[300%] my-3 pt-10 px-[5%] md:w-1/3 ">
          <h1 className='text-[20px] font-semibold' > Download the App</h1>
          <ul className='list-none   text-[14px]' >
            <li className='my-6'><a href=""><img src={Apple} className='md:w-[60%]' alt="" /></a></li>
            <li className='my-6'><a href=""><img src={Andriod} className='md:w-[60%]' alt="" /></a></li>

            
            
          </ul>
          </div>
          <div className="flex-col  pt-10 px-[5%] my-3 md:w-1/3 ">
          <h1 className='text-[20px] font-semibold' > Contact us</h1>
          <ul className='list-none  text-[14px]' >
            <li  className='flex py-[4%]' ><MapPinIcon className='h-10 mr-3 text-[25px]' /><span className='pt-2'>3556 Beech Street, San Francisco,California, CA 94108</span> </li>
            <li  className='flex md:py-[4%]' ><EnvelopeIcon className='h-6 mr-3 text-[25px]' /><span className=''>doccure@example.com</span> </li>
            <li  className='flex py-[4%]' ><PhoneIcon className='h-6 mr-3 text-[25px]' /><span className='pt-2' >+1 315 369 5943</span> </li>
           
          </ul>
          </div>
          
         
        </div>
        <div className="flex justify-between mt-[3%] text-[14px] items-center mx-[5%]">
          <h1>Copyright &copy; Novain Health. All Rights Reserved.</h1>
          <h1><a href="#" className="text-white hover:text-blue-500">Terms and Conditions</a></h1>
        </div>

    </footer>
   </>
  )
}

export default Footer