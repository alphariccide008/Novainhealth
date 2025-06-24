import React from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import Image from '../../assets/images/admingooglemin.png'
import { XMarkIcon } from '@heroicons/react/24/outline'  // or /solid





const AdminReview = () => {
 return (
   <>
       <div className="md:pt-[10%] pt-[30%] poppins md:mx-[3%]">
            <div className="md:flex w-full">
                <div className="flex-co   md:w-[15%]">
                    <AdminSidebar/>
                </div>

                <div className="flex-col  md:w-full">
                    <div className="md:flex px-3 md:px-8  justify-between">
                        <div className="flex-col md:w-1/2 space-y-3">
                            <h1 className="text-[24px] font-bold">Welcome Admin</h1>
                            <h4 className="text-[14px] text-[#757575] pb-2">saturday, 25th October 2025</h4>
                        </div>
                        <div className="flex-col md:w-1/3 ">
                            <input type="text" className="p-2 border border-gray-300 w-full" placeholder="🔍 Search..." />                       
                        </div>
                    </div>
                    <div className="md:flex mt-8 p-3 md:px-8 justify-between">
                        <div className="flex-col md:w-1/2">
                            <h1 className="text-[20px] font-bold py-2">Reviews</h1>
                        </div>
                        <div className="flex-col md:w-1/4 ">
                           <span className="text-[12px]">show</span> <input type="text" className="px-[3px] w-14 rounded border mx-2 border-gray-300 " placeholder="" />  <span className="text-[12px]">entries</span>                    
                        </div>
                    </div>

                    <div className="overflow-x-auto w-full">
  <div className="mx-auto md:px-3 min-w-[600px] md:min-w-0">
    <table className="w-full text-[10px] md:text-[14px] text-left">
      <thead className="text-[#757575]">
        <tr>
          <th className="px-3 md:px-4 py-2">Doctor's Name</th>
          <th className="px-3 md:px-4 py-2">Patient's Name</th>
          <th className="px-3 md:px-4 py-2">Rating</th>
          <th className="px-3 md:px-4 py-2">Date</th>
          <th className="px-3 md:px-4 py-2">Remark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 md:px-4 py-2">
            Dr. Susan Mandible
          </td>
          <td className="px-3 md:px-4 py-2">Edible Christy</td>
          <td className="px-3 md:px-4 py-2">
          <span className="text-yellow-500 text-[14px] pb-2">
                {"★".repeat(3) + "☆".repeat(5 - 3)}
                </span>
                <span>(177)</span>
          </td>
          <td className=" px-3 md:px-4 py-2">22nd September 2025 <h1 className=" text-[#46B8E3] text-[10px]">5:00pm</h1></td>
          <td className=" px-3 md:px-4 py-2">A very professional doctor</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</div>


                   
                </div>

                

            </div>
       </div>
   </>
 )
}
export default AdminReview