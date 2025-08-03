import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Redirector = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user?.role) {
      if (user.role === "doctor") navigate("/doctor-dashboard");
      else if (user.role === "admin") navigate("/admin-dashboard");
      else if (user.role === "patient") navigate("/patient-dashboard");
    } else {
      navigate("/genlogin");
    }
  }, [isAuthenticated, user, navigate]);

  return null;
};

export default Redirector;
