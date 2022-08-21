import React from "react";

function Form(props) {
  return (
    <form
      className="w-full p-4 px-6 mx-auto my-6 space-y-4 bg-white border border-gray-400 rounded-lg shadow-md"
      {...props}
    >
      {props.children}
    </form>
  );
}

export default Form;
