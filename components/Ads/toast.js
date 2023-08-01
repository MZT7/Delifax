"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
const Toast = ({ children }) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default Toast;
