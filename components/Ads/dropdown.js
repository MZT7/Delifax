"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ClickAwayListener from "react-click-away-listener";

const Dropdown = ({ items, title }) => {
  const [drop, setDrop] = useState(false);

  // console.log(items);
  const show = () => {
    setDrop(!drop);
  };
  return (
    <ClickAwayListener onClickAway={() => setDrop(false)}>
      <div
        className="relative"
        onClick={() => setDrop(!drop)}
        onMouseEnter={() => setDrop(true)}
      >
        <button className="flex items-center cursor-pointer gap-x-1">
          <h1 className="font-semibold ">{title}</h1>
          <BiChevronDown />
        </button>

        {/* <div className="absolute flex flex-col items-start px-2 pr-2 bg-white shadow-lg pl- top-10">
        <Link href={"qwee/aee"}>
          <h1 className="text-sm text-primary">MEZU</h1>
        </Link>
      </div> */}
        {drop && (
          <div
            className="absolute flex flex-col items-start px-2 pr-2 space-y-1 transition-all bg-white rounded-sm shadow-lg top-10 "
            onMouseLeave={() => setDrop(false)}
          >
            {items.map((item, index) => (
              <Link href={item.link} key={index}>
                <h1 className="text-sm text-primary">{item.name}</h1>
              </Link>
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
