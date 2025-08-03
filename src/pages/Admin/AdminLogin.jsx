
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Doctorsignup from '../../assets/images/adminsign.png';
import GoogleLog from '../../assets/images/admingoogle.png';
import { FcGoogle } from "react-icons/fc";
import Logo from '../../../public/Vector.png';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await login(formData);
      
      // Redirect based on user role
      if (response.user.role === 'admin') {
        toast.success('Admin login successful!');
        navigate('/admindashboard');
      } else {
        toast.error('Invalid admin credentials');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative mx-[5%] md:mx-[3%] lg:mx-[5%] py-[25%] md:py-[15%]">
        <div className="md:flex shadow-md rounded">
          <div className="md:w-1/2">
            <img src={Doctorsignup} alt="" className='md:h-full lg:h-full' />
          </div>
          <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
            <form onSubmit={handleSubmit} className="px-[3%] lg:px-[10%] bg-white text-center space-y-4">
              <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
              <div className="pt-10 w-full">
                <h1 className="font-semibold text-[24px]">Admin Login</h1>
                <h1 className='py-10 text-[16px]'>Hello Admin, welcome back!</h1>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Admin Email Address"
                  className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                  required
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Admin Password"
                  className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#46B8E3] text-white py-3 rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Admin Login'}
              </button>

              <div className="text-center pt-10 pb-16 space-x-2 text-sm">
                <Link to="/forgot-password" className='text-[#46B8E3]'>Forgot Password?</Link>
              </div>

              <hr className="my-4" />

              <p className="text-sm pb-[15%]">
                Need admin access? <Link to="/adminsignup" className="text-[#46B8E3] hover:underline">Contact Support</Link>
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
  );
};

export default AdminLogin;
