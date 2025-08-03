
import { useState } from 'react';
import toast from 'react-hot-toast';
import { authAPI } from '../services/api';
import { doctorAPI } from '../services/doctorApi';
import { patientAPI } from '../services/patientApi';
import { walletAPI } from '../services/walletApi';
import { appointmentAPI } from '../services/appointmentApi';
import { chatAPI } from '../services/chatApi';
import { notificationAPI } from '../services/notificationApi';
import { ratingAPI } from '../services/ratingApi';
import { languageAPI } from '../services/languageApi';
import { adminAPI } from '../services/adminApi';
import { oauthAPI } from '../services/oauthApi';

export const useApiIntegration = () => {
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiFunction, successMessage, errorMessage) => {
    setLoading(true);
    try {
      const result = await apiFunction();
      if (successMessage) {
        toast.success(successMessage);
      }
      return result;
    } catch (error) {
      toast.error(errorMessage || error.message || 'An error occurred');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Auth functions
  const signup = (userData) => handleApiCall(
    () => authAPI.signup(userData),
    'Account created successfully! Please verify your email.',
    'Failed to create account'
  );

  const login = (credentials) => handleApiCall(
    () => authAPI.login(credentials),
    'Login successful!',
    'Login failed'
  );

  const verifyEmail = (data) => handleApiCall(
    () => authAPI.verifyEmail(data),
    'Email verified successfully!',
    'Email verification failed'
  );

  const triggerVerifyEmail = (email) => handleApiCall(
    () => authAPI.triggerVerifyEmail(email),
    'Verification email sent!',
    'Failed to send verification email'
  );

  const forgetPassword = (email) => handleApiCall(
    () => authAPI.forgetPassword(email),
    'Password reset email sent!',
    'Failed to send password reset email'
  );

  const resetPassword = (data) => handleApiCall(
    () => authAPI.resetPassword(data),
    'Password reset successfully!',
    'Failed to reset password'
  );

  const triggerVerifySms = (phone) => handleApiCall(
    () => authAPI.triggerVerifySms(phone),
    'SMS verification code sent!',
    'Failed to send SMS verification'
  );

  const verifySms = (data) => handleApiCall(
    () => authAPI.verifySms(data),
    'Phone number verified successfully!',
    'SMS verification failed'
  );

  // Doctor functions
  const updateDoctorProfile = (data) => handleApiCall(
    () => doctorAPI.updateProfile(data),
    'Profile updated successfully!',
    'Failed to update profile'
  );

  const updateConsultationFees = (fees) => handleApiCall(
    () => doctorAPI.updateConsultationFees(fees),
    'Consultation fees updated!',
    'Failed to update consultation fees'
  );

  const getMyPatients = (params) => handleApiCall(
    () => doctorAPI.getMyPatients(params),
    null,
    'Failed to fetch patients'
  );

  const getDoctorTransactions = () => handleApiCall(
    () => doctorAPI.getTransactions(),
    null,
    'Failed to fetch transactions'
  );

  const getDoctorAppointments = (params) => handleApiCall(
    () => doctorAPI.getAppointments(params),
    null,
    'Failed to fetch appointments'
  );

  const setDoctorAvailability = (data) => handleApiCall(
    () => doctorAPI.setAvailability(data),
    'Availability updated successfully!',
    'Failed to update availability'
  );

  const addAvailabilitySlot = (data) => handleApiCall(
    () => doctorAPI.addAvailabilitySlot(data),
    'Availability slot added!',
    'Failed to add availability slot'
  );

  const deleteAvailabilitySlot = (slotId) => handleApiCall(
    () => doctorAPI.deleteAvailabilitySlot(slotId),
    'Availability slot deleted!',
    'Failed to delete availability slot'
  );

  // Patient functions
  const updatePatientProfile = (data) => handleApiCall(
    () => patientAPI.updateProfile(data),
    'Profile updated successfully!',
    'Failed to update profile'
  );

  const createAppointment = (data) => handleApiCall(
    () => patientAPI.createAppointment(data),
    'Appointment created successfully!',
    'Failed to create appointment'
  );

  const getPatientAppointments = (params) => handleApiCall(
    () => patientAPI.getAppointments(params),
    null,
    'Failed to fetch appointments'
  );

  const initiatePayment = (appointmentId) => handleApiCall(
    () => patientAPI.initiatePayment(appointmentId),
    'Payment initiated!',
    'Failed to initiate payment'
  );

  const confirmPayment = (reference) => handleApiCall(
    () => patientAPI.confirmPayment(reference),
    'Payment confirmed successfully!',
    'Failed to confirm payment'
  );

  const confirmAppointment = (appointmentId) => handleApiCall(
    () => patientAPI.confirmAppointment(appointmentId),
    'Appointment confirmed!',
    'Failed to confirm appointment'
  );

  const verifyPatientAttendance = (appointmentId, otp) => handleApiCall(
    () => patientAPI.verifyAttendance(appointmentId, otp),
    'Attendance verified!',
    'Failed to verify attendance'
  );

  const createRating = (data) => handleApiCall(
    () => patientAPI.createRating(data),
    'Rating submitted successfully!',
    'Failed to submit rating'
  );

  // Wallet functions
  const getWalletBalance = () => handleApiCall(
    () => walletAPI.getBalance(),
    null,
    'Failed to fetch wallet balance'
  );

  const getWalletTransactions = (params) => handleApiCall(
    () => walletAPI.getTransactions(params),
    null,
    'Failed to fetch wallet transactions'
  );

  const initializeWalletTopUp = (data) => handleApiCall(
    () => walletAPI.initializeTopUp(data),
    'Top-up initialized!',
    'Failed to initialize top-up'
  );

  const verifyWalletTopUp = (reference) => handleApiCall(
    () => walletAPI.verifyTopUp(reference),
    'Top-up completed successfully!',
    'Failed to verify top-up'
  );

  // Chat functions
  const createChatWithDoctor = (doctorId) => handleApiCall(
    () => chatAPI.createChat(doctorId),
    'Chat created successfully!',
    'Failed to create chat'
  );

  const getAllChats = () => handleApiCall(
    () => chatAPI.getAllChats(),
    null,
    'Failed to fetch chats'
  );

  const getChatMessages = (chatId, params) => handleApiCall(
    () => chatAPI.getChatMessages(chatId, params),
    null,
    'Failed to fetch messages'
  );

  // Notification functions
  const getNotifications = (params) => handleApiCall(
    () => notificationAPI.getNotifications(params),
    null,
    'Failed to fetch notifications'
  );

  const markNotificationAsRead = (id) => handleApiCall(
    () => notificationAPI.markAsRead(id),
    'Notification marked as read',
    'Failed to mark notification as read'
  );

  const markAllNotificationsAsRead = () => handleApiCall(
    () => notificationAPI.markAllAsRead(),
    'All notifications marked as read',
    'Failed to mark notifications as read'
  );

  // Admin functions
  const getAdminDashboard = () => handleApiCall(
    () => adminAPI.getDashboard(),
    null,
    'Failed to fetch dashboard data'
  );

  const getAllDoctors = (params) => handleApiCall(
    () => adminAPI.getAllDoctors(params),
    null,
    'Failed to fetch doctors'
  );

  const getAllPatients = (params) => handleApiCall(
    () => adminAPI.getAllPatients(params),
    null,
    'Failed to fetch patients'
  );

  const verifyDoctor = (id) => handleApiCall(
    () => adminAPI.verifyDoctor(id),
    'Doctor verified successfully!',
    'Failed to verify doctor'
  );

  // Language functions
  const getLanguages = (params) => handleApiCall(
    () => languageAPI.getLanguages(params),
    null,
    'Failed to fetch languages'
  );

  // OAuth functions
  const googleSignup = (userData) => handleApiCall(
    () => oauthAPI.googleSignup(userData),
    'Google signup successful!',
    'Google signup failed'
  );

  const googleLogin = (credentials) => handleApiCall(
    () => oauthAPI.googleLogin(credentials),
    'Google login successful!',
    'Google login failed'
  );

  const appleSignup = (userData) => handleApiCall(
    () => oauthAPI.appleSignup(userData),
    'Apple signup successful!',
    'Apple signup failed'
  );

  const appleLogin = (credentials) => handleApiCall(
    () => oauthAPI.appleLogin(credentials),
    'Apple login successful!',
    'Apple login failed'
  );

  const getGoogleAuthUrl = (role) => handleApiCall(
    () => oauthAPI.getGoogleAuthUrl(role),
    null,
    'Failed to get Google auth URL'
  );

  const getAppleAuthUrl = (role) => handleApiCall(
    () => oauthAPI.getAppleAuthUrl(role),
    null,
    'Failed to get Apple auth URL'
  );

  return {
    loading,
    // Auth
    signup,
    login,
    verifyEmail,
    triggerVerifyEmail,
    forgetPassword,
    resetPassword,
    triggerVerifySms,
    verifySms,
    // Doctor
    updateDoctorProfile,
    updateConsultationFees,
    getMyPatients,
    getDoctorTransactions,
    getDoctorAppointments,
    setDoctorAvailability,
    addAvailabilitySlot,
    deleteAvailabilitySlot,
    // Patient
    updatePatientProfile,
    createAppointment,
    getPatientAppointments,
    initiatePayment,
    confirmPayment,
    confirmAppointment,
    verifyPatientAttendance,
    createRating,
    // Wallet
    getWalletBalance,
    getWalletTransactions,
    initializeWalletTopUp,
    verifyWalletTopUp,
    // Chat
    createChatWithDoctor,
    getAllChats,
    getChatMessages,
    // Notifications
    getNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    // Admin
    getAdminDashboard,
    getAllDoctors,
    getAllPatients,
    verifyDoctor,
    // Language
    getLanguages,
    // OAuth
    googleSignup,
    googleLogin,
    appleSignup,
    appleLogin,
    getGoogleAuthUrl,
    getAppleAuthUrl,
  };
};
