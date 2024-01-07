"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/DelifaxLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const route = usePathname();
  const userData = useSelector((state) => state?.auth?.user);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="text-black z-40 bg-gray-50 h-[80px] inset-0 w-full shadow-lg shadow-gray-200 px-2 xl:px-0">
    <div
      className={`text-black z-40 bg-gray-50 h-[80px] inset-0 w-full shadow-lg shadow-gray-200 xl:px-0 transition-all ease-in-out duration-300 ${
        isScrolled ? "fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      <div className='flex items-center justify-between h-full mx-auto w-[90%]'>
        <div className='flex items-center justify-center'>
          <Link prefetch={false} href={`/`} scroll={false}>
            <Image
              src={logo}
              width={100}
              // height={500}
              alt='Picture of the author'
              priority={true}
              // placeholder="logo"
            />
          </Link>
        </div>
        {userData ? (
          ""
        ) : (
          <Link href={`/guest/login`} replace>
            <h1 className='bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide'>
              Get Started
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
