import React from 'react'
import Client from '../../assets/images/googlelog.png'
import { Link } from 'react-router-dom';
import { ClockIcon ,MapPinIcon, EnvelopeIcon , XMarkIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';
import DocSideBar from '../../components/DocSideBar'
import Patient from '../../assets/images/patient.png'
import Sickbay from '../../assets/images/sickbay.png'
import Emergency from '../../assets/images/emergency.png'
import Money from '../../assets/images/money.png'
import MoneyBag from '../../assets/images/moneybag.png'


const DoctorDashboard = () => {

  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Dashboard</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Dashboard</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='mx-2 border w-full rounded'>
          <div className="md:flex w-full gap-3 ">
            <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
               <div className="flex mx-2 p-2">
               <div className=" w-[88px] h-[88px] flex items-center border-4 border-[#C52184] justify-center rounded-full ">
                  <img
                    src={Patient}
                    alt="Logo"
                    className=" h-[40px] w-[40px]"
                  />
              </div>
              <div className='pl-10 w-1/2 '>
                  <h1 className='text-[16px]'>Total Patient</h1>
                  <h1 className='text-[24px] '>1500</h1>
                  <h1 className='text-[14px] text-[#757575]'>Till today</h1>
              </div>
                  

               </div>
            </div>
            <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
               <div className="flex mx-2 p-2">
               <div className=" w-[88px] h-[88px] flex items-center border-4 border-green-800 justify-center rounded-full ">
                  <img
                    src={Sickbay}
                    alt="Logo"
                    className=" h-[40px] w-[40px]"
                  />
              </div>
              <div className='pl-10 w-1/2 '>
                  <h1 className='text-[16px]'>Today Patient</h1>
                  <h1 className='text-[24px] '>65</h1>
                  <h1 className='text-[14px] text-[#757575]'>12 Nov, 2024</h1>
              </div>
                  

               </div>
            </div>
            <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
               <div className="flex mx-2 p-2">
               <div className=" w-[88px] h-[88px] flex items-center border-4 border-[#46B8E3] justify-center rounded-full ">
                  <img
                    src={Emergency}
                    alt="Logo"
                    className=" h-[40px] w-[40px]"
                  />
              </div>
              <div className='pl-10 w-1/2 '>
                  <h1 className='text-[16px]'>Appointments</h1>
                  <h1 className='text-[24px] '>85</h1>
                  <h1 className='text-[14px] text-[#757575]'>06 Dec, 2024</h1>
              </div>
                  

               </div>
            </div>
          </div>
          <div>

          </div>
        
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
         <div className='my-2 '> <a href="" className='text-[#46B8E3] text-[14px] px-2'>View Payout</a></div>
          </div>

          <div className='md:p-2 font-semibold'><h1>Patient Appointment</h1></div>
         <div className='bg-white  p-5  w-full rounded '>
          <div className='my-8'>
            <a href="" className='py-4 text-white bg-[#46B8E3] px-8 m-2 border rounded-full'> Upcoming</a>
            <a href="" className='py-4 px-8 m-2'>today</a>
          </div>
                  <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      <h1 className='font-semibold text-[14px] py-5'>Patient name</h1>
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    <h1 className='px-5 font-semibold text-[14px] py-5'>Appointment</h1>
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    <h1 className='px-5 font-semibold text-[14px] py-5'>Purpose</h1>
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    <h1 className='font-semibold text-[14px] py-5'>Paid Amount</h1>
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-4 md:pt-10 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <div className="md:flex my-3 ">
                    <div className="flex-col md:w-1/3">
                      
                        <div className="flex">
                            <div className="flex-col md:mr-3">
                            <img src={Client} alt="Logo" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                            </div>
                            <div className="flex-col pt-3">
                                <h1 className='font-semibold text-[16px]'>Vera Ogechi</h1>
                                <div className='  text-[10px]'>
                                    <h1 className='text-[#757575]'>#00016</h1>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                    
                        <div className=" p-5   text-[14px]">
                        
                           <h1>11th Dec 20234</h1>
                           <h1 className='text-[#46B8E3]'>10:00am</h1>
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>General</h1>
                           
                        </div>
                    </div>
                    <div className="flex-col  md:w-1/3">
                   
                        <div className=" p-5   text-[14px]">
                           <h1>$150</h1>
                           
                        </div>
                    </div> 
                    
                    <div className="flex-col mt-5 md:pt-2 md:w-1/3">
                        <div className="flex w-ful gap-2">
                            <div className='w-1/3  '>
                                <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <CheckIcon className="h-4 w-6  "/>Accept</Link>
                            </div>
                            <div className='w-1/3  ' >
                                <Link to="" className='py-3 px-3 rounded flex  text-[10px]  text-[#C52184]' style={{background : 'rgba(197, 33, 132, 0.3)'}}> <XMarkIcon className="h-4 w-6  "/>Cancel</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    
        
        
        
        
          </div>
          
          </div>
        </div>
      </section>
    </>
    
  )
}

export default DoctorDashboard