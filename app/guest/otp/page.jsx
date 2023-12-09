"use client";
import Link from "next/link";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleOtpInput = (e) => {
    console.log("yes");
    if (e.length < 4) {
      console.log("not ready");
      // return;
    }
    setOtp(e);
    console.log(otp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yesp");
    console.log(otp);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen py-40">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-xl space-y-6"
      >
        <h1 className="font-bold text-xl text-[#0657B5]">OTP Verification</h1>
        <h4 className="text-center text-[#0657B5]">
          Enter the verification code we just sent on your email address.
          {/* <Link className="" href={`/login`}>
            Login here
          </Link> */}
        </h4>
        <div className="w-full space-y-6">
          <OtpInput
            value={otp}
            onChange={handleOtpInput}
            inputStyle=" border border-gray-800 !w-10 h-10 px-2 rounded"
            containerStyle="w-full flex justify-center text-center mx-auto space-x-3"
            numInputs={4} // Number of input fields
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <h4 className=" text-[#0657B5]">Dont receive a code? Resend code</h4>
        <button
          className="w-full bg-[#0657B5] py-3 text-white rounded-sm"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Otp;
