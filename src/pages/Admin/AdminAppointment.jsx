import React from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'




const AdminAppointment = () => {
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
                            <h1 className="text-[20px] font-bold py-2">Appointments</h1>
                        </div>
                        <div className="flex-col md:w-1/4 ">
                           <span className="text-[12px]">show</span> <input type="text" className="px-[3px] w-14 rounded border mx-2 border-gray-300 " placeholder="" />  <span className="text-[12px]">entries</span>                    
                        </div>
                    </div>

                    <div className="mx-auto md:px-3">
                    <table className="md:w-full text-[10px] md:text-[14px] text-left">
                        <thead className=" text-[#757575]">
                        <tr>
                            <th className=" px-3 md:px-4 py-2">Doctor name</th>
                            <th className=" px-3 md:px-4 py-2">Patients Name</th>
                            <th className=" px-3 md:px-4 py-2">Amount</th>
                            <th className=" px-3 md:px-4 py-2">Date</th>
                            <th className=" px-3 md:px-4 py-2">Type</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className=" px-3 md:px-4 py-2">Dr. Susan Mandible</td>
                            <td className=" px-3 md:px-4 py-2">Edible Christy</td>
                            <td className=" px-3 md:px-4 py-2">$32</td>
                            <td className=" px-3 md:px-4 py-2">22nd September 2025 <h1 className=" text-[#46B8E3] text-[10px]">4:30pm - 5:00pm</h1></td>
                            <td className=" px-3 md:px-4 py-2">On-site</td>

                        </tr>
                       
                        </tbody>
                    </table>
                    </div>

                   
                </div>

                

            </div>
       </div>
   </>
 )
}
export default AdminAppointment