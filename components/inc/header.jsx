import React from "react";
import Image from "next/image";
import logo from "../images/DelifaxLogo.png";

const header = () => {
  return (
    <>
      <div className="text-black bg-gray-50 h-[80px] fixed inset-0 w-full shadow-lg shadow-gray-200 px-2 xl:px-0">
        <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              width={100}
              // height={500}
              alt="Picture of the author"
              priority={true}
              placeholder="logo"
            />
          </div>
          <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
            Get Started
          </h1>
        </div>
      </div>
    </>
  );
};

export default header;
