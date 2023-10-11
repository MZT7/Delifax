import React, { useState } from "react";
import Label from "../../components/Ads/Label";
import Input from "../../components/Ads/Input";
import Image from "next/image";
import identity from "../../components/images/ID.png";
import Aright from "../../components/images/arrowright.png";

const Company = ({
  register,
  errors,
  handleFile,
  handleSubmit,
  imgName,
  onsubmit,
}) => {
  //   const [imgName, setImgName] = useState(null);
  return (
    <form
      className="flex flex-col font-normal transition-all space-y-7"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="">
        <Label>Company Name</Label>

        <Input
          className=""
          type="text"
          placeholder="Company Name"
          {...register("company_name", { required: true })}
        />
        {errors.company_name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="">
        <Label>Company Address</Label>

        <Input
          className=""
          type="text"
          placeholder="Company Address"
          {...register("company_address", { required: true })}
        />
        {errors.company_address && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="">
        <Label>Owner&#39;s Name </Label>

        <Input
          className=""
          type="text"
          placeholder="Owner's Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
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
        <Label>Owner&#39;s Phone Number</Label>

        <Input
          className=""
          type="password"
          placeholder="Owner&#39;s Phone Number"
          {...register("phone_number", { required: true })}
        />
        {errors.phone_number && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="">
        <h1>ID Verification</h1>
        <Label
          for="verification"
          className="flex justify-between items-center p-4 mt-2 h-full border-2 border-[#7099C9] border-dashed"
        >
          <div className="flex items-center space-x-5">
            <Image
              src={identity}
              width={0}
              height={0}
              className="object-contain w-5"
              alt="id"
              // placeholder="logo"
            />

            <h1>{imgName?.verification || "ID VERIFICATION"}</h1>
          </div>

          <Image
            src={Aright}
            width={0}
            height={0}
            className="object-contain w-2"
            alt="i"
            // placeholder="log"
          />
        </Label>

        <input
          id="verification"
          className="hidden"
          type="file"
          placeholder="ID Verification"
          // onChange={handleFile}
          {...register("id_verification", {
            required: true,
            onChange: (e) => {
              handleFile(e);
            },
          })}
        />
        {errors.id_verification && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="">
        <h1>CAC Document</h1>
        <Label
          for="cac"
          className="flex justify-between items-center p-4 mt-2 h-full border-2 border-[#7099C9] border-dashed"
        >
          <div className="flex items-center space-x-5">
            <Image
              src={identity}
              width={0}
              height={0}
              className="object-contain w-5"
              alt="id"
              // placeholder="logo"
            />

            <h1>{imgName?.cac || "CAC Document"}</h1>
          </div>

          <Image
            src={Aright}
            width={0}
            height={0}
            className="object-contain w-2"
            alt="i"
            // placeholder="log"
          />
        </Label>

        <input
          id="cac"
          className="hidden"
          type="file"
          placeholder="CAC Document"
          // onChange={handleFile}
          {...register("cac_document", {
            required: true,
            onChange: (e) => {
              handleFile(e);
            },
          })}
        />
        {errors.cac_document && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex items-center justify-start w-full h-full">
        <input
          id="policy"
          className="p-0 m-0 w-7"
          type="checkbox"
          {...register("policy", { required: true })}
        />

        <Label for="policy">
          I agree to COMPANY NAME Terms of Services and Privacy Policy
        </Label>
        <br />
        {errors.policy && (
          <span className="inline-block text-red-500">
            This field is required
          </span>
        )}
      </div>
      <button
        className="w-full bg-[#0657B5] py-3 text-white rounded-sm"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default Company;
