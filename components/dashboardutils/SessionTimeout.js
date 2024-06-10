import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { createUser, setAuth, setToken } from "../../store/users/userSlice";
import { useDispatch } from "react-redux";

const SessionTimeout = ({ children }) => {
  const [sessionExpired, setSessionExpired] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let inactivityTimeout;
    let sessionTimeout;

    const resetInactivityTimeout = () => {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        setSessionExpired(true);
        dispatch(setAuth(false));
        dispatch(createUser(null));
        dispatch(setToken(null));
        // dispatch(createAdmin(null));
        // dispatch(setAdminToken(null));
      }, 300000); // 5 minutes of inactivity to trigger the session timeout
    };

    const resetSessionTimeout = () => {
      clearTimeout(sessionTimeout);
      sessionTimeout = setTimeout(() => {
        // Code to handle session timeout, such as redirecting the user or showing a message
        dispatch(setAuth(false));
        dispatch(createUser(null));
        dispatch(setToken(null));
        // dispatch(createAdmin(null));
        // dispatch(setAdminToken(null));
        setSessionExpired(true);
      }, 600000); // 10 minutes for the total session timeout
    };

    const handleUserActivity = () => {
      resetInactivityTimeout();
      resetSessionTimeout();
    };

    const startSessionTimeout = () => {
      resetInactivityTimeout();
      resetSessionTimeout();
    };

    startSessionTimeout();

    // Attach event listeners to track user activity
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);

    return () => {
      clearTimeout(inactivityTimeout);
      clearTimeout(sessionTimeout);
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
    };
  });

  if (sessionExpired) {
    // Render your session expired message or redirect the user
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        You were inactive. Please{" "}
        <div
          className="text-zukkyOrange ml-2 cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Login again to continue
        </div>
        .
      </div>
    );
  }

  // Render your component content
  return <div>{children}</div>;
};

export default SessionTimeout;
