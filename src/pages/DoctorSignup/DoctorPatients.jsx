import React from 'react'
import DocSideBar from '../../components/DocSideBar'
import Client from '../../assets/images/googlelog.png'

const DoctorPatients = () => {
  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Patients</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Patients</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='  mx-2 border flex-row w-full rounded'>
            <div className="md:flex md:flex-wrap gap-4  ">
              
              <div className="md:w-[30%] my-2 flex-col bg-white rounded  p-3">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%]  my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
                    </div>
              </div>
              <div className="md:w-[30%] my-2 flex-col bg-white rounded p-4">
                 <div className='flex flex-col items-center '>
                  <img
                        src={Client}
                        alt="Logo"
                        className="rounded-full h-[80px] w-[80px] object-cover"
                    />
                 </div>
                 <div className='text-center pt-3 leading-[180%]'>
                  <h1>Tosin Adebayo</h1>
                  <div className='text-[#757575] text-[10px]'>
                  <h1>Patient ID: P0017</h1>
                  <h1 className='pn-3'>New York, United States</h1>
                  <hr />
                  </div>
                 </div>
                 <div className="flex">
                    <div className="w-1/2 text-start">
                    <ul className='leading-[300%] font-semibold text-[10px]'>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Genotype</li>
                      <li>Blood Group</li>
                    </ul>
                    </div>
                    <div className="w-1/2 text-end text-[10px]">
                    <ul className='leading-[300%] text-[#757575]'>
                      <li>Female</li>
                      <li>29 Years</li>
                      <li>AS</li>
                      <li>AB+</li>
                    </ul>
                    </div>
                    
                 </div>
                 <div className='border mt-5 py-1 text-center rounded bg-[#46B8E3] text-white mx-[10%]'>
                      <a href="" className='w-full text-[12px]'>Read More</a>
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