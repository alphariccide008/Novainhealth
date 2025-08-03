import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/images/docgoogle.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Union from "../assets/images/Union.png";
import PatientEmerg from "../assets/images/patientemerg.png";
import Home from "../assets/images/homelogo.png";
import { CalendarDaysIcon, ShareIcon } from "@heroicons/react/20/solid";
import { FaUserDoctor } from "react-icons/fa6";
import {
  HomeIcon,
  PlusIcon,
  DocumentTextIcon,
  LockClosedIcon,
  StarIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
  ArrowUpOnSquareStackIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { FaUserCircle } from "react-icons/fa";

const PatientSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add resize listener for responsiveness
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // On mobile, we might want to keep it collapsed by default
      if (window.innerWidth >= 768) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        className={`bg-white rounded h-[80%] transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-48"
        }`}
      >
        {/* Hamburger menu toggle */}
        <div
          className="px-8 text-[#757575] py-3 cursor-pointer"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>

        {/* Home logo */}
        <div className=" px-2 text-[#757575]  py-3 flex items-center">
          <Link to="#" className="text-18px flex items-center">
            <img src={Home} alt="" />
          </Link>
        </div>

        {/* Sidebar items */}
        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <HomeIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <CalendarDaysIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Appointments</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <FaUserDoctor className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Doctors</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <img src={PatientEmerg} alt="Emergency" className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Emergency</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <img src={Union} alt="Union" className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Health Records</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <ChatBubbleLeftRightIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Messages</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <FaUserCircle className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Profile</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <ShareIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Share</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <LockClosedIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Security</span>}
          </Link>
        </div>

        <div className="px-8 text-[#757575] py-3 flex items-center">
          <Link to="#" className="flex items-center">
            <ArrowRightOnRectangleIcon className="h-6 w-6 mr-5" />
            {!isCollapsed && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PatientSidebar;
