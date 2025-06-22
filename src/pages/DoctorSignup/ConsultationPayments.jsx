import React from 'react'
import { Link } from 'react-router-dom';
import DashNav from '../../components/DashNav'
import DocSideBar from '../../components/DocSideBar'
import Client from '../../assets/images/googlelog.png'
import Client1 from '../../assets/images/client1.png'
import Client2 from '../../assets/images/client2.png'
import { ClockIcon ,MapPinIcon, EnvelopeIcon , XMarkIcon, CheckIcon , EyeIcon , PhoneIcon} from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';


const ConsultationPayments = () => {
  return (
    <>
        <div  className="w-full relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
      style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Transaction / Consultation Payments</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Consultation Payments</h1>
        </div>
    
    <section className='md:py-[20%] lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%] lg:mx-[3%] ">
            <DocSideBar/>
          <div className='bg-white mx-3 p-5  w-full rounded'>
          <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            <div className="md:flex my-3 ">
            <div className="flex-col md:w-1/3">
                <div className="flex">
                    <div className="flex-col">
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
                <div className=" p-5  md:text-center text-[14px]">
                   <h1>$150</h1>
                </div>
            </div>
            <div className="flex-col mt-4 text-[14px] pl-4 md:w-1/3">
                <div className=' py-2 '>
                    <h1>25JN03/67890/TN04</h1>
                </div>
                         
            </div>
            <div className="flex-col mt-4 md:w-1/3">
                <div className="flex w-ful gap-2">
                    <div className='w-1/3  '>
                        <Link to="" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'><EyeIcon className="h-4 w-6 flex "/> View</Link>
                    </div>
                    <div className='w-1/3  ' >
                        <Link to="" className='py-3 px-3 rounded flex  text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'> <FaPrint className="h-4 w-6  "/>Print</Link>
                    </div>
                    
                    
                </div>
            </div>
            </div>
            <hr />
            




            </div>
        </div>
      
        
    </section>
    
     
    
    </>
  )
}

export default ConsultationPayments