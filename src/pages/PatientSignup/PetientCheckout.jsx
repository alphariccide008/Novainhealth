import React from "react"
import '../../components/components.css'
import { Link } from "react-router-dom"

const PetientCheckout = () => {
  return (
   <>
     <div className="poppins md:mx-[30%] px-4 pt-[30%] py-10  md:py-[20%] "> 
      <div>
        <h1 className="text-[18px] pb-10 font-bold" > Checkout</h1>
        <h4 className="text-[12px] pb-5">Choose your preferred payment method </h4>
        <hr />
        <form action=" border rounded px-2 text-[12px] pt-10 shadow-md">
          <input className="pb-2 text-[12px]" type="radio" /> <span className="text-[12px]">Credit card</span>
          <div className="md:flex gap-6 pb-4">
            <div className="flex-col border  md:w-1/2">
              <input type="text" className="w-full  border py-2 px-4" placeholder="Name on  card"/>
            </div>
            <div className="flex-col border md:w-1/2">
              <input type="text" className="w-full border py-2 px-4" placeholder="Card Number " />
            </div>
          </div>
          <div className="md:flex gap-6">
            <div className="flex-col border  md:w-1/3">
              <input type="text" className="w-full border py-2 px-4 " placeholder="Expiry Date (Month)"/>
            </div>
            <div className="flex-col border  md:w-1/3">
              <input type="text" className="w-full border py-2 px-4" placeholder="Expiry Date (Year)"/>
            </div>
            <div className="flex-col border md:w-1/3">
              <input type="text" className="w-full border py-2 px-4 "placeholder="Name on Card" />
            </div>
          </div>
          <input type="radio" className="my-5 text-[10px]"  /><span className="text-[12px]"> I have accepted and read the <Link to='' className="text-[#46B8E3] underline">Terms and conditions</Link></span>
          <div className="flex justify-center items-center">
            <Link className="px-16 py-2 bg-[#46B8E3] rounded  text-white">Confirm and Pay</Link>
          </div>
        </form>
      </div>
     </div>
   </>
  )
}
export default PetientCheckout