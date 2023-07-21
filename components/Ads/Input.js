import React from "react";
import { twMerge } from "tailwind-merge";
function Input(props, ref) {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-[#EDF5FF] border border-[#EDF5FF] text-[#7199C9]  rounded-sm mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-2.5 text-base placeholder:text-[#7099C9] ",
        props?.className
      )}
      ref={ref}
      autoComplete="off"
    />
  );
}
const forwardedRef = React.forwardRef(Input);
export default forwardedRef;
