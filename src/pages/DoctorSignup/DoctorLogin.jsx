import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Doctorsignup from '../../assets/images/doctorlog.jpg';
import GoogleLog from '../../assets/images/docgoogle.png';
import { FcGoogle } from "react-icons/fc";
import Logo from '../../../public/Vector.png';

const PatientLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://novain-health-api-u33pl.ondigitalocean.app/auth/login', formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
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
              <img src={Doctorsignup} alt="" className='md:h-full lg:h-full' />
            </div>
            <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
              <form onSubmit={handleSubmit} className="px-[3%] lg:px-[10%] bg-white text-center space-y-4">
                <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
                <div className="pt-10 w-full">
                  <h1 className="font-semibold text-[24px]">Login</h1>
                  <h1 className='py-10 text-[16px]'>Hello Doc, welcome back!</h1>
                </div>

                <div className="flex items-center justify-center h-full w-full">
                  <div className="relative">
                    <div className="rounded-full h-[100px] w-[100px] bg-cover bg-center" style={{ backgroundImage: `url(${GoogleLog})` }}></div>
                    <div className="absolute top-[70%] left-[80%]">
                      <FcGoogle className="h-[20px] w-[20px] bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className='pb-3'>
                  <h1 className='text-[16px]'>susanmandible@gmail.com</h1>
                </div>

                <div className="border border-gray-300 rounded p-2 cursor-pointer bg-white ">
                  <Link to="/patientemail" className="text-[14px] flex items-center justify-center text-gray-700 text-center">
                    <div>
                      <img src={GoogleLog} alt="Logo" className="rounded-full mr-5 h-[30px] w-[30px] object-cover" />
                    </div>
                    <div className='text-start'>
                      <p>Continue as Tosin Chukwuka</p>
                      <p className='text-[10px]'>tosinchukwuka@gmail.com</p>
                    </div>
                    <div>
                      <FcGoogle className="h-[30px] w-[30px] ml-10" />
                    </div>
                  </Link>
                </div>

                <div className='my-4 md:text-[14px] text-[#757575]'>
                  <h1>OR</h1>
                </div>

                <div className="border border-gray-300 rounded p-3 md:p-5 cursor-pointer bg-white ">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="md:text-[14px] w-full text-gray-700 text-[10px]"
                    placeholder="Email Address"
                  />
                </div>

                <div className="border border-gray-300 rounded md:p-5 p-3 cursor-pointer bg-white ">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="md:text-[14px] w-full text-gray-700 text-[10px]"
                    placeholder="Input Password"
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex justify-center items-center">
                  <button type="submit" disabled={loading} className="text-white rounded py-3 w-[60%] bg-[#46B8E3] text-[12px]">
                    {loading ? 'Logging in...' : 'Log In'}
                  </button>
                </div>

                <div className="text-center pt-10 pb-16 space-x-2 text-sm">
                  Not you? <Link to="/doctorsignup" className='text-[#46B8E3]'>Use another account</Link>
                </div>

                <hr className="my-4" />

                <p className="text-sm pb-[15%]">
                  Don't have an account? <Link to="/doctorsignup" className="text-[#46B8E3] hover:underline">Sign Up</Link>
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

export default PatientLogin;
