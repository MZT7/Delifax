"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch } from "react-redux";
import { getToken, getUser } from "@/reduxStore/features/auth/authSlice";
import { TbUser } from "react-icons/tb";

const Dropdown = ({ items, title }) => {
  const [drop, setDrop] = useState(false);
  const dispatch = useDispatch();

  // console.log(items);
  const show = () => {
    setDrop(!drop);
  };
  const handleLogout = (name) => {
    if (name === "Log out") {
      console.log("yes");
      // localStorage.clear();
      dispatch(getUser(null));
      dispatch(getToken(null));
    }
  };
  return (
    <ClickAwayListener onClickAway={() => setDrop(false)}>
      <div
        className='relative'
        onClick={() => setDrop(!drop)}
        onMouseEnter={() => setDrop(true)}
      >
        <button className='flex items-center cursor-pointer gap-x-1'>
          <h1 className='font-semibold '>{title}</h1>
          <BiChevronDown />
        </button>

        {/* <div className="absolute flex flex-col items-start px-2 pr-2 bg-white shadow-lg pl- top-10">
        <Link href={"qwee/aee"}>
          <h1 className="text-sm text-primary">MEZU</h1>
        </Link>
      </div> */}
        {drop && (
          <div
            className='absolute left-0 right-0 flex flex-col items-start px-1 space-y-1 transition-all bg-white rounded-sm shadow-lg w-28 top-10 '
            onMouseLeave={() => setDrop(false)}
          >
            {items.map((item, index) => (
              <Link
                href={item?.link}
                onClick={() => handleLogout(item?.name)}
                key={index}
                className={`w-full text-center `}
              >
                <h1
                  className={`inline-flex items-center justify-start w-full text-sm gap-x-1 ${
                    item?.name === "Log out" ? "text-red-500" : "text-primary"
                  }`}
                >
                  {item?.icon}

                  {item?.name}
                </h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
