
import { authAPI, profileAPI, walletAPI, appointmentsAPI, chatAPI, notificationsAPI, ratingAPI, languageAPI, adminAPI } from '../services/api';
import { oauthAPI } from '../services/oauthApi';

export const API_ENDPOINTS_COVERAGE = {
  auth: {
    signup: authAPI.signup,
    login: authAPI.login,
    verifyEmail: authAPI.verifyEmail,
    triggerVerifyEmail: authAPI.triggerVerifyEmail,
    forgetPassword: authAPI.forgetPassword,
    forgotPasswordReset: authAPI.forgotPasswordReset,
    resetPassword: authAPI.resetPassword,
    triggerVerifySms: authAPI.triggerVerifySms,
    verifySms: authAPI.verifySms,
    testPaystackConnection: authAPI.testPaystackConnection,
    paystackWebhook: authAPI.paystackWebhook,
    expireUnpaidAppointments: authAPI.expireUnpaidAppointments,
  },
  oauth: {
    googleSignup: oauthAPI.googleSignup,
    googleLogin: oauthAPI.googleLogin,
    appleSignup: oauthAPI.appleSignup,
    appleLogin: oauthAPI.appleLogin,
  },
  profile: {
    updatePatientProfile: profileAPI.updatePatientProfile,
    updateDoctorProfile: profileAPI.updateDoctorProfile,
    updateConsultationFees: profileAPI.updateConsultationFees,
    getMyPatients: profileAPI.getMyPatients,
    getDoctorTransactions: profileAPI.getDoctorTransactions,
  },
  wallet: {
    getBalance: walletAPI.getBalance,
    getTransactions: walletAPI.getTransactions,
    initializeTopUp: walletAPI.initializeTopUp,
    verifyTopUp: walletAPI.verifyTopUp,
    payService: walletAPI.payService,
    requestPayout: walletAPI.requestPayout,
    verifyPayout: walletAPI.verifyPayout,
    getBanks: walletAPI.getBanks,
  },
  appointments: {
    createAppointment: appointmentsAPI.createAppointment,
    getDoctorAppointments: appointmentsAPI.getDoctorAppointments,
    getPatientAppointments: appointmentsAPI.getPatientAppointments,
    getTodaysAppointments: appointmentsAPI.getTodaysAppointments,
    updateAppointmentStatus: appointmentsAPI.updateAppointmentStatus,
    setAvailability: appointmentsAPI.setAvailability,
    addAvailabilitySlot: appointmentsAPI.addAvailabilitySlot,
    deleteAvailabilitySlot: appointmentsAPI.deleteAvailabilitySlot,
    initiatePayment: appointmentsAPI.initiatePayment,
    confirmPayment: appointmentsAPI.confirmPayment,
    confirmAppointment: appointmentsAPI.confirmAppointment,
    verifyPatientAttendance: appointmentsAPI.verifyPatientAttendance,
    verifyDoctorAttendance: appointmentsAPI.verifyDoctorAttendance,
    getDoctorAvailability: appointmentsAPI.getDoctorAvailability,
    updateAvailabilitySlot: appointmentsAPI.updateAvailabilitySlot,
  },
  chat: {
    createChat: chatAPI.createChat,
    getAllChats: chatAPI.getAllChats,
    getChatMessages: chatAPI.getChatMessages,
    getChatParticipants: chatAPI.getChatParticipants,
  },
  notifications: {
    getPreferences: notificationsAPI.getPreferences,
    updatePreferences: notificationsAPI.updatePreferences,
    getNotifications: notificationsAPI.getNotifications,
    getUnreadCount: notificationsAPI.getUnreadCount,
    markAsRead: notificationsAPI.markAsRead,
    markAllAsRead: notificationsAPI.markAllAsRead,
  },
  rating: {
    createRating: ratingAPI.createRating,
    getRatings: ratingAPI.getRatings,
  },
  language: {
    getLanguages: languageAPI.getLanguages,
    getLanguageById: languageAPI.getLanguageById,
  },
  admin: {
    getDashboard: adminAPI.getDashboard,
    createAdmin: adminAPI.createAdmin,
    getTransactions: adminAPI.getTransactions,
    getAllDoctors: adminAPI.getAllDoctors,
    getAllPatients: adminAPI.getAllPatients,
    getAllAppointments: adminAPI.getAllAppointments,
    verifyDoctor: adminAPI.verifyDoctor,
  },
};

export const checkApiCoverage = () => {
  console.log('API Endpoints Coverage:', API_ENDPOINTS_COVERAGE);
  return API_ENDPOINTS_COVERAGE;
};
