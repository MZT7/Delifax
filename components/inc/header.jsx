"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/DelifaxLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const route = usePathname();
  return (
    <>
      <div className="text-black z-40 bg-gray-50 h-[80px] fixed inset-0 w-full shadow-lg shadow-gray-200 px-2 xl:px-0">
        <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
          <div className="flex items-center justify-center">
            <Link href={`/`}>
              <Image
                src={logo}
                width={100}
                // height={500}
                alt="Picture of the author"
                priority={true}
                // placeholder="logo"
              />
            </Link>
          </div>
          {route == "guest/login" ? (
            <Link href={`/guest/register`}>
              <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
                Register
              </h1>
            </Link>
          ) : (
            <Link href={`/guest/login`}>
              <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
                Login
              </h1>
            </Link>
          )}
          {/* <Link href={`/login`}>
            <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
              Login
            </h1>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Header;
