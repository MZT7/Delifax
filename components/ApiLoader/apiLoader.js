"use client";
import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const ApiLoader = ({ children }) => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  return (
    // <div>
    //   {isLoading ? <Spin tip="Loading" size="large" fullscreen /> : children}
    // </div>
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 top-0 flex justify-center min-w-full min-h-screen place-items-center">
          <Spin size="large" fullscreen />
        </div>
      )}
    </div>
  );
};

export default ApiLoader;
