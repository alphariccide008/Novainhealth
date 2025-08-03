import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../public/Vector.png';
import Doctorsignup from '../../assets/images/doctor.png';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const DoctorEmailSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    confirmPassword: '',
    roleKey: 'doctor'
  });
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      const { confirmPassword, ...signupData } = formData;
      await signup(signupData);
      toast.success('Doctor account created successfully! Please check your email for verification.');

      // Redirect to email verification page after 2 seconds
      setTimeout(() => {
        navigate('/verify-email', { state: { email: formData.email } });
      }, 2000);
    } catch (error) {
      toast.error(error.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="relative mx-[5%] md:mx-[3%] lg:mx-[5%] py-[15%]">
        <div className="md:flex shadow-md rounded">
          <div className="md:w-1/2">
            <img src={Doctorsignup} alt="" className='md:h-full lg:h-full' />
          </div>
          <div className="md:w-1/2 border md:border-[#46B8E3] lg:border-[#46B8E3]">
            <div className="flex text-[14px] text-[#46B8E3] p-[5%]">
              <Link to="/doctorsignup" className='flex'>
                <ChevronLeftIcon className='text-[#46B8E3] font-bold h-[20px] w-[20px] mr-2'/> Back
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="px-[3%] lg:px-[20%] bg-white text-center space-y-4">
              <img src={Logo} alt="Logo" className="mx-auto mt-[10%] h-[70px] lg:h-[100px]" />
              <div className="flex justify-between pt-10 w-full">
                <h1 className="font-semibold text-[12px]">Doctor Registration</h1>
                <Link to="/patientsignup" className=" text-[12px] text-[#46B8E3]">Not a Doctor ?</Link >
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                  required
                />

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

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-300 rounded focus:border-[#46B8E3] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#46B8E3] text-white py-3 rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Sign up'}
              </button>

              <div className="flex text-center items-start py-3 space-x-2 md:text-left text-sm">
                <label className='text-[8px] text-center md:text-[8px] lg:text-[8px]'>
                  When you select languages, Patients that understand same language can be paired with you
                </label>
              </div>

              <p className="text-xs text-[16px] px-5 leading-[150%] py-10 md:py-10 lg:py-10 text-gray-500">
                By signing up, you agree to our <a href="#" className="text-[#46B8E3]">Terms of service</a> and <a href="#" className="text-[#46B8E3]">Privacy Policy</a> including content to security share your information with medical professionals for consultation purposes.
              </p>

              <hr className="my-4" />

              <p className="text-sm pb-[15%]">
                Already have an account? <Link to="/doctorlogin" className="text-[#46B8E3] hover:underline">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorEmailSignup;