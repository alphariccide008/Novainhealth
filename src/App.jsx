import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PatientSignup from "./pages/PatientSignup/PatientSignup";
import PatientEmail from "./pages/PatientSignup/PatientEmailSignup";
import PatientLogin from "./pages/PatientSignup/PatientLogin";
import DoctorSignup from "./pages/DoctorSignup/DoctorSignup";
import DoctorEmail from "./pages/DoctorSignup/DoctorEmailSignup";
import DoctorLogin from "./pages/DoctorSignup/DoctorLogin";
import AppleLogin from "./pages/DoctorSignup/AppleLogin";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminEmail from "./pages/Admin/AdminEmailSignup";
import AdminSignup from "./pages/Admin/AdminSignup";
import GenLogin from "./pages/home/GenLogin";
import DoctorPatients from "./pages/DoctorSignup/DoctorPatients";
import {  Home } from "./pages";
import PatientDashboard from "./pages/Dashboard/PatientDashboard";
import DoctorSchedule from "./pages/DoctorSignup/DoctorSchedule";
import ConsultationPayments from "./pages/DoctorSignup/ConsultationPayments";
import ChangePassword from "./pages/DoctorSignup/ChangePassword";
import SocialMedia from "./pages/DoctorSignup/SocialMedia";
import DoctorReviews from "./pages/DoctorSignup/DoctorReviews";
import DoctorBio from "./pages/DoctorSignup/DoctorBio";
import DoctorDashboard from "./pages/DoctorSignup/DoctorDashboard";
import AppointmentSuccess from "./components/AppointmentSuccess";
import AppointmentCancel from "./components/AppointmentCancel";
import AppointmentFeedback from "./components/AppointmentFeedback";
import AppointmentConfirm from "./components/AppointmentConfirm";
import ViewAppointment from "./components/ViewAppointment";
import DoctorPayout from "./pages/DoctorSignup/DoctorPayout";
import PatientDashboards from "./pages/PatientSignup/PatientDashboard";
import PatientCheckout from "./pages/PatientSignup/PetientCheckout";
import PatientBookings from "./pages/PatientSignup/PatientBookings";
import RequestAppointments from "./pages/PatientSignup/RequestAppointment";
import PatientMedia from "./pages/PatientSignup/SocialMedia";
import PatientReset from "./pages/PatientSignup/ResetPassword";
import PatientAppointments from "./pages/PatientSignup/PatientAppointemnts";
import ProfileSetting from  "./pages/PatientSignup/ProfileSetting";
import PatientViewAppointment from "./pages/PatientSignup/PatientViewAppointment";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAppointment from "./pages/Admin/AdminAppointment";
import AdminDoctorList from "./pages/Admin/AdminDoctorList";
import AdminSpecialty from "./pages/Admin/AdminSpecalty";
import AdminPatientList from "./pages/Admin/AdminPatientList";
import AdminInvoiceList from "./pages/Admin/AdminInvoiceList";
import AdminReview from "./pages/Admin/AdminReview";





export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
     
      <Routes>
        <Route index element={<Home />} />
       
        {/* Apple login route */}
        <Route path="apple" element={<AppleLogin/>}/>
        {/* doctors route */}
        <Route path="doctorsignup" element={<DoctorSignup/>}/>
        <Route path="doctoremail" element={<DoctorEmail/>}/>
        <Route path="doctorlogin" element={<DoctorLogin/>}/>
        <Route path="doctorpatient" element={<DoctorPatients/>}/>
        <Route path="doctorschedule" element={<DoctorSchedule/>}/>
        <Route path="consultationPayments" element={<ConsultationPayments/>}/>
        <Route path="Changepassword" element={<ChangePassword/>}/>
        <Route path="socialmedia" element={<SocialMedia/>}/>
        <Route path="doctorreviews" element={<DoctorReviews/>}/>
        <Route path="doctorbio" element={<DoctorBio/>}/>
        <Route path="doctordashboard" element={<DoctorDashboard/>}/>
        <Route path="doctorpayout" element={<DoctorPayout/>}/>




        {/* Patient routes */}
        <Route path="patientdashboard" element={<PatientDashboards/>}/>
        <Route path="patientcheckout" element={<PatientCheckout/>}/>
        <Route path="patientbookings" element={<PatientBookings/>}/>
        <Route path="requestappointment" element={<RequestAppointments/>}/>
        <Route path="patientmedia" element={<PatientMedia/>}/>
        <Route path="passswordreset" element={<PatientReset/>}/>
        <Route path="patientappointment" element={<PatientAppointments/>}/>
        <Route path="profilesetting" element={<ProfileSetting/>}/>
        <Route path="patientviewappointment" element={<PatientViewAppointment/>}/>
        <Route path="patientsignup" element={<PatientSignup/>}/>
        <Route path="patientemail" element={<PatientEmail/>}/>
        <Route path="patientlogin" element={<PatientLogin/>}/>
       


        






        {/* Popup links Success/cancel */}
        <Route path="success" element={<AppointmentSuccess/>}/>
        <Route path="cancel" element={<AppointmentCancel/>}/>
        <Route path="feedback" element={<AppointmentFeedback/>}/>
        <Route path="confirm" element={<AppointmentConfirm/>}/>
        <Route path="viewappointment" element={<ViewAppointment/>}/>





        {/* Admin routes */}
        <Route path="adminlogin" element={<AdminLogin/>}/>
        <Route path="adminemail" element={<AdminEmail/>}/>
        <Route path="adminsignup" element={<AdminSignup/>}/>
        <Route path="admindashboard" element={<AdminDashboard/>}/>
        <Route path="adminappointment" element={<AdminAppointment/>}/>
        <Route path="admindoctorlist" element={<AdminDoctorList/>}/>
        <Route path="adminspecialty" element={<AdminSpecialty/>}/>
        <Route path="adminreview" element={<AdminReview/>}/>
        <Route path="adminpatientlist" element={<AdminPatientList/>}/>
        <Route path="admininvoicelist" element={<AdminInvoiceList/>}/>






        {/* General Login */}
        <Route path="genlogin" element={<GenLogin/>}/>

        {/* dashboard Routes */}
        <Route path="dashboard" element={<PatientDashboard/>}/>

      </Routes>
      <Footer />
      {/* <DashNav />
        <Routes>
        
        </Routes>
      <Footer /> */}
    </BrowserRouter>


  );
}
