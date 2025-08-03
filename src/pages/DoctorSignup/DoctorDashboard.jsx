import React, { useState, useEffect } from "react";
import Client from "../../assets/images/googlelog.png";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  MapPinIcon,
  EnvelopeIcon,
  XMarkIcon,
  CheckIcon,
  EyeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaPrint } from "react-icons/fa";
import DocSideBar from "../../components/DocSideBar";
import Patient from "../../assets/images/patient.png";
import Sickbay from "../../assets/images/sickbay.png";
import Emergency from "../../assets/images/healthplus.png";
import Money from "../../assets/images/money.png";
import MoneyBag from "../../assets/images/moneybag.png";
import { doctorAPI } from "../../services/doctorApi";
import {
  appointmentsAPI,
  walletAPI,
  chatAPI,
  notificationsAPI,
} from "../../services/api";
import toast from "react-hot-toast";

const DoctorDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [dashboardData, setDashboardData] = useState({
    appointments: [],
    todaysAppointments: [],
    patients: [],
    transactions: [],
    walletBalance: 0,
    notifications: [],
    unreadCount: 0,
    totalPatients: 0,
    todaysPatients: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [
        appointments,
        todaysAppointments,
        patients,
        transactions,
        walletBalance,
        notifications,
        unreadCount,
      ] = await Promise.all([
        doctorAPI.getAppointments(),
        doctorAPI.getTodaysAppointments(),
        doctorAPI.getMyPatients(),
        doctorAPI.getTransactions(),
        walletAPI.getBalance(),
        notificationsAPI.getNotifications({ limit: 5 }),
        notificationsAPI.getUnreadCount(),
      ]);

      setDashboardData({
        appointments: Array.isArray(appointments.data) ? appointments.data : [],
        todaysAppointments: Array.isArray(todaysAppointments.data)
          ? todaysAppointments.data
          : [],
        patients: Array.isArray(patients.data) ? patients.data : [],
        transactions: Array.isArray(transactions.data) ? transactions.data : [],
        walletBalance: walletBalance.balance || 0,
        notifications: Array.isArray(notifications.data)
          ? notifications.data
          : [],
        unreadCount: unreadCount.count || 0,
        totalPatients: Array.isArray(patients.data) ? patients.data.length : 0,
        todaysPatients: Array.isArray(todaysAppointments.data)
          ? todaysAppointments.data.length
          : 0,
      });
      console.log("Transactions response:", transactions);
      console.log("Wallet balance response:", walletBalance);
      console.log("Notifications response:", notifications);
      console.log("Unread count response:", unreadCount);
      console.log("Appointments response:", appointments);
      console.log("Today's appointments response:", todaysAppointments);
      console.log("Patients response:", patients);
      console.log("Dashboard data:", dashboardData);
    } catch (error) {
      toast.error("Failed to load dashboard data");
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAppointmentStatusUpdate = async (appointmentId, status) => {
    try {
      await doctorAPI.updateAppointmentStatus(appointmentId, status);
      toast.success("Appointment status updated successfully");
      fetchDashboardData(); // Refresh data
    } catch (error) {
      toast.error("Failed to update appointment status");
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const getFilteredAppointments = () => {
    if (activeTab === "upcoming") {
      return dashboardData.appointments.filter(
        (app) => new Date(app.date) > new Date() && app.status !== "cancelled"
      );
    } else if (activeTab === "today") {
      return dashboardData.todaysAppointments;
    }
    return dashboardData.appointments;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B8E3]"></div>
      </div>
    );
  }

  return (
    <>
      <div
        className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
        }}
      >
        <h3 className="pt-3 text-[12px] md:text-14px">Home / Dashboard</h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Welcome Doctor
        </h1>
      </div>

      <section className="md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]">
        <div className="flex mx-[2%]">
          <DocSideBar />

          <div className="mx-2 border w-full rounded">
            {/* Stats Cards */}
            <div className="md:flex w-full gap-3">
              <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
                <div className="flex mx-2 p-2">
                  <div className="w-[88px] h-[88px] flex items-center border-4 border-[#C52184] justify-center rounded-full">
                    <img
                      src={Patient}
                      alt="Logo"
                      className="h-[40px] w-[40px]"
                    />
                  </div>
                  <div className="pl-10 w-1/2">
                    <h1 className="text-[16px]">Total Patient</h1>
                    <h1 className="text-[24px]">
                      {dashboardData.totalPatients}
                    </h1>
                    <h1 className="text-[14px] text-[#757575]">Till today</h1>
                  </div>
                </div>
              </div>

              <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
                <div className="flex mx-2 p-2">
                  <div className="w-[88px] h-[88px] flex items-center border-4 border-green-800 justify-center rounded-full">
                    <img
                      src={Sickbay}
                      alt="Logo"
                      className="h-[40px] w-[40px]"
                    />
                  </div>
                  <div className="pl-10 w-1/2">
                    <h1 className="text-[16px]">Today Patient</h1>
                    <h1 className="text-[24px]">
                      {dashboardData.todaysPatients}
                    </h1>
                    <h1 className="text-[14px] text-[#757575]">
                      {new Date().toLocaleDateString()}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex-col mb-3 md:w-1/3 bg-[#F1F1F1] rounded">
                <div className="flex mx-2 p-2">
                  <div className="w-[88px] h-[88px] flex items-center border-4 border-[#46B8E3] justify-center rounded-full">
                    <img
                      src={Emergency}
                      alt="Logo"
                      className="h-[40px] w-[40px]"
                    />
                  </div>
                  <div className="pl-10 w-1/2">
                    <h1 className="text-[16px]">Appointments</h1>
                    <h1 className="text-[24px]">
                      {dashboardData.appointments.length}
                    </h1>
                    <h1 className="text-[14px] text-[#757575]">
                      All appointments
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Section */}
            <div className="border my-5 bg-[#FAFAFA]">
              <div className="md:flex w-full gap-3">
                <div
                  className="flex-col mb-3 md:w-1/3 rounded"
                  style={{ backgroundColor: "rgba(11, 110, 79, 0.05)" }}
                >
                  <div className="flex mx-2 p-2">
                    <div className="pl-10">
                      <h1 className="text-[12px] text-[#757575]">
                        Wallet Balance
                      </h1>
                      <h1 className="text-[24px]">
                        {formatAmount(dashboardData.walletBalance)}
                      </h1>
                      <h1 className="text-[12px] pt-2 text-[#757575]">
                        Balance
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex-col md:w-1/3 mb-3 bg-[#F1F1F1] rounded">
                  <div className="mx-2 p-2">
                    <h1 className="text-[12px] text-[#757575] mb-2">
                      Total Earnings
                    </h1>
                    <div className="flex">
                      <img
                        src={Money}
                        alt="Logo"
                        className="mr-2 h-[29px] w-[25px]"
                      />
                      <h1 className="text-[16px] pt-2">
                        {formatAmount(
                          dashboardData.transactions
                            .filter((t) => t.type === "credit")
                            .reduce((sum, t) => sum + t.amount, 0)
                        )}
                      </h1>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-col md:w-1/3 mb-3 rounded"
                  style={{ backgroundColor: "rgba(70, 184, 227, 0.05)" }}
                >
                  <div className="mx-2 p-2">
                    <h1 className="text-[12px] text-[#757575] mb-2">
                      Total Withdrawals
                    </h1>
                    <div className="flex">
                      <img
                        src={MoneyBag}
                        alt="Logo"
                        className="mr-3 h-[31px] w-[29px]"
                      />
                      <h1 className="text-[16px] pt-2">
                        {formatAmount(
                          dashboardData.transactions
                            .filter((t) => t.type === "debit")
                            .reduce((sum, t) => sum + t.amount, 0)
                        )}
                      </h1>
                    </div>
                    <h1 className="text-[12px] text-[#757575] mb-2">
                      All time withdrawals
                    </h1>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <a href="" className="text-[#46B8E3] text-[14px] px-2">
                  View Payout
                </a>
              </div>
            </div>

            {/* Appointments Section */}
            <div className="bg-white p-5 w-full rounded">
              <div className="md:p-2 font-semibold">
                <h1>Patient Appointment</h1>
              </div>

              <div className="my-8">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`py-4 px-8 m-2 border rounded-full ${
                    activeTab === "upcoming" ? "text-white bg-[#46B8E3]" : ""
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab("today")}
                  className={`py-4 px-8 m-2 ${
                    activeTab === "today"
                      ? "text-white bg-[#46B8E3] border rounded-full"
                      : ""
                  }`}
                >
                  Today
                </button>
              </div>

              {getFilteredAppointments().length > 0 ? (
                getFilteredAppointments().map((appointment) => (
                  <React.Fragment key={appointment.id}>
                    <div className="md:flex my-3">
                      <div className="flex-col md:w-1/3">
                        <h1 className="font-semibold text-[14px] py-5">
                          Patient name
                        </h1>
                        <div className="flex">
                          <div className="flex-col md:mr-3">
                            <img
                              src={appointment.patient?.photo || Client}
                              alt="Patient"
                              className="rounded-full mr-5 h-[80px] w-[80px] object-cover"
                            />
                          </div>
                          <div className="flex-col pt-3">
                            <h1 className="font-semibold text-[16px]">
                              {appointment.patient?.name || "Unknown Patient"}
                            </h1>
                            <div className="text-[10px]">
                              <h1 className="text-[#757575]">
                                #{appointment.id.slice(0, 5)}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-col md:w-1/3">
                        <h1 className="px-5 font-semibold text-[14px] py-5">
                          Appointment
                        </h1>
                        <div className="p-5 text-[14px]">
                          <h1>
                            {new Date(appointment.date).toLocaleDateString()}
                          </h1>
                          <h1 className="text-[#46B8E3]">{appointment.time}</h1>
                        </div>
                      </div>

                      <div className="flex-col md:w-1/3">
                        <h1 className="px-5 font-semibold text-[14px] py-5">
                          Purpose
                        </h1>
                        <div className="p-5 text-[14px]">
                          <h1>{appointment.reason || "General"}</h1>
                        </div>
                      </div>

                      <div className="flex-col md:w-1/3">
                        <h1 className="font-semibold text-[14px] py-5">
                          Paid Amount
                        </h1>
                        <div className="p-5 text-[14px]">
                          <h1>{formatAmount(appointment.fee || 0)}</h1>
                        </div>
                      </div>

                      <div className="flex-col mt-4 md:pt-10 md:w-1/3">
                        <div className="flex w-full gap-2">
                          <div className="w-1/3">
                            <Link
                              to={`/appointments/${appointment.id}`}
                              className="flex rounded text-[10px] p-3 bg-[#46B8E333]"
                            >
                              <EyeIcon className="h-4 w-6 flex" /> View
                            </Link>
                          </div>
                          <div className="w-1/3">
                            <button
                              onClick={() =>
                                handleAppointmentStatusUpdate(
                                  appointment.id,
                                  "confirmed"
                                )
                              }
                              className="py-3 px-3 rounded flex text-[10px] bg-[#0B6E4F4D] text-[#0B6E4F] w-full"
                            >
                              <CheckIcon className="h-4 w-6" /> Accept
                            </button>
                          </div>
                          <div className="w-1/3">
                            <button
                              onClick={() =>
                                handleAppointmentStatusUpdate(
                                  appointment.id,
                                  "cancelled"
                                )
                              }
                              className="py-3 px-3 rounded flex text-[10px] text-[#C52184] w-full"
                              style={{ background: "rgba(197, 33, 132, 0.3)" }}
                            >
                              <XMarkIcon className="h-4 w-6" /> Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    No {activeTab === "upcoming" ? "upcoming" : "today's"}{" "}
                    appointments found
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorDashboard;
