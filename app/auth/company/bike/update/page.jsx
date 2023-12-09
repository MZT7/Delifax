"use client";
import Label from "@/components/Ads/Label";
import Input from "@/components/Ads/Input";
import React from "react";
import { useForm } from "react-hook-form";

const Update = () => {
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
        <h1 className="text-xl font-bold">Update Information</h1>

        <div className="flex flex-col w-full space-y-6 items">
          <form
            className="flex flex-col space-y-10 font-normal transition-all"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="flex flex-col space-y-5">
              <h2 className="font-semibold text-primary">Bike information</h2>
              <div className="">
                <Label className="">Bike Name</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Bike Name"
                  {...register("bike_name", { required: true })}
                />

                {errors.bike_name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Plate Number</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Plate Number"
                  {...register("plate_number", { required: true })}
                />
                {errors.plate_number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <h2 className="font-semibold text-primary">
                Key Specs of Honda CBR
              </h2>
              <div className="">
                <Label className="">Engine Number</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Engine Number"
                  {...register("engine_number", { required: true })}
                />

                {errors.engine_number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Year</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Year"
                  {...register("year", { required: true })}
                />
                {errors.year && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Mileage Number</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Mileage Number"
                  {...register("mileage_number", { required: true })}
                />
                {errors.mileage_number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Brakes</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Brakes"
                  {...register("brakes", { required: true })}
                />
                {errors.brakes && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <h2 className="font-semibold text-primary">Rider’s Informaton</h2>
              <div className="">
                <Label className="">Full Name</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Full Name"
                  {...register("full_name", { required: true })}
                />

                {errors.full_name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Address</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="">
                <Label>Phone Number</Label>

                <Input
                  className=""
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone_number", { required: true })}
                />
                {errors.phone_number && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            {/* <Link
        href={"/forgot-password"}
        className="self-end text-[#0657B5] text-sm"
      >
        Forgot Password?
      </Link> */}

            <button
              className="w-full bg-[#0657B5] py-3 mt-5 text-white rounded-sm"
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

export default Update;
