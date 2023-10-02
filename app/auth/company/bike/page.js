import React from "react";
import calender from "../../../../components/images/calender.png";
import engine from "../../../../components/images/engine.png";
import milage from "../../../../components/images/milage.png";
import brakes from "../../../../components/images/brakes.png";
import Image from "next/image";

const Bike = () => {
  const Specs = [
    {
      icon: calender,
      title: "Year",
      value: "2021",
    },
    {
      icon: engine,
      title: "Engine",
      value: "373.3 CS",
    },
    {
      icon: milage,
      title: "Milage",
      value: "35 kmpl",
    },
    {
      icon: brakes,
      title: "Brakes",
      value: "Disk",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-40 mx-auto space-y-7 max-w-7xl">
      <h1 className="text-2xl text-[#032B5A] font-semibold">
        Bike Information
      </h1>
      <div className="flex flex-col items-center justify-center w-1/2 mt-3 space-y-7">
        <div className="w-full">
          <h1 className="text-[#032B5A] font-semibold">Bike Information</h1>
          <div className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-xl ">
            <div>
              <h1 className="text-[#0657B5] text-lg font-bold"> Honda CBR</h1>
              <p className="text-xs text-[#7099C9] font-normal "> 250cc </p>
            </div>
            <div>
              <h1 className="text-xs text-[#0657B5] font-semibold">
                Plate Number:
              </h1>
              <p className="text-[#7099C9]">HG-12345</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[#032B5A] font-semibold">
            Key Specs of Honda CBR
          </h1>
          <div className="grid grid-cols-4 gap-2 mt-3 bg-white">
            {Specs.map(({ icon, title, value }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 space-y-3 shadow-xl"
              >
                <Image
                  src={icon}
                  width={25}
                  // height={500}
                  alt="Picture of the author"
                  // priority={true}
                  placeholder="logo"
                />

                <h3 className="text-[#7099C9] text-xs ">{title}</h3>
                <span className="text-xs font-semibold text-primary">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[#032B5A] font-semibold">
            Rider&rsquo;s Information
          </h1>
          <div className="w-full mt-3 bg-white shadow-xl">
            <h1 className="w-full p-3 text-sm font-semibold text-primary">
              Name: <span className="ml-3 font-normal">Ayomide Johnson</span>
            </h1>
            <h1 className="w-full p-3 text-sm font-semibold text-primary">
              Address:{" "}
              <span className="ml-3 font-normal">
                20, Abraham Adesanya Street
              </span>
            </h1>
            <h1 className="w-full p-3 text-sm font-semibold text-primary">
              Phone #: <span className="ml-3 font-normal">08012345678</span>
            </h1>
          </div>
        </div>
      </div>

      <button className="w-1/2 bg-[#0657B5] py-3 text-white rounded-sm">
        Login
      </button>
    </div>
  );
};

export default Bike;
