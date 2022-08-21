import React from "react";

function Input(props, ref) {
    return (
        <input
            {...props}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ref={ref}
            autoComplete="off"
        />
    );
}
const forwardedRef = React.forwardRef(Input);
export default forwardedRef;
