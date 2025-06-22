import React, {useState} from 'react'
import DocSideBar from '../../components/DocSideBar'
import Client from '../../assets/images/googlelog.png'
import { FaReply } from 'react-icons/fa';


const DoctorPatients = () => {
    const [rating, setRating] = useState(0);        // Selected rating
    const [hover, setHover] = useState(0);          // 
  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Bio</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Bio</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex md:mx-[2%]  ">
        <DocSideBar/>
          <div className=' pt-10 px-5  md:mx-2 border w-full rounded'>
            <form action="">
               
                <div className="rounded px-4 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Basic Information</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>First Name</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Phone Number</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Gender</label>

                            <select className="text-[14px] md:w-[70%] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]" name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Last Name</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Email</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Date of Birth</label>

                            <select className="text-[14px] md:w-[70%] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]" name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>
                <div className="rounded my-8 px-4 py-10 bg-white">
                
                <div className=" ">
                <h1 className='px-3 text-[18px] py-5 font-bold'>About Me</h1>
                    
                    <textarea name="" className='className="text-[14px] rounded p-2 cursor-pointer h-[250px]  border border-gray-300 flex w-full items-center justify-center text-gray-700  text-[10px]"' id=""></textarea>
                    
                </div>
                </div>

                <div className="rounded px-4 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Clinic Info</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Clinic Name</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Clinic Address</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="my-5 px-3">
                            
                            < input
                                className="text-[14px] text-center rounded p-2 cursor-pointer bg-white border border-dashed border-gray-300 h-[200px] flex w-full items-center justify-center bg-[#D9D9D966] text-gray-700 hover:text-white text-[10px]" type='file' placeholder='Drag files here to upload'
                            />
                        </div>
                </div>
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Contact Details</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Address Line 1</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>city</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Phone Number</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                       
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Address Line 2</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>State/ Province</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Postal Code</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Contact Details</h1>
                <div className="md ">
                    
                    <div className="px-3 ">
                    
                    <div className="my-5 flex">
                        <div className='m-3'>
                           
                            <input
                            type='radio'
                            name='addressOption' 
                            className="text-[14px] mx-3 rounded p-2 cursor-pointer  text-[#46B8E3]"
                            />
                             <label className='text-[12px] text-[#757575]'> Free</label>
                        </div>

                        <div className='m-3'>
                            <input
                            type='radio'
                            name='addressOption'  
                            className="text-[14px] mx-3 rounded p-2 cursor-pointer text-gray-700"
                            />
                            <label className='text-[12px] text-[#757575]'>Custom Price (per hour)</label>

                        </div>
                        </div>
                        
                
                    </div>
                   
                </div>
                </div>
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Services and Speculations</h1>
                <div className="md ">
                    <h1 className='px-3 py-2 text-[12px] text-[#757575]'>Services</h1>
                    <div className="px-3 ">
                    
                    <div className="my-3 border text-[12px] flex">
                        <div className='m-3 '>
                           
                            <div className='border rounded px-3 py-2 bg-[#46B8E3] text-white'>
                                <h1  >Touch Cleaning <a href="@">x</a></h1>
                            </div>
                        </div>

                        <div className='m-3'>
                        <div className='border rounded px-3 py-2 bg-[#46B8E3] text-white'>
                                <h1 >Teeth Whitening <a href="@">x</a></h1>
                            </div>

                        </div>
                        
                        </div>
                        <p className='text-[8px] text-[#757575]'>NB: Type and Press Enter to add new service</p>
                        
                
                    </div>
                   
                </div>
                <div className="md mt-10 ">
                    <h1 className='px-3 py-2 text-[12px] text-[#757575]'>Services</h1>
                    <div className="px-3 ">
                    
                    <div className="my-3 border text-[12px] flex">
                        <div className='m-3'> 
                           
                            <div className='border rounded px-3 py-2 bg-[#46B8E3] text-white'>
                                <h1 >Children Care <a href="@">x</a></h1>
                            </div>
                        </div>

                        <div className='m-3'>
                        <div className='border rounded px-3 py-2 bg-[#46B8E3] text-white'>
                                <h1 >Dental Care <a href="@">x</a></h1>
                            </div>

                        </div>
                        
                        </div>
                        <p className='text-[8px] text-[#757575]'>NB: Type and Press Enter to add new service</p>
                        
                
                    </div>
                   
                </div>
                </div>



                {/* Education  */}
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Education</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>College / Institute</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Year Started</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                       
                       
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Degree Obtained </label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Year of Completion</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                     
                    </div>
                </div>
                <div x>
                    <div className='text-[#46B8E3]'><a style={{ borderRadius:'50%'}} href="" className='bg-[#46B8E3] rounded-full text-white pb-[2px] px-[4px] object-cover mx-2'>+</a> Add More</div>
                </div>
                </div>

                {/* Work Experience */}
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Work Experience</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Hospital</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>From</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                       
                       
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Designation </label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>To</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                     
                    </div>
                </div>
                <div x>
                    <div className='text-[#46B8E3]'><a style={{ borderRadius:'50%'}} href="" className='bg-[#46B8E3] rounded-full text-white pb-[2px] px-[4px] object-cover mx-2'>+</a> Add More</div>
                </div>
                </div>

                {/* Awards */}
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Awards</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Names of Award</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Year </label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        
                     
                    </div>
                </div>
                <div x>
                    <div className='text-[#46B8E3]'><a style={{ borderRadius:'50%'}} href="" className='bg-[#46B8E3] rounded-full text-white pb-[2px] px-[4px] object-cover mx-2'>+</a> Add More</div>
                </div>
                </div>

                {/* Memberships */}
                <div className="rounded px-4 my-3 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Memberships</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Names of Organization</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                    </div>
                    
                </div>
                <div x>
                    <div className='text-[#46B8E3]'><a style={{ borderRadius:'50%'}} href="" className='bg-[#46B8E3] rounded-full text-white pb-[2px] px-[4px] object-cover mx-2'>+</a> Add More</div>
                </div>
                </div>
                
                {/* License */}

                <div className="rounded px-4 py-10 bg-white">
                    <h1 className='px-3 text-[18px] font-bold'>Registration and License</h1>
                <div className="md:flex ">
                    
                    <div className="flex-col px-3 md:w-1/2">
                    
                    <div className="my-5 ">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Registration</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                        
                    </div>
                    <div className="flex-col px-3 md:w-1/2">
                    <div className=" my-5">
                            <label htmlFor="" className='text-[12px] text-[#757575]'>Year</label>
                            < input
                                className="text-[14px] rounded p-2 cursor-pointer bg-white border border-gray-300 flex w-full items-center justify-center text-gray-700 hover:text-white text-[10px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="my-5 px-3">
                            
                            < input
                                className="text-[14px] text-center rounded p-2 cursor-pointer bg-white border border-dashed border-gray-300 h-[200px] flex w-full items-center justify-center bg-[#D9D9D966] text-gray-700 hover:text-white text-[10px]" type='file' placeholder='Drag files here to upload'
                            />
                        </div>
                        <div x>
                    <div className='text-[#46B8E3]'><a style={{ borderRadius:'50%'}} href="" className='bg-[#46B8E3] rounded-full text-white pb-[2px] px-[4px] object-cover mx-2'>+</a> Add More</div>
                </div>
                </div>
                <button type='submit' className='rounded border bg-[#46B8E3] text-white  mt-6 py-3 px-14'>
                    Save Changes
                </button>

            </form>
            
          </div>
        </div>
      </section>
    </>
    
  )
}

export default DoctorPatients