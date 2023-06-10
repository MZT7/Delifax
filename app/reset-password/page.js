"use client";
import React from "react";
import Label from "../../components/Ads/Label";
import Input from "../../components/Ads/Input";
import Image from "next/image";
import identity from "../../components/images/ID.png";
import Aright from "../../components/images/arrowright.png";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
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
        <h1 className="font-bold text-xl text-[#0657B5]">Reset Password </h1>

        <div className="flex flex-col w-full space-y-6 items">
          <form
            className="flex flex-col font-normal transition-all space-y-7"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="">
              <Label>Password</Label>

              <Input
                className=""
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="">
              <Label>Confirm Password</Label>

              <Input
                className=""
                type="password"
                placeholder="Confirm Password"
                {...register("confirm_password", { required: true })}
              />
              {errors.confirm_password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* <Link
        href={"/forgot-password"}
        className="self-end text-[#0657B5] text-sm"
      >
        Forgot Password?
      </Link> */}

            <button
              className="w-full bg-[#0657B5] py-3 text-white rounded-sm"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
