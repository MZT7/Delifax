import React from "react";

function Button(props, ref) {
    return (
        <div>
            <button
                {...props}
                ref={ref}
                className="bg-blue-400  text-white py-2 px-4 rounded-full shadow-lg font-bold xl:m-7 m-2 tracking-wider"
            >
                {props.children}
            </button>
        </div>
    );
}
const Ref = React.forwardRef(Button);
export default Ref;
