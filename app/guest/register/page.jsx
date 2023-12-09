"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Company from "../../../components/Register/Company";
import User from "../../../components/Register/User";
import Label from "../../../components/Ads/Label";
import Input from "../../../components/Ads/Input";
import Image from "next/image";
import identity from "../../../components/images/ID.png";
import Aright from "../../../components/images/arrowright.png";
import Link from "next/link";
import { onRegister } from "@/router/api/auth";

import { useReactMutation } from "@/components/hooks/useReactQueryFn";
import { useDispatch } from "react-redux";
import { startLoading } from "@/reduxStore/features/auth/authSlice";
import Alert from "@/components/Ads/alert";
import { useRouter } from "next/navigation";

const Register = () => {
  const [imgName, setImgName] = useState(null);
  const [user, setUser] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate, isError, isPending, isSuccess } = useReactMutation(
    "/company/auth/create-company",
    "post"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFile = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    // const file = e.target.files[0];
    const file = e.currentTarget.files[0];
    setImgName((prev) => {
      return { ...prev, [name]: file?.name };
    });

    console.log("yeah");
    console.log(imgName);
  };

  const onsubmit = async (data) => {
    if (Object.keys(data).length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append("CompanyName", data.company_name);
    formData.append("CompanyAddress", data.company_address);
    formData.append("Email", data.email_address);
    formData.append("Password", data.password);
    formData.append("OwnerName", data.name);
    formData.append("OwnerPhone", data.phone_number);
    formData.append("IdVerification", data.id_verification[0]);
    formData.append("CACDocument", data.cac_document[0]);
    formData.append("Agreement", data.policy);

    dispatch(startLoading());
    mutate(formData, {
      onSuccess: (resData, variables, context) => {
        Alert("Registration Successful", "success");
        router.push("/guest/login");
      },
    });

    // alert(JSON.stringify(e));
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-40">
      <div className="flex flex-col items-center w-full max-w-xl space-y-6">
        <h1 className="font-bold">Register</h1>
        <h4>
          Create your account, already have an account?
          <Link className="font-bold text-[#0657B5]" href={`/guest/login`}>
            Log in here
          </Link>
        </h4>
        <div className="flex flex-col w-full space-y-6 items">
          <div className="flex items-center w-full text-center border border-[#0657B5] p-1">
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
              handleFile={handleFile}
              imgName={imgName}
              onsubmit={onsubmit}
            />
          ) : (
            <Company
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              handleFile={handleFile}
              imgName={imgName}
              onsubmit={onsubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
