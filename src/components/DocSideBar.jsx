import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/images/default.webp";

import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  LockClosedIcon,
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpOnSquareStackIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { FaUserCircle } from "react-icons/fa";

const DocSideBar = () => {
  const user = JSON.parse(localStorage.getItem("userData")) || {};
  const [transactionsOpen, setTransactionsOpen] = useState(false);

  return (
    <div className="bg-white md:block hidden rounded w-1/3 h-[80%] overflow-y-auto">
      <div className="pt-[20%] pb-6 flex justify-center">
        <img
          src={user?.profileImage ? user.profileImage : Profile}
          alt="Doctor"
          className="rounded-full mr-5 h-[135px] w-[135px] object-cover"
        />
      </div>

      <div className="text-center mb-10">
        <h1 className="text-[18px] font-semibold">
          {user.firstName ? `Dr. ${user.firstName} ${user.lastName || ''}` : 'Dr. Profile'}
        </h1>
        <h1 className="pt-2 text-[14px]">
          {user.qualification || 'BDS, MDS - Oral & Maxillofacial Surgery'}
        </h1>
      </div>

      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <HomeIcon className="h-6 w-6 mr-5" />
        <Link to="/doctordashboard" className="text-18px">Dashboard</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <CalendarIcon className="h-6 w-6 mr-5" />
        <Link to="/" className="text-18px">Appointments</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <UserIcon className="h-6 w-6 mr-5" />
        <Link to="/doctorpatient" className="text-18px">My Patients</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <BellIcon className="h-6 w-6 mr-5" />
        <Link to="/doctorschedule" className="text-18px">Schedule Timings</Link>
      </div>
      <hr />

      {/* 🔽 Transactions Dropdown */}
      <div>
        <button
          onClick={() => setTransactionsOpen(!transactionsOpen)}
          className="flex items-center px-8 w-full text-[#757575] py-3 hover:bg-gray-100 transition"
        >
          <DocumentTextIcon className="h-6 w-6 mr-5" />
          <span className="text-18px flex-1 text-left">Transactions</span>
          {transactionsOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>

        {transactionsOpen && (
          <div className="pl-20 py-1 space-y-2 text-[14px] text-[#757575]">
            <Link to="/consultationPayments" className="block hover:text-[#003366]">
              Consultation
            </Link>
            <Link to="/doctorpayout" className="block hover:text-[#003366]">
              Payout
            </Link>
            <Link to="/labPayments" className="block hover:text-[#003366]">
              Lab Tests
            </Link>
          </div>
        )}
      </div>

      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <StarIcon className="h-6 w-6 mr-5" />
        <Link to="/doctorreviews" className="text-18px">Reviews</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <ChatBubbleLeftRightIcon className="h-6 w-6 mr-5" />
        <Link to="#" className="text-18px">Messages</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <FaUserCircle className="h-6 w-6 mr-5" />
        <Link to="/doctorbio" className="text-18px">Profile Settings</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <ArrowUpOnSquareStackIcon className="h-6 w-6 mr-5" />
        <Link to="/socialmedia" className="text-18px">Social Media</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <LockClosedIcon className="h-6 w-6 mr-5" />
        <Link to="/Changepassword" className="text-18px">Change Password</Link>
      </div>
      <hr />
      <div className="flex px-8 w-full text-[#757575] py-3">
        <ArrowRightOnRectangleIcon className="h-6 w-6 mr-5" />
        <Link to="#" className="text-18px">Logout</Link>
      </div>
    </div>
  );
};

export default DocSideBar;
