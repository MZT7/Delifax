import React from "react";
import { twMerge } from "tailwind-merge";

function Label(props) {
  return (
    <label
      className={twMerge("block  text-sm text-[#032B5A]", props?.className)}
      htmlFor={props?.for}
    >
      {props?.children}
    </label>
  );
}

export default Label;
