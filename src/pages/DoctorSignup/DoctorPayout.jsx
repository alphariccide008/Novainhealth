import React from 'react'
import Client from '../../assets/images/googlelog.png'
import { Link } from 'react-router-dom';
import { ClockIcon ,MapPinIcon, EnvelopeIcon, CogIcon , CreditCardIcon, XMarkIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';
import DocSideBar from '../../components/DocSideBar'
import Patient from '../../assets/images/patient.png'
import Sickbay from '../../assets/images/sickbay.png'
import Emergency from '../../assets/images/emergency.png'
import Money from '../../assets/images/money.png'
import MoneyBag from '../../assets/images/moneybag.png'


const DoctorPayout = () => {

  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Payouts</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Payouts</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='mx-2 border w-full rounded'>
          
         
        
          <div className='border my-5 bg-[#FAFAFA] '>
          <div className="md:flex w-full  gap-3 ">
            <div className="flex-col mb-3  md:w-1/3 rounded" style={{ backgroundColor:'rgba(11, 110, 79, 0.05)'}}>
               <div className="flex mx-2 p-2">
                <div className='pl-10 '>
                    <h1 className='text-[12px] text-[#757575]'>Wallet Balance</h1>
                    <h1 className='text-[24px] '>&#8358;150,000.00</h1>
                    <h1 className='text-[12px] pt-2 text-[#757575]'>One Hundred and fifty thousand naira</h1>
                </div>
                  

               </div>
            </div>
            <div className="flex-col md:w-1/3 mb-3 bg-[#F1F1F1] rounded">
               <div className=" mx-2 p-2">
                <h1 className='text-[12px] text-[#757575] mb-2'>Total Withdrawal</h1>
               <div className="  flex   ">
                  <img
                    src={Money}
                    alt="Logo"
                    className=" mr-2 h-[29px] w-[25px]"
                  />
                  <h1 className='text-[16px] pt-2'>Today Patient</h1>
              </div>
             
                  

               </div>
            </div>
            <div className="flex-col md:w-1/3 mb-3  rounded" style={{ backgroundColor:'rgba(70, 184, 227, 0.05)'}}>
               <div className=" mx-2 p-2">
                <h1 className='text-[12px] text-[#757575] mb-2'>Total Withdrawal</h1>
               <div className="  flex   ">
                  <img
                    src={MoneyBag}
                    alt="Logo"
                    className=" mr-3 h-[31px] w-[29px]"
                  />
                  <h1 className='text-[16px] pt-2'>Today Patient</h1>
              </div>
              <h1 className='text-[12px] text-[#757575] mb-2'>Total Withdrawal</h1>
             
                  

               </div>
            </div>
            
          </div>
          </div>

         
         <div className='bg-white  p-5  w-full rounded '>
          
            <div className=" my-3 ">
                <h1 className='px-3'>Payouts</h1>  
                <hr />
                <h1 className='py-[20%] text-center'>No records found</h1> 
            </div>
                    

                    
                    
        
        
        
        
          </div>
          <div className='mt-5 mb-3'>
            <a href="" className='flex text-[#46B8E3] '><CogIcon className="w-6 h-6   mr-2" /> Setup payout account</a>
          </div>
          <div className=''>
            <a href="" className='flex text-[#46B8E3]'><CreditCardIcon className="w-6 h-6  mr-2" /> Place a withdrawal request</a>
          </div>
          </div>
         
        </div>
      </section>
    </>
    
  )
}

export default DoctorPayout