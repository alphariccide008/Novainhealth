import React from 'react'
import DocSideBar from '../../components/DocSideBar'
import Client from '../../assets/images/googlelog.png'

const DoctorPatients = () => {
  return (
    <>

        <div  className=" relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
            style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Change Password</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Change Password</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='  mx-2 border flex-row w-full rounded'>
            <div className="  ">
              <div className="md:w-[50%] my-2 flex-col bg-white rounded  p-3">
                <form action="" className='px-3'>
                <div className=' my-5'>
                    <label htmlFor="">Old Password</label>
                  <input type="text" className='w-full border' />
                 </div>
                 <div className='my-5 '>
                    <label htmlFor="">New Password</label>
                  <input type="text" className='w-full border' />
                 </div>
                 <div className=' my-5 '>
                    <label htmlFor="">Confirm Password</label>
                  <input type="text" className='w-full border' />
                 </div>
                 
                    <button href="" className='w-[20%] text-[12px] py-2 text-center rounded bg-[#46B8E3] text-white '>Submit</button>
                    
                </form>

                 
                
                 
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default DoctorPatients