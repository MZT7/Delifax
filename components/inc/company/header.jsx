"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../images/DelifaxLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "@/components/Ads/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { TbUser } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
// import { getUser } from "@/reduxStore/features/auth/authSlice";

const Header = () => {
  const route = usePathname();
  // const dispatch = useDispatch();
  const userData = useSelector((state) => state?.auth?.user);

  const [auth, setAuth] = useState(true);

  const Links = [
    {
      name: "Profile",
      link: "/auth/company/profile",
      icon: <TbUser />,
    },
    {
      name: "Log out",
      link: "",
      icon: <MdOutlineLogout />,
      // color:'text-red-500'
    },
  ];

  return (
    <>
      <div className='text-black z-40 bg-gray-50 h-[80px] fixed inset-0 w-full shadow-lg shadow-gray-200 px-2 xl:px-0'>
        <div className='flex items-center justify-between h-full mx-auto w-[90%]'>
          <div className='flex items-center justify-center'>
            <Link href={`/`}>
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
            <div className='flex gap-x-5 text-[#032B5A] '>
              <Link href={`/auth/company/home`}>
                <h1 className='font-semibold '>Home</h1>
              </Link>
              <Link href={`/ourServices`}>
                <h1 className='font-semibold '>Our Services</h1>
              </Link>
              <Dropdown title='Account' items={Links} />
            </div>
          ) : (
            <div>
              {route == "/guest/login" ? (
                <Link href={`/guest/register`}>
                  <h1 className='bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide'>
                    Register
                  </h1>
                </Link>
              ) : (
                <Link href={`/guest/login`}>
                  <h1 className='bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide'>
                    Login
                  </h1>
                </Link>
              )}
            </div>
          )}

          {/* {route == "guest/login" ? (
            <Link href={`guest/register`}>
              <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
                Register
              </h1>
            </Link>
          ) : (
            <Link href={`guest/login`}>
              <h1 className="bg-[#0657B5] text-white py-2 px-4 rounded font-bold text-base tracking-wide">
                Login
              </h1>
            </Link>
          )} */}
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
