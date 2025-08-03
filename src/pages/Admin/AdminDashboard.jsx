
import React, { useState, useEffect } from 'react';
import { adminAPI } from '../../services/api';
import toast from 'react-hot-toast';
import AdminSidebar from '../../components/AdminSidebar';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    stats: {},
    doctors: [],
    patients: [],
    appointments: [],
    transactions: []
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [
        stats,
        doctors,
        patients,
        appointments,
        transactions
      ] = await Promise.all([
        adminAPI.getDashboard(),
        adminAPI.getAllDoctors({ limit: 10 }),
        adminAPI.getAllPatients({ limit: 10 }),
        adminAPI.getAllAppointments({ limit: 10 }),
        adminAPI.getTransactions({ limit: 10 })
      ]);

      setDashboardData({
        stats: stats.data || {},
        doctors: doctors.data || [],
        patients: patients.data || [],
        appointments: appointments.data || [],
        transactions: transactions.data || []
      });
    } catch (error) {
      toast.error('Failed to load dashboard data');
      console.error('Admin dashboard fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyDoctor = async (doctorId) => {
    try {
      await adminAPI.verifyDoctor(doctorId);
      toast.success('Doctor verified successfully');
      fetchDashboardData(); // Refresh data
    } catch (error) {
      toast.error('Failed to verify doctor');
    }
  };

  const handleCreateAdmin = async (adminData) => {
    try {
      await adminAPI.createAdmin(adminData);
      toast.success('Admin created successfully');
    } catch (error) {
      toast.error('Failed to create admin');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#46B8E3]"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your healthcare platform.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
            <p className="text-3xl font-bold text-[#46B8E3]">{dashboardData.stats.totalDoctors || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Patients</h3>
            <p className="text-3xl font-bold text-green-600">{dashboardData.stats.totalPatients || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
            <p className="text-3xl font-bold text-purple-600">{dashboardData.stats.totalAppointments || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
            <p className="text-3xl font-bold text-yellow-600">₦{(dashboardData.stats.totalRevenue || 0).toLocaleString()}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'overview' ? 'bg-[#46B8E3] text-white' : 'bg-white text-gray-700'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'doctors' ? 'bg-[#46B8E3] text-white' : 'bg-white text-gray-700'}`}
          >
            Doctors
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'patients' ? 'bg-[#46B8E3] text-white' : 'bg-white text-gray-700'}`}
          >
            Patients
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'appointments' ? 'bg-[#46B8E3] text-white' : 'bg-white text-gray-700'}`}
          >
            Appointments
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'transactions' ? 'bg-[#46B8E3] text-white' : 'bg-white text-gray-700'}`}
          >
            Transactions
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Doctors */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Doctor Registrations</h2>
              {dashboardData.doctors.length > 0 ? (
                <div className="space-y-4">
                  {dashboardData.doctors.slice(0, 5).map((doctor) => (
                    <div key={doctor.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">Dr. {doctor.firstName} {doctor.lastName}</p>
                        <p className="text-gray-600">{doctor.specialty}</p>
                        <p className="text-sm text-gray-500">{doctor.email}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          doctor.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doctor.isVerified ? 'Verified' : 'Pending'}
                        </span>
                        {!doctor.isVerified && (
                          <button
                            onClick={() => handleVerifyDoctor(doctor.id)}
                            className="bg-[#46B8E3] text-white px-3 py-1 rounded text-sm"
                          >
                            Verify
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No doctors registered yet</p>
              )}
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
              {dashboardData.transactions.length > 0 ? (
                <div className="space-y-4">
                  {dashboardData.transactions.slice(0, 5).map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{transaction.description}</p>
                        <p className="text-gray-600">{transaction.type}</p>
                        <p className="text-sm text-gray-500">{new Date(transaction.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-lg">₦{transaction.amount.toLocaleString()}</span>
                        <p className={`text-sm ${transaction.status === 'success' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {transaction.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No transactions yet</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">All Doctors</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:border-[#46B8E3] focus:outline-none"
                />
                <button className="bg-[#46B8E3] text-white px-4 py-2 rounded-lg">Search</button>
              </div>
            </div>
            {dashboardData.doctors.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashboardData.doctors.map((doctor) => (
                      <tr key={doctor.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Dr. {doctor.firstName} {doctor.lastName}</div>
                          <div className="text-sm text-gray-500">{doctor.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doctor.specialty}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            doctor.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {doctor.isVerified ? 'Verified' : 'Pending Verification'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(doctor.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            {!doctor.isVerified && (
                              <button
                                onClick={() => handleVerifyDoctor(doctor.id)}
                                className="text-green-600 hover:text-green-900"
                              >
                                Verify
                              </button>
                            )}
                            <button className="text-[#46B8E3] hover:text-blue-900">
                              View Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No doctors found</p>
            )}
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">All Patients</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:border-[#46B8E3] focus:outline-none"
                />
                <button className="bg-[#46B8E3] text-white px-4 py-2 rounded-lg">Search</button>
              </div>
            </div>
            {dashboardData.patients.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashboardData.patients.map((patient) => (
                      <tr key={patient.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{patient.firstName} {patient.lastName}</div>
                          <div className="text-sm text-gray-500">{patient.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.phone || 'Not provided'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(patient.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            patient.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {patient.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-[#46B8E3] hover:text-blue-900">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No patients found</p>
            )}
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">All Appointments</h2>
            {dashboardData.appointments.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashboardData.appointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.patient?.name}</div>
                          <div className="text-sm text-gray-500">{appointment.patient?.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Dr. {appointment.doctor?.name}</div>
                          <div className="text-sm text-gray-500">{appointment.doctor?.specialty}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(appointment.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₦{appointment.amount?.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No appointments found</p>
            )}
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
            {dashboardData.transactions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashboardData.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.reference}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₦{transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === 'success' ? 'bg-green-100 text-green-800' :
                            transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(transaction.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No transactions found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
