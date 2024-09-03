import React from "react";
import { useAuth } from "../Context/Authprovider";
import toast from "react-hot-toast";

function Logout() {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Clear the authUser state
      setAuthUser(null);

      // Remove user from local storage
      localStorage.removeItem("Users");

      // Show success notification
      toast.success("Logged out successfully");

      // Optional: Redirect to login or home page
      // window.location.href = "/login"; // or any other route
    } catch (error) {
      // Show error notification
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <a
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  );
}

export default Logout;
