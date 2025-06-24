import React from "react"
import AdminSidebar from '../../components/AdminSidebar'
import '../../components/components.css'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline'  
import { Link } from "react-router-dom"





const AdminSpecialty = () => {
 return (
   <>
       <div className="md:pt-[10%] pb-[10%] pt-[30%] poppins md:mx-[3%]">
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
                        <div className="flex-col md:w-1/2 ">
                            <h1 className="text-[20px] font-bold py-2">Specialties</h1>
                        </div>
                        <div className="flex-col md:w-1/4 ">
                           <span className="text-[12px]">show</span> <input type="text" className="px-[3px] w-14 rounded border mx-2 border-gray-300 " placeholder="" />  <span className="text-[12px]">entries</span>                    
                        </div>
                    </div>

                    <div className="mx-auto md:px-3">
                    <table className="md:w-full w-full text-[10px] md:text-[14px] text-left">
                        <thead className=" text-[#757575]">
                        <tr>
                            <th className=" px-3 md:px-4 py-2">#</th>
                            <th className=" px-3 md:px-4 py-2">Specialties</th>
                            <th className=" px-3 md:px-4 py-2">Actions</th>
                            

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className=" px-3 md:px-4 py-2">SP001</td>
                            <td className=" px-3 md:px-4 py-2">urologist</td>
                            <td className=" px-3 md:px-4 py-2">
                                <div className="md:flex space-y-3">
                                    <div className="flex-col ">
                                  
                                        <Link className="eye px-2 rounded text-[#021140] md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3  "/> <span className=" p-2">View</span></Link>
                             
                                    </div>
                                    <div className="flex-col">
                                    
                                    
                                        <Link className="accept px-2 rounded text-[#0B6E4F]  md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3 "/> <span className="  p-2">Accept</span></Link>
                             
                                    </div>
                                    <div className="flex-col">
                                    
                                        <Link className="cancel px-2 rounded text-[#C52184] md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3 "/> <span className="  p-2">Cancel</span></Link>
                                
                                    </div>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className=" px-3 md:px-4 py-2">SP001</td>
                            <td className=" px-3 md:px-4 py-2">urologist</td>
                            <td className=" px-3 md:px-4 py-2">
                                <div className="md:flex ">
                                    <div className="flex-col my-2">
                                  
                                        <Link className="eye px-2 rounded text-[#021140] md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3  "/> <span className=" p-2">View</span></Link>
                             
                                    </div>
                                    <div className="flex-col my-2">
                                    
                                    
                                        <Link className="accept px-2 rounded text-[#0B6E4F]  md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3 "/> <span className="  p-2">Accept</span></Link>
                             
                                    </div>
                                    <div className="flex-col my-2">
                                    
                                        <Link className="cancel px-2 rounded text-[#C52184] md:mx-2 text-[12px] flex"><EyeSlashIcon className="w-3 "/> <span className="  p-2">Cancel</span></Link>
                                
                                    </div>
                                </div>
                            </td>

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
export default AdminSpecialty