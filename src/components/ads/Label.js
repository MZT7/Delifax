import React from "react";

function Label(props) {
  return (
    <label
      className={`block font-medium text-sm text-gray-700 ${props.class}`}
      htmlFor={props.for}
    >
      {props.children}
    </label>
  );
}

export default Label;
