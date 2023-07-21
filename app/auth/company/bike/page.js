import React from "react";

const Bike = () => {
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
            <div className="flex flex-col items-center p-2 space-y-3 shadow-xl">
              <span>img</span>
              <h3>year</h3>
              <span>2021</span>
            </div>
            <div className="flex flex-col items-center p-2 space-y-3 shadow-xl">
              <span>img</span>
              <h3>year</h3>
              <span>2021</span>
            </div>
            <div className="flex flex-col items-center p-2 space-y-3 shadow-xl">
              <span>img</span>
              <h3>year</h3>
              <span>2021</span>
            </div>
            <div className="flex flex-col items-center p-2 space-y-3 shadow-xl">
              <span>img</span>
              <h3>year</h3>
              <span>2021</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[#032B5A] font-semibold">
            Rider&rsquo;s Information
          </h1>
          <div className="w-full mt-3 bg-white shadow-xl">
            <h1 className="w-full p-3 text-sm font-semibold text-fax-blue">
              Name: <span className="ml-3 font-normal">Ayomide Johnson</span>
            </h1>
            <h1 className="w-full p-3 text-sm font-semibold text-fax-blue">
              Address:{" "}
              <span className="ml-3 font-normal">
                20, Abraham Adesanya Street
              </span>
            </h1>
            <h1 className="w-full p-3 text-sm font-semibold text-fax-blue">
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
