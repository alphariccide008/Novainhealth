import React, { useState, useEffect } from "react";
import "../../components/components.css";
import PatientSidebar from "../../components/PatientSidebar";
import { appointmentAPI } from "../../services/appointmentApi";
import { patientAPI } from "../../services/patientApi";
import toast from 'react-hot-toast';
import Image from "../../assets/images/googlelog.png";

import Surggy from "../../assets/images/surggy.png";
import Union from "../../assets/images/Union.png";
import PatientEmerg from "../../assets/images/patientemerg.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  PlusCircleIcon,
  CheckCircleIcon,
  HomeIcon,
  PlusIcon,
  DocumentTextIcon,
  LockClosedIcon,
  CheckIcon,
  StarIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpOnSquareStackIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { CalendarDaysIcon, ShareIcon } from "@heroicons/react/20/solid";
import { FaUserDoctor } from "react-icons/fa6";
import { XMarkIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FaUserCircle } from "react-icons/fa";

const PatientAppointments = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [patientInfo, setPatientInfo] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchPatientInfo();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await appointmentAPI.getPatientAppointments();
      if (response.success) {
        setAppointments(response.data.appointments || []);
      }
    } catch (error) {
      toast.error('Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  const fetchPatientInfo = async () => {
    try {
      const response = await patientAPI.getProfile();
      if (response.success) {
        setPatientInfo(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch patient info:', error);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const response = await appointmentAPI.updateAppointmentStatus(appointmentId, 'CANCELLED');
      if (response.success) {
        toast.success('Appointment cancelled successfully');
        fetchAppointments();
      }
    } catch (error) {
      toast.error('Failed to cancel appointment');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <div
        className="relative w-full  text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
          zIndex: 50,
        }}
      >
        {/* Mobile Menu Toggle */}
        <div className="flex justify-between items-center md:hidden">
          <div>
            <h3 className="pt-3 text-[12px]">Home / Appointments</h3>
            <h1 className="text-[22px] py-2 font-semibold">Appointments</h1>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="pt-3">
            {menuOpen ? (
              <IoMdClose className="h-6 w-6 text-white" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className=" w-full md:hidden rounded flex">
            <div className=" px-[] text-[#757575]  py-3 ">
              <Link to="#" className="text-18px">
                <HomeIcon className="h-4 w-4 mr-5 " />
              </Link>
            </div>

            <div className=" px-[]  text-[#757575] py-3">
              <Link to="#" className="text-18px">
                <CalendarDaysIcon className="h-4 w-4 mr-5 " />
              </Link>
            </div>

            <div className="px-[]  text-[#757575] py-3 ">
              <Link to="#" className="text-18px">
                <FaUserDoctor className="h-4 w-4 mr-5 " />
              </Link>
            </div>

            <div className=" px-[10px]  text-[#757575]  py-3 ">
              <Link to="#" className="text-18px">
                <img src={PatientEmerg} className="h-4 w-4" alt="" />
              </Link>
            </div>

            <div className=" px-[10px] flex text-[#757575] py-3 ">
              <Link to="#" className="text-18px">
                <img src={Union} className="w-4 h-4" alt="" />
              </Link>
            </div>

            <div className=" px-[]  text-[#757575] py-3 ">
              <ChatBubbleLeftRightIcon className="h-4 w-4 mr-5 " />
            </div>

            <div className=" px-[]  text-[#757575] py-3 ">
              <FaUserCircle className="h-4 w-4 mr-5 " />
            </div>

            <div className=" px-[]  text-[#757575]  py-3 ">
              <ShareIcon className="h-4 w-4 mr-5 " />
            </div>

            <div className=" px-[]  text-[#757575] py-3 ">
              <LockClosedIcon className="h-4 w-4 mr-5 " />
            </div>

            <div className=" px-[]  text-[#757575] py-3">
              <ArrowRightOnRectangleIcon className="h-4 w-4 mr-5 " />
            </div>
          </div>
        )}

        {/* Desktop View */}
        <div className="hidden md:block">
          <h3 className="pt-3 text-[12px] md:text-14px">Home / Appointments</h3>
          <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
            Appointments
          </h1>
        </div>
      </div>

      <div className="md:flex px-3 poppins pt-[35%] md:pt-[21%]">
        <div className="flex-col">
          <PatientSidebar />
        </div>
        <div className="flex-col md:w-1/3">
          <h1 className="text-[24px] text-center font-semibold pb-5">
            Welcome Back!
          </h1>
          <div className="flex justify-center items-center w-full">
            <img
              src={Image}
              className="h-[135px] w-[135px] rounded-full"
              alt=""
            />
          </div>
          <div className="text-center leading-[250%]">
            <p className="text-[18px]">{patientInfo?.firstName} {patientInfo?.lastName}</p>
            <p className="text-[#757575] text-[16px]">{patientInfo?.patientId || 'Loading...'}</p>
            <p className="text-[12px]">
              Membership Plan || <span className="text-[#757575]">{patientInfo?.membershipPlan || 'Basic'}</span>
            </p>
          </div>
          <div className="md:ml-10">
            <h1 className="text-center text-[14px] font-semibold pb-10">
              Patient's Information
            </h1>
            <div className="flex  leading-[220%]">
              <div className="flex-col ml-8  text-[12px] md:w-1/2">
                <p>Gender </p>
                <p>Blood Group </p>
                <p>Allergies </p>
                <p>Diseases</p>
                <p>Height </p>
                <p>Patient ID </p>
                <p>Last Appointment </p>
                <p>DOB </p>
              </div>
              <div className="flex-col md:ml-0 ml-12 text-[#757575] text-[12px] md:w-1/2">
                <p>{patientInfo?.gender || 'N/A'}</p>
                <p>{patientInfo?.bloodGroup || 'N/A'}</p>
                <p>{patientInfo?.allergies || 'None'}</p>
                <p>{patientInfo?.medicalHistory || 'None'}</p>
                <p>{patientInfo?.height || 'N/A'}</p>
                <p>{patientInfo?.patientId || 'N/A'}</p>
                <p>{patientInfo?.lastAppointment ? formatDate(patientInfo.lastAppointment) : 'None'}</p>
                <p>{patientInfo?.dateOfBirth ? formatDate(patientInfo.dateOfBirth) : 'N/A'}</p>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-5 flex w-full justify-center  items-center">
            <Link
              to=""
              className="text-white text-[12px] rounded py-2 px-8 bg-[#46B8E3] "
            >
              {" "}
              Read More{" "}
            </Link>
          </div>
        </div>
        <div className="flex-col md:w-full ">
          <h1 className="text-[24px] my-5">Appointment Schedule</h1>
          <Link
            to=""
            className="rounded-full my-5 text-[18px] bg-[#46B8E3] px-14 py-2 text-white"
          >
            Upcoming
          </Link>
          <div className="p-4 my-5">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full text-[14px] text-left">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="px-4 py-2">Doctor's name</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Specialization</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Paid Amount</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center">Loading appointments...</td>
                    </tr>
                  ) : appointments.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center">No appointments found</td>
                    </tr>
                  ) : (
                    appointments.map((appointment) => (
                      <tr key={appointment._id}>
                        <td className="px-4 py-2 flex items-center space-x-2">
                          <img
                            src={appointment.doctor?.profileImage || Surggy}
                            className="w-6 h-6 rounded-full"
                            alt="doctor"
                          />
                          <span>Dr. {appointment.doctor?.firstName} {appointment.doctor?.lastName}</span>
                        </td>
                        <td className="px-4 py-2">
                          {formatDate(appointment.appointmentDate)} <br />
                          <span className="text-[#46B8E3]">{formatTime(appointment.appointmentTime)}</span>
                        </td>
                        <td className="px-4 py-2">{appointment.doctor?.specialization || 'General'}</td>
                        <td className="px-4 py-2">{appointment.consultationType || 'In-person'}</td>
                        <td className="px-4 py-2">${appointment.consultationFee}</td>
                        <td className="px-4 py-2">
                          <div className="flex space-x-2">
                            <Link
                              to={`/patientviewappointment?id=${appointment._id}`}
                              className="flex items-center gap-1 p-2 text-[10px] bg-[#46B8E333] rounded"
                            >
                              <EyeIcon className="h-4 w-4" /> View
                            </Link>
                            {appointment.status !== 'CANCELLED' && appointment.status !== 'COMPLETED' && (
                              <button
                                onClick={() => handleCancelAppointment(appointment._id)}
                                className="flex items-center gap-1 p-2 text-[10px] text-[#C52184] bg-[#C521844D] rounded"
                              >
                                <XMarkIcon className="h-4 w-4" /> Cancel
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden space-y-4">
              {loading ? (
                <div className="p-4 border rounded-lg shadow-sm text-sm text-center">
                  Loading appointments...
                </div>
              ) : appointments.length === 0 ? (
                <div className="p-4 border rounded-lg shadow-sm text-sm text-center">
                  No appointments found
                </div>
              ) : (
                appointments.map((appointment) => (
                  <div key={appointment._id} className="p-4 border rounded-lg shadow-sm text-sm">
                    <div className="flex items-center mb-2">
                      <img
                        src={appointment.doctor?.profileImage || Surggy}
                        className="w-8 h-8 rounded-full mr-2"
                        alt="doctor"
                      />
                      <span className="font-semibold">Dr. {appointment.doctor?.firstName} {appointment.doctor?.lastName}</span>
                    </div>
                    <p className="py-3">
                      <strong>Date:</strong> {formatDate(appointment.appointmentDate)}{" "}
                      <span className="text-[#46B8E3] px-4">{formatTime(appointment.appointmentTime)}</span>
                    </p>
                    <p className="py-3">
                      <strong>Specialization:</strong> {appointment.doctor?.specialization || 'General'}
                    </p>
                    <p className="py-3">
                      <strong>Type:</strong> {appointment.consultationType || 'In-person'}
                    </p>
                    <p className="py-3">
                      <strong>Paid Amount:</strong> ${appointment.consultationFee}
                    </p>
                    <div className="flex mt-3 space-x-2">
                      <Link
                        to={`/patientviewappointment?id=${appointment._id}`}
                        className="flex items-center gap-1 px-3 py-1 text-[12px] bg-[#46B8E333] rounded"
                      >
                        <EyeIcon className="h-4 w-4" /> View
                      </Link>
                      {appointment.status !== 'CANCELLED' && appointment.status !== 'COMPLETED' && (
                        <button
                          onClick={() => handleCancelAppointment(appointment._id)}
                          className="flex items-center gap-1 px-3 py-1 text-[12px] text-[#C52184] bg-[#C521844D] rounded"
                        >
                          <XMarkIcon className="h-4 w-4" /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PatientAppointments;
