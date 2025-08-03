import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Doctorsignup from "../../assets/images/doctorlog.jpg";
import GoogleLog from "../../assets/images/docgoogle.png";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../public/Vector.png";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const { user } = await login(formData); // destructuring response

      console.log(user);

      if (user.role === "6820036ab9fb10da38e439d0") {
        toast.success(`Welcome back, Dr. ${user.firstName}`);
        navigate("/doctordashboard");
      } else {
        toast.error("Invalid doctor credentials");
      }
    } catch (error) {
      toast.error(error?.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="relative mx-[5%] md:mx-[3%] lg:mx-[5%] py-[15%]">
          <div className="md:flex shadow-md rounded">
            <div className="md:w-1/2">
              <img src={Doctorsignup} alt="" className="md:h-full lg:h-full" />
            </div>
            <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
              <form
                onSubmit={handleSubmit}
                className="px-[3%] lg:px-[10%] bg-white text-center space-y-4"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="mx-auto mt-[10%] h-[70px] lg:h-[100px]"
                />
                <div className="pt-10 w-full">
                  <h1 className="font-semibold text-[24px]">Login</h1>
                  <h1 className="py-10 text-[16px]">
                    Hello Doc, welcome back!
                  </h1>
                </div>

                <div className="flex items-center justify-center h-full w-full">
                  <div className="relative">
                    <div
                      className="rounded-full h-[100px] w-[100px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${GoogleLog})` }}
                    ></div>
                    <div className="absolute top-[70%] left-[80%]">
                      <FcGoogle className="h-[20px] w-[20px] bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  <h1 className="text-[16px]">susanmandible@gmail.com</h1>
                </div>

                <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                  <Link
                    to="/patientemail"
                    className="text-[14px] flex items-center justify-center text-gray-700 text-center"
                  >
                    <div>
                      <img
                        src={GoogleLog}
                        alt="Logo"
                        className="rounded-full mr-5 h-[30px] w-[30px] object-cover"
                      />
                    </div>
                    <div className="text-start">
                      <p>Continue as Tosin Chukwuka</p>
                      <p className="text-[10px]">tosinchukwuka@gmail.com</p>
                    </div>
                    <div>
                      <FcGoogle className="h-[30px] w-[30px] ml-10" />
                    </div>
                  </Link>
                </div>

                <div className="my-4 md:text-[14px] text-[#757575]">
                  <h1>OR</h1>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                    required
                  />
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white rounded py-3 w-[60%] bg-[#46B8E3] text-[12px]"
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>

                <div className="text-center pt-10 pb-16 space-x-2 text-sm">
                  Not you?{" "}
                  <Link to="/doctorsignup" className="text-[#46B8E3]">
                    Use another account
                  </Link>
                </div>

                <hr className="my-4" />

                <p className="text-sm pb-[15%]">
                  Don't have an account?{" "}
                  <Link
                    to="/doctorsignup"
                    className="text-[#46B8E3] hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>

                <div className="flex md:text-center pb-10 space-x-10 text-[#46B8E3] text-[12px]">
                  <a href="">Terms and Conditions</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Cookies setting</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorLogin;
