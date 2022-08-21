import React, { useState } from "react";
import Label from "../ads/Label";
import Input from "../ads/Input";
import Form from "../ads/Form";
// import Button from "../ads/Button";

function Register() {
  const [see, setSee] = useState(false);

  const toggle = () => {
    setSee(!see);
  };
  return (
    <div className="max-w-md p-4 px-6 mx-auto my-6 bg-white border border-gray-400 rounded-lg shadow-md">
      <Form>
        <Label for="name">Name</Label>
        <Input id="name" type="text" required />

        <Label for="email">Email</Label>
        <Input id="email" type="text" required />

        <Label for="phone">Phone_no</Label>
        <Input id="phone" type="tel" required />

        <Label for="password">Password</Label>

        <div className="relative flex">
          <Input id="password" type={see ? "text" : "password"} required />
          <i
            className="absolute inline-flex cursor-pointer inset-x-96 inset-y-2"
            onClick={toggle}
          >
            {see ? "U" : "S"}
          </i>
        </div>
        <Label for="password_confirmation">ConfirmPassword</Label>

        <div className="relative flex">
          <Input
            id="password_confirmation"
            type={see ? "text" : "password"}
            required
          />
          <i
            className="absolute inline-flex cursor-pointer inset-x-96 inset-y-2"
            onClick={toggle}
          >
            {see ? "U" : "S"}
          </i>
        </div>
        <button className="inline-flex px-3 py-2 text-gray-100 bg-gray-700 rounded-md shadow-md">
          Sign in
        </button>
      </Form>
    </div>
  );
}

export default Register;
