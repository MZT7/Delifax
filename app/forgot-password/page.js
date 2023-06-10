"use client";

import React, { useState } from "react";
import Label from "../../components/Ads/Label";
import Input from "../../components/Ads/Input";
import Image from "next/image";
import identity from "../../components/images/ID.png";
import Aright from "../../components/images/arrowright.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (e) => {
    console.log(e);
    alert(JSON.stringify(e));
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-40">
      <div className="flex flex-col items-center w-full max-w-xl space-y-6">
        <h1 className="font-bold text-xl text-[#0657B5]">Password Reset</h1>
        <h4 className="text-center text-[#0657B5]">
          Password reset link will be sent to your email address, know your
          password?
          <Link className="" href={`/login`}>
            Login here
          </Link>
        </h4>
        <div className="flex flex-col w-full space-y-6 items">
          <form
            className="flex flex-col font-normal transition-all space-y-7"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="">
              <Label>Email Address</Label>

              <Input
                className=""
                type="email"
                placeholder="Email Address"
                {...register("email_address", { required: true })}
              />

              {errors.email_address && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <button
              className="w-full bg-[#0657B5] py-3 text-white rounded-sm"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
