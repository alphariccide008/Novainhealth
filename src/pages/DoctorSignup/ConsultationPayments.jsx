import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashNav from '../../components/DashNav';
import DocSideBar from '../../components/DocSideBar';
import Client from '../../assets/images/googlelog.png';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';
import { doctorAPI } from "../../services/doctorApi";
import toast from 'react-hot-toast';

const ConsultationPayments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Payments Data:", payments);
  const fetchPayments = async () => {
    try {
      const data = await doctorAPI.getTransactions();
      console.log("Fetched Payments:", data.data.data);
      setPayments(data?.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch consultation payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <>
      <div
        className="w-full relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight: "100px" }}
      >
        <h3 className='pt-3 text-[12px] md:text-14px'>Home / Transaction / Consultation Payments</h3>
        <h1 className='text-[22px] md:text-[24px] py-2 font-semibold'>Consultation Payments</h1>
      </div>

      <section className='md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%] lg:mx-[3%]">
          <DocSideBar />
          <div className='bg-white mx-3 p-5 w-full rounded'>
            {loading ? (
              <p>Loading payments...</p>
            ) : payments.length === 0 ? (
              <p>No consultation payments found.</p>
            ) : (
              payments.map((payment, index) => (
                <div key={index}>
                  <div className="md:flex my-3">
                    <div className="flex-col md:w-1/3">
                      <div className="flex">
                        <img src={Client} alt="Patient" className="rounded-full mr-5 h-[80px] w-[80px] object-cover" />
                        <div className="pt-3">
                          <h1 className='font-semibold text-[16px]'>{payment.patientName || "Unknown"}</h1>
                          <h1 className='text-[#757575] text-[10px]'>{payment.transactionId || `#${index + 1}`}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 text-center p-5 text-[14px]">
                      <h1>${payment.amount}</h1>
                    </div>
                    <div className="md:w-1/3 mt-4 text-[14px] pl-4">
                      <div className='py-2'>
                        <h1>{payment.reference || "No Ref"}</h1>
                      </div>
                    </div>
                    <div className="md:w-1/3 mt-4">
                      <div className="flex gap-2">
                        <div className='w-1/3'>
                          <Link to="#" className='flex rounded text-[10px] p-3 bg-[#46B8E333]'>
                            <EyeIcon className="h-4 w-6" /> View
                          </Link>
                        </div>
                        <div className='w-1/3'>
                          <Link to="#" className='py-3 px-3 rounded flex text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F]'>
                            <FaPrint className="h-4 w-6" /> Print
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultationPayments;
