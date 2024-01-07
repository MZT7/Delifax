"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Company from "../../../components/Login/Company";
import User from "../../../components/Login/User";
import Link from "next/link";
// import { useAuth } from "@/reduxStore/store";
import { useRouter } from "next/navigation";
import Alert from "@/components/Ads/alert";
import { OnLogin } from "@/router/api/auth";
import { useDispatch } from "react-redux";
import {
  getToken,
  getUser,
  startLoading,
  stopLoading,
} from "@/reduxStore/features/auth/authSlice";
import { useReactMutation } from "@/components/hooks/useReactQueryFn";
import jwtDecode from "jwt-decode";

// import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { mutate, isError, isPending, isSuccess } = useReactMutation(
    "/company/auth/sign-in",
    "post"
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    console.log(data);

    if (Object.keys(data).length === 0) {
      return;
    }

    dispatch(startLoading());
    mutate(
      {
        email: data?.email_address,
        password: data?.password,
        // expiresInMins: 60, // optional
      },
      {
        onSuccess: (resData, variables, context) => {
          const token = resData?.data?.token;
          const userData = jwtDecode(token);
          dispatch(getUser(userData));
          dispatch(getToken(token));
          Alert("Login Successful", "success");
          router.push("/auth/company/home");
        },
      }
    );
  };

  return (
    <div className='flex items-center justify-center w-full min-h-screen py-40'>
      <div className='flex flex-col items-center w-full max-w-xl space-y-6'>
        <h1 className='font-bold'>Login</h1>
        <h4>
          You are welcome back, don’t have an account?{" "}
          <Link className='font-bold text-[#0657B5]' href={"/guest/register"}>
            Register here
          </Link>{" "}
        </h4>
        <div className='flex flex-col w-full space-y-6 items'>
          <div className='flex items-center w-full text-center border border-[#0657B5] p-1'>
            <button
              className={`w-1/2 ${
                user ? "text-black" : "bg-[#0657B5] text-white"
              } py-3 px-12 rounded-sm transition duration-500`}
              onClick={() => setUser(false)}
            >
              As a Company
            </button>
            <button
              className={`w-1/2 py-3 px-12 rounded-sm transition duration-500 ${
                user ? "bg-[#0657B5] text-white" : "text-black"
              }`}
              onClick={() => setUser(true)}
            >
              As a User
            </button>
          </div>

          {user ? (
            <User
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              //   handleFile={handleFile}
              //   imgName={imgName}
              onsubmit={onsubmit}
            />
          ) : (
            <Company
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              //   handleFile={handleFile}
              //   imgName={imgName}
              onsubmit={onsubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
