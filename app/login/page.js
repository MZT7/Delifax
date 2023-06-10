"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Company from "../../components/Login/Company";
import User from "../../components/Login/User";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //  useEffect(() => {

  //  }, []);

  //  const handleFile = (e) => {
  //    const name = e.target.id;
  //    const value = e.target.value;
  // //    const file = e.target.files[0];
  // //    setImgName((prev) => {
  // //      return { ...prev, [name]: file.name };
  // //    });

  //    console.log("yeah");
  // //    console.log(imgName);
  //  };

  const onsubmit = (e) => {
    console.log(e);
    alert(JSON.stringify(e));
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen py-40">
      <div className="flex flex-col items-center w-full max-w-xl space-y-6">
        <h1 className="font-bold">Login</h1>
        <h4>
          You are welcome back, don’t have an account?
          <Link className="font-bold text-[#0657B5]" href={"/register"}>
            Register here
          </Link>{" "}
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
