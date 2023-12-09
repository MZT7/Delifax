import React, { useState } from "react";
import Label from "../Ads/Label";
import Input from "../Ads/Input";
import Image from "next/image";
import identity from "../../components/images/ID.png";
import Aright from "../../components/images/arrowright.png";
import Link from "next/link";

const Company = ({ register, errors, handleSubmit, onsubmit }) => {
  //   const [imgName, setImgName] = useState(null);
  return (
    <form
      className="flex flex-col font-normal transition-all space-y-7"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="">
        <Label>Company Email Address</Label>

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
      <div className="">
        <Label>Company Password</Label>

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

      <Link
        href={"/guest/forgot-password"}
        className="self-end text-[#0657B5] text-sm"
      >
        Forgot Password?
      </Link>

      <button
        className="w-full bg-[#0657B5] py-3 text-white rounded-sm"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Company;
