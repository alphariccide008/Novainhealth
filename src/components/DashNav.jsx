import React from 'react'

const DashNav = () => {
  return (
    <>
        <div  className="w-full relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
      style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px",  }}>
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Application</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Appointment</h1>
        </div>
    </>
  )
}

export default DashNav