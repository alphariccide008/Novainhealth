import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { navLinks } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/Vector.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Profile from "../assets/images/default.webp"


const NavBar = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

    const handleLogout = () => {
      logout(); // your existing logout logic
      setIsMobileMenuOpen(false);
      setIsProfileDropdownOpen(false);
    
      toast.error('Logged out successfully'); // show toast
      setTimeout(() => {
        navigate('/genlogin'); // redirect after toast
      }, 1000); // wait 1 second so toast is visible
    };
    

  // Close profile dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-menu")) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="w-full lg:px-16 lg:py-5"
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "#fff",
        height: "100px",
        zIndex: 1000,
      }}
    >
      <nav className="flex justify-between max-container px-4 md:px-6 items-center">
        <Link to="/" className="text-[30px] my-3">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="flex flex-1 text-[14px] gap-16 justify-center max-xl:hidden">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink to={path} className="text-[14px] pt-10">
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/patientsignup"
              className="flex items-center text-[14px] py-2 px-12 text-white bg-[#C52184] rounded-full hover:bg-[#003366] hover:text-white"
            >
              Emergency
            </Link>
          </li>
        </ul>

        {/* Right section */}
        <div className="flex gap-10 max-xl:hidden text-sm">
          {isAuthenticated ? (
            <div className="relative flex items-center gap-4 user-menu">
              {/* Notification Icon */}
              <button className="relative">
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <svg
                  className="w-6 h-6 text-[#003366]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                    6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 
                    6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 
                    1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* Profile Image */}
              <div className="relative user-menu">
                <img
                  src={user?.profileImage || Profile}
                  alt="User"
                  onClick={handleProfileDropdown}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-[#003366]"
                />

                {/* Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50 text-sm">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold text-gray-700">
                      {user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : "User"}
                      </p>
                      <p className="text-gray-500">
                        {user?.email || "email@example.com"}
                      </p>
                    </div>
                    <ul>
                      <li>
                        <Link
                          to="/notifications"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Notifications
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link
              to="/genlogin"
              className="flex items-center py-3 px-12 text-white bg-[#46B8E3] rounded-lg uppercase hover:bg-[#003366] hover:text-white"
            >
              LOGIN/SIGNUP
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="max-xl:block xl:hidden px-2" onClick={handleMenuToggle}>
          {isMobileMenuOpen ? (
            <IoMdClose className="text-[30px] text-[#003366] cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-[30px] text-[#003366] cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 max-xl:flex flex-col items-start px-5">
            <ul className="w-full">
              {navLinks.map(({ name, path }, index) => (
                <li key={index} className="w-full py-2">
                  <NavLink
                    to={path}
                    className="block w-full p-2 text-sm hover:bg-gray-200"
                    onClick={handleMenuToggle}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 w-full mb-5">
              {isAuthenticated ? (
                <>
                  <span className="text-sm px-2">Hi, {user?.firstName}</span>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg uppercase"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/genlogin"
                  className="w-full flex items-center py-3 px-4 text-white bg-[#46B8E3] rounded-lg uppercase hover:bg-[#003366] hover:text-white text-center"
                >
                  LOGIN/SIGNUP
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
