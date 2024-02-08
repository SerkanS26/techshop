import React from "react";

// react-router-dom
import { Outlet, Navigate } from "react-router-dom";

// react-redux
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
