import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../components/components.css';
import DocSideBar from "../../components/DocSideBar";
import { walletAPI } from '../../services/walletApi';
import { useApiIntegration } from '../../hooks/useApiIntegration';
import toast from 'react-hot-toast';
import { 
  ClockIcon, MapPinIcon, EnvelopeIcon, CogIcon, 
  CreditCardIcon, XMarkIcon, CheckIcon, EyeIcon, PhoneIcon 
} from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';
import Money from '../../assets/images/money.png';
import MoneyBag from '../../assets/images/moneybag.png';

const DoctorPayout = () => {
  const [amount, setAmount] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [banks, setBanks] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [payoutHistory, setPayoutHistory] = useState([]);
  const [showPayoutForm, setShowPayoutForm] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [savedAccounts, setSavedAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  const { getWalletBalance, getWalletTransactions, loading } = useApiIntegration();

  useEffect(() => {
    fetchBanks();
    fetchWalletData();
    fetchSavedAccounts();
  }, []);

  const fetchBanks = async () => {
  try {
    const result = await walletAPI.getBanks();
    console.log("Bank fetch result:", result);

    const banksArray = result?.data?.data;
    if (Array.isArray(banksArray)) {
      setBanks(banksArray);
    } else {
      throw new Error("Invalid bank list structure");
    }
  } catch (error) {
    console.error("Failed to fetch banks:", error);
    toast.error("Failed to load banks");
  }
};


  const fetchSavedAccounts = async () => {
    try {
      // Assuming we have an endpoint to get saved payout accounts
      // const result = await walletAPI.getPayoutAccounts();
      // setSavedAccounts(result.data || []);
      
      // Mock data for now
      setSavedAccounts([
        { id: "1", bankName: "Access Bank", accountNumber: "1234567890", accountName: "John Doe" },
        { id: "2", bankName: "Zenith Bank", accountNumber: "0987654321", accountName: "John Doe" }
      ]);
    } catch (error) {
      console.error("Failed to fetch saved accounts:", error);
      toast.error("Failed to load saved accounts");
    }
  };

  const fetchWalletData = async () => {
    try {
      const [balanceResult, transactionsResult] = await Promise.all([
        getWalletBalance(),
        getWalletTransactions({ type: 'payout' })
      ]);

      if (balanceResult) setWalletBalance(balanceResult.balance || 0);
      if (transactionsResult) setPayoutHistory(transactionsResult.data || []);
    } catch (error) {
      console.error("Failed to fetch wallet data:", error);
    }
  };

  const handleSetupAccount = async (e) => {
    e.preventDefault();
    
    try {
      // Assuming we have an endpoint to save payout account
      // const result = await walletAPI.savePayoutAccount({
      //   bankCode,
      //   accountNumber,
      //   accountName
      // });

      // Mock success for now
      toast.success("Payout account saved successfully");
      setShowSetupModal(false);
      fetchSavedAccounts();
    } catch (error) {
      console.error("Failed to save payout account:", error);
      toast.error("Failed to save payout account");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseFloat(amount) > walletBalance) {
      toast.error("Insufficient wallet balance");
      return;
    }

    if (!selectedAccount) {
      toast.error("Please select a payout account");
      return;
    }

    try {
      const result = await walletAPI.requestPayout({
        amount: parseFloat(amount),
        bankCode: selectedAccount.bankCode,
        accountNumber: selectedAccount.accountNumber,
        accountName: selectedAccount.accountName,
        password // Assuming API requires password for verification
      });

      if (result) {
        toast.success("Payout request submitted successfully");
        setAmount("");
        setPassword("");
        setSelectedAccount("");
        setShowPayoutForm(false);
        fetchWalletData(); // Refresh data
      }
    } catch (error) {
      console.error("Payout request failed:", error);
      toast.error(error.message || "Payout request failed");
    }
  };

  return (
    <>
      <div className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
           style={{ position: "fixed", width: "100%", backgroundColor: "#021140", minHeight:"100px" }}>
        <h3 className='pt-3 text-[12px] md:text-14px'>Home / Payouts</h3>
        <h1 className='text-[22px] md:text-[24px] py-2 font-semibold'>Payouts</h1>
      </div>
      
      <section className='md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]'>
        <div className="flex mx-[2%]">
          <DocSideBar/>
          <div className='mx-2 border w-full rounded bg-white'>
            {/* Wallet Summary Cards */}
            <div className='border my-5 bg-[#FAFAFA]'>
              <div className="md:flex w-full gap-3 p-4">
                <div className="flex-col mb-3 md:w-1/3 rounded p-4" style={{ backgroundColor:'rgba(11, 110, 79, 0.05)'}}>
                  <div className="flex">
                    <div className='pl-4'>
                      <h1 className='text-[12px] text-[#757575]'>Wallet Balance</h1>
                      <h1 className='text-[24px]'>&#8358;{walletBalance.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</h1>
                    </div>
                  </div>
                </div>
                
                <div className="flex-col md:w-1/3 mb-3 bg-[#F1F1F1] rounded p-4">
                  <h1 className='text-[12px] text-[#757575] mb-2'>Total Withdrawal</h1>
                  <div className="flex items-center">
                    <img src={Money} alt="Money" className="mr-2 h-[29px] w-[25px]"/>
                    <h1 className='text-[16px]'>
                      ₦{payoutHistory.reduce((sum, payout) => sum + (payout.amount || 0), 0).toLocaleString()}
                    </h1>
                  </div>
                </div>
                
                <div className="flex-col md:w-1/3 mb-3 rounded p-4" style={{ backgroundColor:'rgba(70, 184, 227, 0.05)'}}>
                  <h1 className='text-[12px] text-[#757575] mb-2'>Pending Withdrawals</h1>
                  <div className="flex items-center">
                    <img src={MoneyBag} alt="Money Bag" className="mr-3 h-[31px] w-[29px]"/>
                    <h1 className='text-[16px]'>
                      ₦{payoutHistory
                        .filter(p => p.status === 'pending')
                        .reduce((sum, payout) => sum + (payout.amount || 0), 0)
                        .toLocaleString()}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='p-4 border-b'>
              <button 
                onClick={() => setShowSetupModal(true)}
                className="flex items-center text-[#46B8E3] mr-6"
              >
                <CogIcon className="w-5 h-5 mr-2" /> 
                Setup payout account
              </button>
              
              <button 
                onClick={() => setShowPayoutForm(true)}
                className="flex items-center text-[#46B8E3]"
              >
                <CreditCardIcon className="w-5 h-5 mr-2" /> 
                Place a withdrawal request
              </button>
            </div>

            {/* Payout History */}
            <div className='p-5 w-full'>
              <h1 className='text-lg font-semibold mb-4'>Payout History</h1>
              <hr className="mb-4" />
              
              {payoutHistory.length > 0 ? (
                <div className="space-y-2">
                  {payoutHistory.map((payout, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 border-b hover:bg-gray-50">
                      <div>
                        <p className="font-medium">₦{(payout.amount || 0).toLocaleString()}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(payout.createdAt).toLocaleDateString()}
                          <span className="ml-2">
                            {payout.accountName} ••••{payout.accountNumber?.slice(-4)}
                          </span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        payout.status === 'completed' ? 'bg-green-100 text-green-800' :
                        payout.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payout.status || 'pending'}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <h1 className='text-gray-500'>No payout history available</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Payout Account Modal */}
      {showSetupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Setup Payout Account</h2>
              <button 
                onClick={() => setShowSetupModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSetupAccount}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank
                  </label>
                  <select
                    value={bankCode}
                    onChange={(e) => setBankCode(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select bank</option>
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Enter account number"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Name
                  </label>
                  <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    placeholder="Enter account name"
                    className="w-full p-3 border rounded-lg"
                    required
                    readOnly
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowSetupModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Withdrawal Request Modal */}
      {showPayoutForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Withdrawal Request</h2>
              <button 
                onClick={() => setShowPayoutForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full p-3 border rounded-lg"
                    min="100"
                    max={walletBalance}
                    step="0.01"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Available: ₦{walletBalance.toLocaleString()}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Choose Account
                  </label>
                  <select
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select payout account</option>
                    {savedAccounts.map((account) => (
                      <option key={account.id} value={account}>
                        {account.bankName} - {account.accountNumber} ({account.accountName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowPayoutForm(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg text-white ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {loading ? 'Processing...' : 'Request Withdrawal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorPayout;