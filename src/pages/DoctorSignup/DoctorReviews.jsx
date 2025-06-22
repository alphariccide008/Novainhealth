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
            <h3 className='pt-3 text-[12px] md:text-14px'>Home / Reviews</h3>
            <h1 className='text-[22px] md:text-[24px]  py-2 font-semibold'>Reviews</h1>
        </div>
        <section className='md:py-[20%]  lg:top-[15%]  py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]  ">
        <DocSideBar/>
          <div className='bg-white pt-10 px-5  mx-2 border w-full rounded'>
            <div className="md:flex px-3 py-10">

                <div className="flex-col py-3 text-[28px] w-1/3">
                    <h1>Reviews</h1>
                </div>
                <div className="flex-col mb-3 md:w-1/3">
                    <form action="">
                    <input
                        type="text"
                        placeholder="🔍 Search..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </form>
                </div>
                <div className="flex-col text-[14px] w-1/3 md:text-center">
                    <span>Sort by</span> 
                    <select className=' text-[14px] text-[#46B8E3] pt-5 md:py-2 mx-4'  name="" id="">
                        <option value="">all Review</option>
                    </select>
                </div>
                
            </div>
            <hr />

            <div className="md:flex my-5 ">
                <div className="md:w-[12%] pl-3 flex-col">
                     <img src={Client} alt="Logo"  className="rounded-full h-[80px] w-[80px] object-cover"/>
                </div>
                <div className=" w-full px-5 flex-col">
                    <div className="md:flex w-full ">
                        <div className="md:w-1/2 text-[16px] mb-2 leading-8  flex-col">
                            <h2 className='font-semibold'>Vera Ogechi, Lagos</h2>
                            <h2 className='text-[#757575] text-[10px]'>reviewed 2 days ago</h2>
                        </div>
                        <div className="w-full pr-4 mb-2 flex-col">
                        <div className="flex md:items-end  md:justify-end   space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl ${
                                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                >
                                ★
                                </button>
                            ))}
                        </div>
                        <div>

                        </div>
                        </div>
                        
                    </div>
                    <div className='text-[14px] text-[#080000]'>
                    <h1><i>""Dr. Susan was incredibly professional and kind. The consultation was seamless, and he explained
                    everything clearly. I felt confident about my treatment plan. Highly recommended!""</i></h1>
                    </div>
                   
                        <div className='w-full flex mt-5 mb-3  text-[10px] justify-between'>
                            <button className="flex items-center space-x-1 text-[#46B8E3]">
                                <FaReply className="h-5 w-5 mr-3" />
                                <span>Reply</span>
                            </button>
                            <h1 className='text-[#EF4444]'><a href="" ></a>report</h1>
                        </div>
                 
                </div>
                
            </div>
            <hr />
            <div className="md:flex my-5 ">
                <div className="md:w-[12%] pl-3 flex-col">
                     <img src={Client} alt="Logo"  className="rounded-full h-[80px] w-[80px] object-cover"/>
                </div>
                <div className=" w-full px-5 flex-col">
                    <div className="md:flex w-full ">
                        <div className="md:w-1/2 text-[16px] mb-2 leading-8  flex-col">
                            <h2 className='font-semibold'>Vera Ogechi, Lagos</h2>
                            <h2 className='text-[#757575] text-[10px]'>reviewed 2 days ago</h2>
                        </div>
                        <div className="w-full pr-4 mb-2 flex-col">
                        <div className="flex md:items-end  md:justify-end   space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl ${
                                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                >
                                ★
                                </button>
                            ))}
                        </div>
                        <div>

                        </div>
                        </div>
                        
                    </div>
                    <div className='text-[14px] text-[#080000]'>
                    <h1><i>""Dr. Susan was incredibly professional and kind. The consultation was seamless, and he explained
                    everything clearly. I felt confident about my treatment plan. Highly recommended!""</i></h1>
                    </div>
                   
                        <div className='w-full flex mt-5 mb-3  text-[10px] justify-between'>
                            <button className="flex items-center space-x-1 text-[#46B8E3]">
                                <FaReply className="h-5 w-5 mr-3" />
                                <span>Reply</span>
                            </button>
                            <h1 className='text-[#EF4444]'><a href="" ></a>report</h1>
                        </div>
                 
                </div>
                
            </div>
            <hr />
            <div className="md:flex my-5 ">
                <div className="md:w-[12%] pl-3 flex-col">
                     <img src={Client} alt="Logo"  className="rounded-full h-[80px] w-[80px] object-cover"/>
                </div>
                <div className=" w-full px-5 flex-col">
                    <div className="md:flex w-full ">
                        <div className="md:w-1/2 text-[16px] mb-2 leading-8  flex-col">
                            <h2 className='font-semibold'>Vera Ogechi, Lagos</h2>
                            <h2 className='text-[#757575] text-[10px]'>reviewed 2 days ago</h2>
                        </div>
                        <div className="w-full pr-4 mb-2 flex-col">
                        <div className="flex md:items-end  md:justify-end   space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl ${
                                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                >
                                ★
                                </button>
                            ))}
                        </div>
                        <div>

                        </div>
                        </div>
                        
                    </div>
                    <div className='text-[14px] text-[#080000]'>
                    <h1><i>""Dr. Susan was incredibly professional and kind. The consultation was seamless, and he explained
                    everything clearly. I felt confident about my treatment plan. Highly recommended!""</i></h1>
                    </div>
                   
                        <div className='w-full flex mt-5 mb-3  text-[10px] justify-between'>
                            <button className="flex items-center space-x-1 text-[#46B8E3]">
                                <FaReply className="h-5 w-5 mr-3" />
                                <span>Reply</span>
                            </button>
                            <h1 className='text-[#EF4444]'><a href="" ></a>report</h1>
                        </div>
                 
                </div>
                
            </div>
            <hr />
            <div className="md:flex my-5 ">
                <div className="md:w-[12%] pl-3 flex-col">
                     <img src={Client} alt="Logo"  className="rounded-full h-[80px] w-[80px] object-cover"/>
                </div>
                <div className=" w-full px-5 flex-col">
                    <div className="md:flex w-full ">
                        <div className="md:w-1/2 text-[16px] mb-2 leading-8  flex-col">
                            <h2 className='font-semibold'>Vera Ogechi, Lagos</h2>
                            <h2 className='text-[#757575] text-[10px]'>reviewed 2 days ago</h2>
                        </div>
                        <div className="w-full pr-4 mb-2 flex-col">
                        <div className="flex md:items-end  md:justify-end   space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl ${
                                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                >
                                ★
                                </button>
                            ))}
                        </div>
                        <div>

                        </div>
                        </div>
                        
                    </div>
                    <div className='text-[14px] text-[#080000]'>
                    <h1><i>""Dr. Susan was incredibly professional and kind. The consultation was seamless, and he explained
                    everything clearly. I felt confident about my treatment plan. Highly recommended!""</i></h1>
                    </div>
                   
                        <div className='w-full flex mt-5 mb-3  text-[10px] justify-between'>
                            <button className="flex items-center space-x-1 text-[#46B8E3]">
                                <FaReply className="h-5 w-5 mr-3" />
                                <span>Reply</span>
                            </button>
                            <h1 className='text-[#EF4444]'><a href="" ></a>report</h1>
                        </div>
                 
                </div>
                
            </div>
            <hr />
            <div className="md:flex my-5 ">
                <div className="md:w-[12%] pl-3 flex-col">
                     <img src={Client} alt="Logo"  className="rounded-full h-[80px] w-[80px] object-cover"/>
                </div>
                <div className=" w-full px-5 flex-col">
                    <div className="md:flex w-full ">
                        <div className="md:w-1/2 text-[16px] mb-2 leading-8  flex-col">
                            <h2 className='font-semibold'>Vera Ogechi, Lagos</h2>
                            <h2 className='text-[#757575] text-[10px]'>reviewed 2 days ago</h2>
                        </div>
                        <div className="w-full pr-4 mb-2 flex-col">
                        <div className="flex md:items-end  md:justify-end   space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl ${
                                    (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                >
                                ★
                                </button>
                            ))}
                        </div>
                        <div>

                        </div>
                        </div>
                        
                    </div>
                    <div className='text-[14px] text-[#080000]'>
                    <h1><i>""Dr. Susan was incredibly professional and kind. The consultation was seamless, and he explained
                    everything clearly. I felt confident about my treatment plan. Highly recommended!""</i></h1>
                    </div>
                   
                        <div className='w-full flex mt-5 mb-3  text-[10px] justify-between'>
                            <button className="flex items-center space-x-1 text-[#46B8E3]">
                                <FaReply className="h-5 w-5 mr-3" />
                                <span>Reply</span>
                            </button>
                            <h1 className='text-[#EF4444]'><a href="" ></a>report</h1>
                        </div>
                 
                </div>
                
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
    
  )
}

export default DoctorPatients