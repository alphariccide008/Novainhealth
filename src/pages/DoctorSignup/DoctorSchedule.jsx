import React from 'react'
import DocSideBar from '../../components/DocSideBar'
import { FaEdit } from 'react-icons/fa';



const DoctorPatients = () => {
  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Schedule Timings</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Shcedule Timings</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='  mx-6  w-full '>
            <div className=" ">
              <h1 className='text-[28px] font-semibold'>Schedule Timings</h1>
              <h1 className='text-[18px] text-[#757575] py-4'>Timing Slot Duration</h1>
              <div className='text-[#757575] my-10'>
                    <select className="w-[30%] p-2 rounded" >
                        <option value="">30 mins</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

              </div>
                <div className='bg-white rounded'>
                    <div className="md:flex border text-center gap-3  p-5">
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>SUNDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>MONDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>TUESDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>WEDNESDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>THURSDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>FRIDAY</a>
                        </div>
                        <div className='flex-col my-2   border  hover:bg-[#C52184] hover:text-white  py-2  w-full md:w-1/3'>
                        <a href="" className=''>SATURDAY</a>
                        </div>              
                    </div>
                    <div className='border'>
                        <div className="flex border justify-between p-5">
                            <h1 className='text-[16px] font-semibold'>Time Slots</h1>
                             <a href="" className='gap-2 text-[#46B8E3] flex'><FaEdit className="h-[20px] w-[20px]"/>Edit</a>
                        </div>
                        <div className="md:flex border text-[12px] text-center gap-3  p-5">
                        <div className='flex-col bg-[#46B8E3] text-white my-2   border  py-2  w-full md:w-1/3'>
                        8:00am - 9:30am <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2 bg-[#46B8E3] text-white    border   py-2  w-full md:w-1/3'>
                        11:30am - 1:20pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2   border  bg-[#46B8E3] text-white   py-2  w-full md:w-1/3'>
                        3:00pm - 4:45pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                        <div className='flex-col my-2   border bg-[#46B8E3] text-white   py-2  w-full md:w-1/3'>
                        5:00pm - 6:30pm  <a href="#" className='px-3 text-black'>x</a>
                        </div>
                              
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

export default DoctorPatients