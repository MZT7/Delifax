// import React from "react";
import React, { useState } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const SignupIn = () => {
  const [see, setSee] = useState(false);

  const toggle = () => {
    setSee(!see);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto">
      <h1 className="text-xl font-bold">User Registration</h1>
      <Form>
        <Label for="name" class="capitalize">
          name
        </Label>
        <Input id="name" type="text" required />

        <Label for="email" class="capitalize">
          Email
        </Label>
        <Input id="email" type="text" required />

        <Label for="phone" class="capitalize">
          Phone_no
        </Label>
        <Input id="phone" type="tel" required />

        <Label for="password" class="capitalize">
          Password
        </Label>

        <div className="relative flex">
          <Input id="password" type={see ? "text" : "password"} required />
          <i className="absolute right-1 inset-y-2 " onClick={toggle}>
            {see ? (
              <BsFillEyeSlashFill size={25} />
            ) : (
              <BsFillEyeFill size={25} />
            )}
          </i>
        </div>

        <Label for="password_confirmation" class="capitalize">
          ConfirmPassword
        </Label>

        <div className="relative flex">
          <Input
            id="password_confirmation"
            type={see ? "text" : "password"}
            required
          />
          <i className="absolute right-1 inset-y-2 " onClick={toggle}>
            {see ? (
              <BsFillEyeSlashFill size={25} />
            ) : (
              <BsFillEyeFill size={25} />
            )}
          </i>
        </div>

        <button className="inline-flex px-3 py-2 text-gray-100 capitalize bg-gray-700 rounded-md shadow-md">
          Sign Up
        </button>
      </Form>
    </div>
  );
};

export default SignupIn;
