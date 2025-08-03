import React, { useState } from "react";
import { useApiIntegration } from "../../hooks/useApiIntegration";
import toast from "react-hot-toast";
import DocSideBar from "../../components/DocSideBar";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, loading } = useApiIntegration();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      await resetPassword(newPassword);

      toast.success("Password changed successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log("Password change failed:", error);
      toast.error(error.message || "Failed to change password");
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <div
        className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
        }}
      >
        <h3 className="pt-3 text-[12px] md:text-[14px]">
          Home / Change Password
        </h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Change Password
        </h1>
      </div>

      {/* Content Section */}
      <section className="md:py-[20%] py-[50%] w-full bg-[#e2e2e2]">
        <div className="flex mx-[2%]">
          {/* Sidebar */}
          <DocSideBar />

          {/* Form Card */}
          <div className="mx-2 w-full border rounded bg-white p-5">
            <div className="md:w-[50%] mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Old Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2 rounded text-white ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#46B8E3] hover:bg-[#3a9bc5]"
                  }`}
                >
                  {loading ? "Changing..." : "Change Password"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
