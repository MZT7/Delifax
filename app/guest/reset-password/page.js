"use client";
import React, { useState } from "react";
import Label from "../../../components/Ads/Label";
import Input from "../../../components/Ads/Input";
import Image from "next/image";
import identity from "../../../components/images/ID.png";
import Aright from "../../../components/images/arrowright.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { ChangePass } from "@/router/api/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useReactMutation } from "@/components/hooks/useReactQueryFn";
import Alert from "@/components/Ads/alert";

const ResetPassword = () => {
  const [otp, setOtp] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate, isError, isPending, isSuccess } = useReactMutation(
    "/company/auth/create-password",
    "post"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOtpInput = (e) => {
    console.log("yes");
    if (e.length < 4) {
      console.log("not ready");
      // return;
    }
    setOtp(e);
    console.log(otp);
  };

  const onsubmit = (data) => {
    // e.preventDefault();
    const email = localStorage?.getItem("forgotP");
    console.log("otp", otp);

    if (!otp || !email || otp.length !== 4) {
      console.error("Invalid otp or email");
      return;
    }

    const formData = {
      email: email,
      Password: data.password,
      ConfirmPassword: data.confirm_password,
      OTP: otp,
    };

    console.log(formData);

    mutate(formData, {
      onSuccess: (resData, variables, context) => {
        localStorage.removeItem("forgotP");
        Alert("Password Changed", "success");
        router.push("/guest/login");
      },
    });
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
            <div className="">
              <Label>OTP</Label>

              <OtpInput
                value={otp}
                onChange={handleOtpInput}
                inputStyle=" border border-gray-800 !w-20 h-10 px-2 rounded"
                containerStyle="w-full flex justify-start py-2 text-center mx-auto space-x-3"
                numInputs={4} // Number of input fields
                renderSeparator={<span> </span>}
                renderInput={(props) => <input {...props} />}
                name="otp"
                inputType={"number"}
                // required={true}
                // {...register("otp", { required: true })}
              />
              {/* {errors.otp && (
                <span className="text-red-500">This field is required</span>
              )} */}
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
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
