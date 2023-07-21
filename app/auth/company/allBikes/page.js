import React from "react";

const AllBikes = () => {
  const bikeList = [
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
    {
      title: "Honda",
      model: "CBX",
      plateNumber: "IKJ 272 LG",
    },
  ];
  return (
    <div className="flex flex-col items-center min-h-screen px-10 py-40 mx-auto space-y-7 max-w-7xl">
      <h1 className="text-[#032B5A] font-semibold text-4xl">
        Number of Available Bikes
      </h1>
      <p className="text-[#7099C9]">We have 7 bikes available</p>
      <div className="flex flex-col items-center w-1/2 space-y-10 ">
        {bikeList?.map(({ title, model, plateNumber }, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-2xl "
            >
              <div>
                <h1 className="text-[#0657B5] text-lg font-bold">{title}</h1>
                <p className="text-xs text-[#7099C9] font-normal ">{model}</p>
              </div>
              <div>
                <h1 className="text-xs text-[#0657B5] font-semibold">
                  Plate Number:
                </h1>
                <p className="">{plateNumber}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBikes;
