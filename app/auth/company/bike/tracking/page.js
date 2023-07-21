import Input from "@/components/Ads/Input";
import React from "react";
import LocationDot from "../../../../../components/images/locationDot.png";
import VLine from "../../../../../components/images/VLine.png";
import LocationPoint from "../../../../../components/images/locationPoint.png";
import Timer from "../../../../../components/images/timer.png";
import Image from "next/image";

const Tracking = () => {
  const Tracker = [
    {
      header: "Delivery Booked",
      description: "Tue, 7 Mar 2023- 01.25pm Ajah Market, Ajah Lagos",
      time: "01:25 pm",
    },
    {
      header: "Assigned to a Rider",
      description: "Your order is getting ready",
      time: "01:25 pm",
    },
    {
      header: "Picked up",
      description: "Your order is already on is the way",
      time: "01:25 pm",
    },
    {
      header: "Order Delivered",
      description: "Excellence Hotel Ogba Lagos",
      time: "01:25 pm",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-40 mx-auto gap-y-10 space-y-7 max-w-7xl">
      <h1 className="text-3xl font-semibold text-[#032B5A]">Track Rider’s</h1>
      <div className="flex flex-col w-1/2 gap-y-5 ">
        <div className="flex items-center justify-between w-full p-3 bg-[#EDF5FF] shadow-sm ">
          <Input
            className="w-4/5 py-2 m-0 border-none outline-none "
            placeholder="Enter Tracker ID"
          />
          <button className="py-2 text-white rounded-sm w-28 bg-gradient-to-bl from-purple-400 via-indigo-400 to-indigo-700">
            Track
          </button>
        </div>
        <div className="flex flex-col gap-y-3 p-3 shadow-lg bg-[#fff] text-fax-blue">
          {Tracker.map(({ header, description, time }, index) => (
            <div
              key={index}
              className="flex items-start justify-between w-full "
            >
              <div className="flex gap-3 ">
                <div className="flex flex-col items-start justify-start gap-y-3 ">
                  <Image
                    src={LocationDot}
                    width={20}
                    // height={500}
                    alt="Picture of the author"
                    // priority={true}
                    placeholder="logo"
                  />

                  <div
                    className={`inline-flex justify-center w-full ${
                      Tracker.length - 1 == index ? "hidden" : ""
                    }`}
                  >
                    <Image
                      src={VLine}
                      width={1}
                      // height={5}
                      alt="Picture of the author"
                      // priority={true}
                      placeholder="logo"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-start text-fax-blue">
                  <h1 className="text-sm font-semibold ">{header}</h1>
                  <p className="w-2/3 text-xs">{description}</p>
                </div>
              </div>

              <h1 className="inline-flex items-center font-semibold">{time}</h1>
            </div>
          ))}

          {/* <div className="flex justify-between w-full ">
            <div className="flex gap-3 ">
              <div className="flex flex-col items-start justify-center gap-y-3 ">
                <Image
                  src={LocationDot}
                  width={20}
                  // height={500}
                  alt="Picture of the author"
                  // priority={true}
                  placeholder="logo"
                />

                <div className="inline-flex justify-center w-full">
                  <Image
                    src={VLine}
                    width={1}
                    // height={5}
                    alt="Picture of the author"
                    // priority={true}
                    placeholder="logo"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start text-fax-blue">
                <h1 className="text-sm font-semibold ">Delivery Booked</h1>
                <p className="w-2/3 text-xs">
                  Tue, 7 Mar 2023- 01.25pm Ajah Market, Ajah Lagos
                </p>
              </div>
            </div>

            <h1 className="inline-flex items-center font-semibold">01:25 pm</h1>
          </div> */}
        </div>
        <div className="flex flex-col p-3 shadow-lg gap-y-3 bg-[#EDF5FF] w-full text-fax-blue">
          <div className="flex items-start w-full gap-x-3 ">
            <Image
              src={Timer}
              width={20}
              // height={500}
              alt="Picture of the author"
              // priority={true}
              placeholder="logo"
            />
            <div className="flex flex-col">
              <h1 className="text-xs">Delivery Time </h1>
              <p className="text-base font-semibold">35 mins</p>
            </div>
          </div>
          <div className="flex items-start w-full gap-x-3">
            <Image
              src={LocationPoint}
              width={20}
              // height={500}
              alt="Picture of the author"
              // priority={true}
              placeholder="logo"
            />
            <div className="flex flex-col">
              <h1 className="text-xs">Drop-off Address </h1>
              <p className="font-semibold">Excellence Hotel Ogba Lagos.</p>
            </div>
          </div>
        </div>
      </div>
      <button className="w-1/2 bg-[#0657B5] py-3 text-white rounded-sm">
        Go To Map
      </button>
    </div>
  );
};

export default Tracking;
