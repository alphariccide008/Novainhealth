import React from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import Image from '../../assets/images/admingooglemin.png'
import { XMarkIcon } from '@heroicons/react/24/outline'  // or /solid





const AdminInvoiceList = () => {
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
                            <h1 className="text-[20px] font-bold py-2">Transaction List</h1>
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
          <th className="px-3 md:px-4 py-2">Patient's Name</th>
          <th className="px-3 md:px-4 py-2">Phone</th>
          <th className="px-3 md:px-4 py-2">Paid</th>
          <th className="px-3 md:px-4 py-2">Invoice No.</th>
          <th className="px-3 md:px-4 py-2">Status</th>
          <th className="px-3 md:px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 md:px-4 py-2">
            <div className="md:flex items-center">
              <div className="mr-4 mb-2 md:mb-0">
                <img src={Image} className="w-[35px] h-[35px] rounded-full" alt="" />
              </div>
              <div>
                <h1>Tina Martinelle</h1>
                <p className="text-[#757575] text-[10px]">PT306</p>
              </div>
            </div>
          </td>
          <td className="px-3 md:px-4 py-2">08045211167</td>
          <td className="px-3 md:px-4 py-2">$3112</td>
          <td className="px-3 md:px-4 py-2">INV100321</td>
          <td className="px-3 md:px-4 py-2">
            <h1 className="status text-white text-[10px] px-3 p-[2px] rounded">Paid</h1>
          </td>
          <td className="px-3 md:px-4 py-2">
            <div className="md:flex gap-2">
              <Link className="flex eye py-[2px] rounded items-center text-[#021140] text-[12px] px-2">
                <EyeSlashIcon className="w-4 h-4 mr-1" />
                <span>View</span>
              </Link>
              <Link className="flex cancel py-[2px] rounded my-2 items-center text-[#C52184] text-[12px] px-2">
                <XMarkIcon className="w-4 h-4 mr-1" />
                <span>Cancel</span>
              </Link>
            </div>
          </td>
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
export default AdminInvoiceList