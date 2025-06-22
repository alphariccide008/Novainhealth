import React from 'react'
import Doctor1 from '../assets/images/doctor1.png'
import Andriod from '../assets/images/andriod.png'
import Apple from '../assets/images/apple.png'
import Playstore from '../assets/images/playstore.png'
import Applestore from '../assets/images/applestore.png'
import './components.css'

const Download = () => {
  return (
    <>
      <section className='md:h-[599px] download pb-4 md:text-start text-center md:px-0 px-3'>
        <div className="md:flex md:mx-[10%] md:pt-20">
          <div className="flex-col my-4 md:w-1/2 md:pr-[10%] pt-4 ">
            <h1 className='text-[36px] playfair  '>Your World of Care, Now in Your Pocket</h1>
            <p className='text-[12px] poppins'>From everyday checkups to urgent emergencies, get the care you 
                need—fast and hassle-free. Chat with doctors, book appointments, 
                and manage your health on the go.
              </p>
              <div className="flex pb-4">
                <div>
                  <img src={Apple} className='h-[168px] w-[168px]' alt="" />
                </div>
                <div className='m-3'>
                  <img src={Andriod} className='h-[138px] pt-2 w-[158px]' alt="" />
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src={Applestore} className='h-[65px] w-[166px]' alt="" />
                </div>
                <div className=''>
                  <img src={Playstore} className='h-[65px] w-[168px]' alt="" />
                </div>
              </div>
          </div>
          <div className="flex-col md:w-1/2">
            <img src={Doctor1} className='md:h-[433.6524353027344px] rounded ' alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download