"use client";

import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import bike from "../../../../components/images/bikeD.png";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state?.auth?.user);
  console.log(userData);
  const details = [
    {
      title: "  Number of Available Bikes",
      src: bike,
      description: "How many number of bikes are available ",
      color: "bg-[#EDF5FF]",
    },
    {
      title: "Update Bike Information",
      src: bike,
      description: "Provide information about your Bikes, Type, Model ETC",
      color: "bg-[#F1EDFF]",
    },
    {
      title: "Bike Resumption Location",
      src: bike,
      description:
        "Where your Bike resumes so we can give you frequent orders in that location to start your day.",
      color: "bg-[#EEFFED]",
    },
    {
      title: "Track Riders",
      src: bike,
      description: "See the current location of your Bike (s).",
      color: "bg-[#FFEDF7]",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-40 mx-auto space-y-7 max-w-7xl font-[Montserrat]">
      <h1 className="self-start text-4xl font-bold text-black">
        Good Morning,{userData?.UserName}
      </h1>
      <div className="grid w-full grid-cols-2 tracking-wider gap-x-5 gap-y-10">
        {details?.map(({ title, src, description, color }, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col py-6 px-10 space-y-5 border-2 border-regal-blue ${color}`}
            >
              <Image src={src} width={30} alt="bike" />
              <h1 className="text-[#0657B5] font-semibold text-lg ">{title}</h1>
              <p className="font-normal text-sm text-[#7099C9]">
                {description}
              </p>
              <i className="self-end ">
                <FiArrowRight className="mt-10 text-2xl text-[#0657B5]" />
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//
export default Home;
